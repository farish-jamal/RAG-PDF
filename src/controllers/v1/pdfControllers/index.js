const ApiResponse = require("../../../utils/apiResponse");
const fs = require("node:fs");

const { v1 } = require("../../../services/index");
const { pdfService } = v1;

const handleUploadPdf = async (req, res) => {
  if (!req.file) {
    return res.status(400).json(ApiResponse.error("No file uploaded"));
  }
  const { message, data } = await pdfService.pdfService(req.file);
  fs.unlink(req.file.path, (err) => {
    if (err) {
      console.log(`Error while removing the pdf file ${err.message}`);
    }
  });
  if (!data) {
    return res.status(500).json(ApiResponse.error(message));
  }
  return res.status(200).json(ApiResponse.success(message, data));
};

module.exports = {
  handleUploadPdf,
};
