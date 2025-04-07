const fs = require("node:fs");
const pdf = require("pdf-parse");
const generateReleventChunks = require("../../../utils/generateChunks");
const { generateEmbedding } = require("../../../utils/jinaEmbedding");

const pdfService = async (pdfFile) => {
  const dataBuffer = fs.readFileSync(pdfFile.path);
  if (!dataBuffer) {
    return { message: "Error while creating buffer", data: null };
  }
  const parsedData = await pdf(dataBuffer);
  if (!parsedData) {
    return { message: "Error while parsing the data", data: null };
  }
  // Creating the chunks out of extracted data from PDF
  const chunks = generateReleventChunks(parsedData.text);
  // Creating embedding of the chunk using JINA Embedding (Creating Relevent Vectors)
  const embedding = await generateEmbedding(chunks);
  // TODO: Store these Vectors in ChormaDB
  // TODO: Also Create conext of the user for whom this vector belongs to
  console.log(embedding, "<---Vector Embedding of the PDF");

  return { message: "Pdf processing failed", data: chunks };
};

module.exports = {
  pdfService,
};
