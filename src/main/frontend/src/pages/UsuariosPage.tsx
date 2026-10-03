import { useEffect, useState } from 'react';
import api from '../services/api';
import type { Usuario } from '../types/Usuario';
import UsuarioForm from '../components/UsuarioForm';
import UsuarioList from '../components/UsuarioList';

function UsuariosPage() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [editando, setEditando] = useState<Usuario | null>(null);

  function carregarUsuarios() {
    api.get<Usuario[]>('/usuarios').then((resposta) => {
      setUsuarios(resposta.data);
    });
  }

  useEffect(() => {
    carregarUsuarios();
  }, []);

  async function excluir(id: number) {
    await api.delete(`/usuarios/${id}`);
    carregarUsuarios();
  }

  return (
    <section>
      <h2>Usuários</h2>

      <UsuarioForm
        key={editando?.id ?? 'novo'}
        usuarioEditando={editando}
        onUsuarioSalvo={() => {
          carregarUsuarios();
          setEditando(null);
        }}
      />

      <UsuarioList
        usuarios={usuarios}
        onEditar={setEditando}
        onExcluir={(usuario) => excluir(usuario.id)}
      />
    </section>
  );
}

export default UsuariosPage;
