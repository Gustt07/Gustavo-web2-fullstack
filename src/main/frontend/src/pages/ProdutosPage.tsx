import { useEffect, useState } from 'react';
import api from '../services/api';
import type { Produto } from '../types/Produto';
import ProdutoForm from '../components/ProdutoForm';
import ProdutoList from '../components/ProdutoList';

function ProdutosPage() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [editando, setEditando] = useState<Produto | null>(null);

  function carregarProdutos() {
    api.get<Produto[]>('/produtos').then((resposta) => {
      setProdutos(resposta.data);
    });
  }

  useEffect(() => {
    carregarProdutos();
  }, []);

  async function excluir(id: number) {
    await api.delete(`/produtos/${id}`);
    carregarProdutos();
  }

  return (
    <section>
      <h2>Produtos</h2>

      <ProdutoForm
        key={editando?.id ?? 'novo'}
        produtoEditando={editando}
        onProdutoSalvo={() => {
          carregarProdutos();
          setEditando(null);
        }}
      />

      <ProdutoList
        produtos={produtos}
        onEditar={setEditando}
        onExcluir={(produto) => excluir(produto.id)}
      />
    </section>
  );
}

export default ProdutosPage;
