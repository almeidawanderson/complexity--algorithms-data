const produtos = [
  { nome: "Notebook", preco: 3500, categoria: "Eletrônicos" },
  { nome: "Mouse", preco: 80, categoria: "Acessórios" },
  { nome: "Geladeira", preco: 2700, categoria: "Eletrodomésticos" },
  { nome: "TV", preco: 4000, categoria: "Eletrônicos" },
  { nome: "Teclado", preco: 120, categoria: "Acessórios" },
];

const eletronics = produtos.filter(produto => produto.categoria === "Eletrônicos")
  .map(produto => {
    return {
      nome: produto.nome,
      valorFinal: produto.preco - produto.preco * 0.10
    } 
  })

  console.log("Produtos Eletrônicos com desconto:", eletronics);