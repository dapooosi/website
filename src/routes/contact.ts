import express from 'express';  
const router = express.Router();  

router.get('/', (req, res) => {  
  res.render('contact', { title: 'Kontakt' });  
});  

export default router;
