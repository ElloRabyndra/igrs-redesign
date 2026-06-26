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
    console.error("Error fetching ratings:", error);
    throw error;
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
    console.error(`Error fetching rating detail for id ${id}:`, error);
    throw error;
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
    console.error("Error fetching content classifications:", error);
    throw error;
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
    console.error("Error fetching games:", error);
    throw error;
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
    console.error(`Error fetching game detail for slug ${slug}:`, error);
    throw error;
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
    console.error("Error fetching blogs:", error);
    throw error;
  }
};
