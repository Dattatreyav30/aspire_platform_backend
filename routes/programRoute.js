const express = require('express')

const router = express.Router();
const multer = require('multer');

const upload = multer({ storage: multer.memoryStorage() });

const programController = require('../controllers/programController');


router.get('/get-static-variables', programController.getStaticVariables);
router.post('/upload-program', upload.single('file'), programController.postUploadPrograms);


module.exports = router