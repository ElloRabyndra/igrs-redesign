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

    const data = await response.json();
    console.log("Success to fetch ratings");
    return data;
  } catch (error) {
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

    const data = await response.json();
    console.log("Success to fetch rating detail");
    return data;
  } catch (error) {
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

    const data = await response.json();
    console.log("Success to fetch content classifications");
    return data;
  } catch (error) {
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

    const data = await response.json();
    console.log("Success to fetch games");
    return data;
  } catch (error) {
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

    const data = await response.json();
    console.log("Success to fetch game detail");
    return data;
  } catch (error) {
    const mockData = gameDetail.find(
      (item) => item.slug === slug || item.id === Number(slug),
    );
    console.log("Using game detail mock data", mockData);
    return mockData;
  }
};

// Blog
export const getBlogs = async () => {
  try {
    const response = await fetch(`${API_URL}/blog`);

    if (!response.ok) {
      throw new Error("Failed to fetch blogs");
    }

    const data = await response.json();
    console.log("Success to fetch blogs");
    return data;
  } catch (error) {
    console.log("Using blogs mock data", blogs);
    return blogs;
  }
};
