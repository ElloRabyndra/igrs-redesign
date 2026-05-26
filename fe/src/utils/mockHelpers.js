import {
  contentClassificationIcons,
  ratingFallbackImages,
  blogFallbackImages,
  gameFallbackImages,
  gameGalleryFallbackImages,
} from "../mock/constants.js";

// Content Classification Icon
export const getContentIcon = (iconName) => {
  return contentClassificationIcons[iconName] || null;
};

// Rating Image
export const getRatingImage = (ratingId, imageUrl) => {
  return imageUrl || ratingFallbackImages[ratingId];
};

// Blog Image
export const getBlogImage = (blogId, imageUrl) => {
  return imageUrl || blogFallbackImages[blogId];
};

// Game Image
export const getGameImage = (gameId, imageUrl) => {
  return imageUrl || gameFallbackImages[gameId];
};

// Game Gallery
export const getGameGallery = (gameId, gallery = []) => {
  return gallery.map((item, index) => ({
    ...item,
    image_url:
      item.image_url || gameGalleryFallbackImages[gameId]?.[index] || "",
  }));
};
