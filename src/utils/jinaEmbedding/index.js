const { JinaEmbeddings } = require("@langchain/community/embeddings/jina");

const generateEmbedding = async (chunks) => {
  const embeddings = new JinaEmbeddings({
    apiKey: process.env.JINA_API_KEY,
    model: "jina-clip-v2",
  });
  const embedding = await embeddings.embedDocuments(chunks);
  return embedding;
};

module.exports = {
  generateEmbedding,
};
