import Redis from "redis";

/**
 * Connect to Redis
 * @returns
 */
export async function connectToRedis() {
  const redisClient = Redis.createClient();
  await redisClient.connect();
  console.log("connect to redis");
  console.log(typeof redisClient);
  return redisClient;
}
