import { contentClassificationIcons } from "./constants.js";

// Content Classification Icon
export const getContentIcon = (iconName) => {
  return contentClassificationIcons[iconName] || null;
};

// Content Classification Type
export const getContentType = (content_icon) => {
  if (!content_icon) return "";
  return content_icon.replace(/([A-Z])/g, " $1").trim();
};
