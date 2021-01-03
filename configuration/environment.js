const path = require('path');

module.exports = {
  paths: {
    // Source files
    // Исходники
    source: path.resolve(__dirname, '../src/'),

    // Production build files
    // Директория файлов сборки
    output: path.resolve(__dirname, '../dist/'),
  },
  server: {
    host: 'localhost',
    port: 8080,
  },
  limits: {
    /* Image files size in bytes. Below this value the image file will be served as DataURL (inline base64). */
    // Размер файлов изображений в байтах. Ниже этого значения файл изображения будет обслуживаться как DataURL (встроенный base64).
    images: 8192,

    /* Font files size in bytes. Below this value the font file will be served as DataURL (inline base64). */
    // Размер файлов шрифтов в байтах. Ниже этого значения файл шрифта будет обслуживаться как DataURL (встроенный base64).
    fonts: 8192,
  },
};
