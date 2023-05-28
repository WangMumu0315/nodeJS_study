var express = require('express');
var router = express.Router();
const formidable = require('formidable');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/portrait',(req,res) => {
  res.render('portrait')
})
router.post('/portrait',(req,res,next) => {
  const form = formidable({ 
    multiples: true,
    uploadDir:__dirname + '/../public/images',
    keepExtensions:true
  });

  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }

    // console.log(fields);
    // console.log(files);

    let url = '/images/' + files.portait.newFilename
    res.send(url)

    // res.send('ok')
  });
})

module.exports = router;
