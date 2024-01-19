import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dzdnb6mab",
  api_key: "661948623355688",
  api_secret: "xGUu-2JH7nBzNOQLP_izS47u3Ak",
});

module.exports = {
    // other webpack configuration options...
    cloudinary,
    resolve: {
      fallback: {
        "http": require.resolve("stream-http")
      }
    }
  };