import multer from 'multer';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/temp');
    },
    filename: function (req, file, cb) {
        cb(null, `${file.fieldname}-${uuidv4()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage });

export default upload;
