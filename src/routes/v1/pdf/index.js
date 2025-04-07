const express = require("express");
const multer = require("multer");
const router = express.Router();

const { v1 } = require("../../../controllers");
const { pdfControllers } = v1;

const { storage } = require("../../../utils/multer/index");

const upload = multer({
  storage: storage,
});

router.route('/pdf').post(upload.single('pdf'), pdfControllers.handleUploadPdf);

module.exports = router;
