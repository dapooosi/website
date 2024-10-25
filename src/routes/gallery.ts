
import { Router } from 'express';
import multer from 'multer';
import path from 'path';

const router = Router();

// Multer-Konfiguration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../public/images/uploads'));
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

router.get('/', (req, res) => {
  res.render('gallery', { title: 'Galerie' });
});

router.post('/upload', upload.single('image'), (req, res) => {
  res.render('gallery', {
    title: 'Galerie',
    message: 'Bild erfolgreich hochgeladen!',
    imagePath: `/images/uploads/${req.file?.filename}`,
  });
});

export default router;

