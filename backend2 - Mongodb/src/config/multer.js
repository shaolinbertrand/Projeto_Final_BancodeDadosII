const multer = require('multer');
const path = require('path');

module.exports = multer({ storage: multer.diskStorage({
    destination: path.join(__dirname,'..','upload'),
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  })
})
 
/*
  limits: {
    fileSize: 4 * 1024 * 1024, // 4MB
  },
  fileFilter: (req, file, cb) => {
    const mimeTypes = [
      'image/jpeg',
      'image/png'
    ];

    if (!mimeTypes.includes(file.mimetype)) {
      return cb(null, false);
    }

    cb(null, true);
  },
}
*/

