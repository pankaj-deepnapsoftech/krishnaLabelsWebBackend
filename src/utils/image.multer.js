import multer from 'multer';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Resolve __dirname in ES6 modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/temp'));
    },
    filename: function (req, file, cb) {
        cb(null, `${file.fieldname}-${uuidv4()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage });

export default upload;
