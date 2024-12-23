import express  from 'express';

const router = express.Router();

import programController from '../controllers/programController'


router.get('/get-static-variables',programController.getStaticVariables);


module.exports = router