db.runCommand({
  insert: "resumoProdutos",
  documents: [{ franquia: "McDonalds", totalProdutos: db.produtos.countDocuments({}) }],
});

db.resumoProdutos.find({}, { _id: 0, franquia: 1, totalProdutos: 1 });