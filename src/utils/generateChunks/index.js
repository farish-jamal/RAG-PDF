const generateReleventChunks = (string, wordsPerChunk = 100) => {
  const words = string.split(/\s+/);

  const chunks = [];

  for (let i = 0; i < words.length; i += wordsPerChunk) {
    const chunk = words.slice(i, i + wordsPerChunk).join(" ");
    chunks.push(chunk);
  }
  return chunks;
};

module.exports = generateReleventChunks;
