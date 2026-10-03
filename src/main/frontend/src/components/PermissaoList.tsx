import type { Permissao } from '../types/Permissao';
import PermissaoItem from './PermissaoItem';

interface Props {
  permissoes: Permissao[];
  onEditar: (permissao: Permissao) => void;
  onExcluir: (permissao: Permissao) => void;
}

export default function PermissaoList({ permissoes, onEditar, onExcluir }: Props) {
  if (permissoes.length === 0) {
    return <p>Nenhuma permissão cadastrada.</p>;
  }

  return (
    <ul>
      {permissoes.map((permissao) => (
        <li key={permissao.id}>
          <PermissaoItem permissao={permissao} />
          <div className="acoes">
            <button onClick={() => onEditar(permissao)}>Editar</button>
            <button className="excluir" onClick={() => onExcluir(permissao)}>Excluir</button>
          </div>
        </li>
      ))}
    </ul>
  );
}
