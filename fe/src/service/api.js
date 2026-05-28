import {
  ratings,
  ratingDetail,
  contentClassifications,
  games,
  gameDetail,
  blogs,
} from "../mock/data.js";

const API_URL = import.meta.env.VITE_API_URL;

// Rating
export const getRatings = async () => {
  try {
    const response = await fetch(`${API_URL}/rating`);

    if (!response.ok) {
      throw new Error("Failed to fetch ratings");
    }

    console.log("Success to fetch ratings");
    return await response.json();
  } catch (error) {
    console.error(error);
    console.log("Using ratings mock data", ratings);

    return ratings;
  }
};

export const getRatingDetail = async (id) => {
  try {
    const response = await fetch(`${API_URL}/rating/${id}`);

    if (!response.ok) {
      throw new Error("Failed to fetch rating detail");
    }

    console.log("Success to fetch rating detail");
    return await response.json();
  } catch (error) {
    console.error(error);
    console.log(
      "Using rating detail mock data",
      ratingDetail.find((item) => item.id === Number(id)),
    );

    return ratingDetail.find((item) => item.id === Number(id));
  }
};

// Content Classification
export const getContentClassifications = async () => {
  try {
    const response = await fetch(`${API_URL}/content-classification`);

    if (!response.ok) {
      throw new Error("Failed to fetch content classifications");
    }

    console.log("Success to fetch content classifications");
    return await response.json();
  } catch (error) {
    console.error(error);
    console.log(
      "Using content classifications mock data",
      contentClassifications,
    );

    return contentClassifications;
  }
};

// Game
export const getGames = async () => {
  try {
    const response = await fetch(`${API_URL}/game`);

    if (!response.ok) {
      throw new Error("Failed to fetch games");
    }

    console.log("Success to fetch games");
    return await response.json();
  } catch (error) {
    console.error(error);
    console.log("Using games mock data", games);

    return games;
  }
};

export const getGameDetail = async (slug) => {
  try {
    const response = await fetch(`${API_URL}/game/${slug}`);

    if (!response.ok) {
      throw new Error("Failed to fetch game detail");
    }

    console.log("Success to fetch game detail");
    return await response.json();
  } catch (error) {
    console.error(error);
    console.log(
      "Using game detail mock data",
      gameDetail.find((item) => item.slug === slug),
    );

    return gameDetail.find((item) => item.slug === slug);
  }
};

// Blog
export const getBlogs = async () => {
  try {
    const response = await fetch(`${API_URL}/blog`);

    if (!response.ok) {
      throw new Error("Failed to fetch blogs");
    }

    console.log("Success to fetch blogs");
    return await response.json();
  } catch (error) {
    console.error(error);
    console.log("Using blogs mock data", blogs);

    return blogs;
  }
};
