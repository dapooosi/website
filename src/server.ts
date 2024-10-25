
import express from 'express';
import path from 'path';
import indexRouter from './routes/index';
import galleryRouter from './routes/gallery';
import aboutRouter from './routes/about';
import contactRouter from './routes/contact';

const app = express();
const PORT = process.env.PORT || 3000;

// View Engine Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', indexRouter);
app.use('/gallery', galleryRouter);
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);

// Server Start
app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});

