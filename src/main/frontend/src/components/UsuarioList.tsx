import type { Usuario } from '../types/Usuario';
import UsuarioItem from './UsuarioItem';

interface Props {
  usuarios: Usuario[];
  onEditar: (usuario: Usuario) => void;
  onExcluir: (usuario: Usuario) => void;
}

export default function UsuarioList({ usuarios, onEditar, onExcluir }: Props) {
  if (usuarios.length === 0) {
    return <p>Nenhum usuário cadastrado.</p>;
  }

  return (
    <ul>
      {usuarios.map((usuario) => (
        <li key={usuario.id}>
          <UsuarioItem usuario={usuario} />
          <div className="acoes">
            <button onClick={() => onEditar(usuario)}>Editar</button>
            <button className="excluir" onClick={() => onExcluir(usuario)}>Excluir</button>
          </div>
        </li>
      ))}
    </ul>
  );
}
