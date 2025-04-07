const fs = require("node:fs");
const pdf = require("pdf-parse");
const generateReleventChunks = require("../../../utils/generateChunks");

const pdfService = async (pdfFile) => {
  const dataBuffer = fs.readFileSync(pdfFile.path);
  if (!dataBuffer) {
    return { message: "Error while creating buffer", data: null };
  }
  const parsedData = await pdf(dataBuffer);
  if (!parsedData) {
    return { message: "Error while parsing the data", data: null };
  }
  const chunks = generateReleventChunks(parsedData.text);

  return { message: "Pdf processing failed", data: chunks };
};

module.exports = {
  pdfService,
};
