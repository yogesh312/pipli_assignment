const router = require("express").Router();
const { catchErrors } = require("../handlers/errorHandlers");
const Controller = require("../controllers/Controller");
const multer = require('../middleware/multer')



router.post("/data",  multer.single('file'), catchErrors(Controller.addData));
router.get("/find",  catchErrors(Controller.findUser)); 

module.exports = router;
