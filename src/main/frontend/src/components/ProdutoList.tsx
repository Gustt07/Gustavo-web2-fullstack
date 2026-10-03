import type { Produto } from '../types/Produto';
import ProdutoItem from './ProdutoItem';

interface Props {
  produtos: Produto[];
  onEditar: (produto: Produto) => void;
  onExcluir: (produto: Produto) => void;
}

export default function ProdutoList({ produtos, onEditar, onExcluir }: Props) {
  if (produtos.length === 0) {
    return <p>Nenhum produto cadastrado.</p>;
  }

  return (
    <ul>
      {produtos.map((produto) => (
        <li key={produto.id}>
          <ProdutoItem produto={produto} />
          <div className="acoes">
            <button onClick={() => onEditar(produto)}>Editar</button>
            <button className="excluir" onClick={() => onExcluir(produto)}>Excluir</button>
          </div>
        </li>
      ))}
    </ul>
  );
}
