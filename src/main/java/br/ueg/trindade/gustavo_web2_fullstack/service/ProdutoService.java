package br.ueg.trindade.gustavo_web2_fullstack.service;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.ueg.trindade.gustavo_web2_fullstack.model.Produto;
import br.ueg.trindade.gustavo_web2_fullstack.repository.ProdutoRepository;

@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepository produtoRepository;

    public List<Produto> listarTodos() {
        return produtoRepository.findAll();
    }

    public Produto buscarPorId(Long id) {
        return produtoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Produto não encontrado"));
    }

    public Produto criar(Produto produto) {
        validarPreco(produto);
        return produtoRepository.save(produto);
    }

    public Produto atualizar(Long id, Produto produtoAtualizado) {
        validarPreco(produtoAtualizado);

        Produto produto = buscarPorId(id);
        produto.setNome(produtoAtualizado.getNome());
        produto.setDescricao(produtoAtualizado.getDescricao());
        produto.setPreco(produtoAtualizado.getPreco());
        return produtoRepository.save(produto);
    }

    public void excluir(Long id) {
        produtoRepository.deleteById(id);
    }

    private void validarPreco(Produto produto) {
        if (produto.getPreco() != null && produto.getPreco().compareTo(BigDecimal.ZERO) < 0) {
            throw new RuntimeException("O preço do produto não pode ser negativo");
        }
    }
}
