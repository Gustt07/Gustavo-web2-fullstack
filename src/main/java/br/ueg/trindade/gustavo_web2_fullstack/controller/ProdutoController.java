package br.ueg.trindade.gustavo_web2_fullstack.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.ueg.trindade.gustavo_web2_fullstack.model.Produto;
import br.ueg.trindade.gustavo_web2_fullstack.service.ProdutoService;

@RestController
@RequestMapping("/api/produtos")
@CrossOrigin(origins = "http://localhost:5173")
public class ProdutoController {

    @Autowired
    private ProdutoService produtoService;

    @GetMapping
    public List<Produto> getAllProdutos() {
        return produtoService.listarTodos();
    }

    @GetMapping("/{id}")
    public Produto getProdutoById(@PathVariable Long id) {
        return produtoService.buscarPorId(id);
    }

    @PostMapping
    public Produto createProduto(@RequestBody Produto produto) {
        return produtoService.criar(produto);
    }

    @PutMapping("/{id}")
    public Produto updateProduto(@PathVariable Long id, @RequestBody Produto produtoAtualizado) {
        return produtoService.atualizar(id, produtoAtualizado);
    }

    @DeleteMapping("/{id}")
    public void deleteProduto(@PathVariable Long id) {
        produtoService.excluir(id);
    }
}
