import type { Produto } from '../types/Produto';

export default function ProdutoItem({ produto }: { produto: Produto }) {
  return <div><strong>{produto.nome}</strong> <span>— {produto.descricao}</span><span> · {produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span></div>;
}
