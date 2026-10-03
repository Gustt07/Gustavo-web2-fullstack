import { useEffect, useState } from 'react';
import api from '../services/api';
import type { Permissao } from '../types/Permissao';
import PermissaoForm from '../components/PermissaoForm';
import PermissaoList from '../components/PermissaoList';

function PermissoesPage() {
  const [permissoes, setPermissoes] = useState<Permissao[]>([]);
  const [editando, setEditando] = useState<Permissao | null>(null);

  function carregarPermissoes() {
    api.get<Permissao[]>('/permissoes').then((resposta) => {
      setPermissoes(resposta.data);
    });
  }

  useEffect(() => {
    carregarPermissoes();
  }, []);

  async function excluir(id: number) {
    await api.delete(`/permissoes/${id}`);
    carregarPermissoes();
  }

  return (
    <section>
      <h2>Permissões</h2>

      <PermissaoForm
        key={editando?.id ?? 'novo'}
        permissaoEditando={editando}
        onPermissaoSalva={() => {
          carregarPermissoes();
          setEditando(null);
        }}
      />

      <PermissaoList
        permissoes={permissoes}
        onEditar={setEditando}
        onExcluir={(permissao) => excluir(permissao.id)}
      />
    </section>
  );
}

export default PermissoesPage;
