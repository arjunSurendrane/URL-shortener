import mongoose from "mongoose";

/**
 * Connected to Mongodb
 */
export const connectedToDb = () => {
  const db = process.env.MONGO_DB;
  mongoose.connect(db).then(() => {
    console.log("connected to mongodb");
  });
};
