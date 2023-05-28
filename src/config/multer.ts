import { Options, diskStorage } from 'multer'
import { resolve } from 'path'
import { randomBytes } from 'crypto'

export const multerConfig = {
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB
  },
  fileFilter: (request, file, callback) => {
    const formats = [
      'image/jpeg',
      'image/jpg',
      'image/png'
    ];

    if (formats.includes(file.mimetype)) {
      callback(null, true)
    }  else {
      callback(new Error('Format not accepted'))
    }
  }
} as Options