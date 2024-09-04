const crypto = require('crypto');
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images/upload')
    },
    filename: function (req, file, cb) {
      crypto.randomBytes(12, (err,bytes)=>{
        const filename = bytes.toString("hex") + path.extname(file.originalname);
        cb(null, filename);
      })
    }
})
  
const upload = multer({ storage: storage })

module.exports = upload;