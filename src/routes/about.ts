import express from 'express';  
const router = express.Router();  

router.get('/', (req, res) => {  
  res.render('about', { title: 'Über uns' });  
});  

export default router;
