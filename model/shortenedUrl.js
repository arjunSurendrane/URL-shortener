import mongoose from "mongoose";

/**
 * shortenedUrl Schema
 */
const shortenedUrlSchema = new mongoose.Schema({
  link: String,
  shortenedLink: String,
});

/**
 * Create shortenedUrls collection
 */
const ShortenedUrl = mongoose.model("shortenedUrl", shortenedUrlSchema);
export default ShortenedUrl;
