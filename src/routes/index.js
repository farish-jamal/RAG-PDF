const express = require("express");
const router = express.Router();

const supportedVersions = ["v1"];

router.use((req, res, next) => {
  const version = req.path.split("/")[1];
  if (!supportedVersions.includes(version)) {
    return res.status(404).json({ error: "API version not supported" });
  }
  next();
});

// Mount routes for v1
const { pdfRouter } = require("./v1");
router.use("/v1", pdfRouter);

module.exports = router;
