let express = require('express');
let router = express.Router();

// Require controller modules
let partController = require('../controllers/partController');

/* GET request for each part detail by id. 
http://localhost:3000/manage-part/part-info/[id]
*/
router.get('/part-info/:id', partController.partDetailGet);


/* GET request for list of all parts 
http://localhost:3000/manage-part/parts
*/
router.get('/parts', partController.partListGet);


/* GET request for list of all parts  type
http://localhost:3000/manage-part/part-type
*/
router.get('/part-type', partController.partTypeListGet);


/* GET request for list of atm for d
http://localhost:3000/manage-part/atm-list
*/
router.get('/part-atm-list', partController.ttAtmListGet);

/* POST request for creating part.
http://localhost:3000/manage-part/create
*/
router.post('/create', partController.partCreatePost);


/* POST request for update part.
http://localhost:3000/manage-part/update
*/
router.post('/update', partController.partUpdatePost);


module.exports = router;