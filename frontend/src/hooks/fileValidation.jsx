export const isValidImageFile = (file) => {
  return file && file.type.match(/^image\/(jpeg|png|gif)$/);
};

export const isValidGpxFile = (file) => {
  return file && file.name.endsWith(".gpx");
};
