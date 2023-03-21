import mongoose from "mongoose";
import ShortenedUrl from "../model/shortenedUrl.js";
import { getOrSetFunction } from "./redis.js";

/**
 * Store link in to database
 * @param {String} link - url link
 * @returns {Object} - Mongoose collection
 */
export const saveShortenedLink = async (link) => {
  const res = await ShortenedUrl.findOne({ link });
  if (res) return res;
  const id = new mongoose.Types.ObjectId();
  let shortLink = JSON.stringify(id).substring(1, 8);
  return await ShortenedUrl.create({
    _id: id,
    link,
    shortLink,
  });
};

/**
 * Find Link
 * @param {String} id - shortlink key
 * @returns -
 */
export const findOriginalLink = async (id) => {
  return await getOrSetFunction(`id`, () => {
    return ShortenedUrl.findOne({ shortLink: id });
  });
};
