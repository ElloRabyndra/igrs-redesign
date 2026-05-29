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

// Content Classification Type
export const getContentType = (content_icon) => {
  return content_icon.replace(/([A-Z])/g, " $1").trim();
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
