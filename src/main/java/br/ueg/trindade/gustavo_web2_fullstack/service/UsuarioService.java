package br.ueg.trindade.gustavo_web2_fullstack.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.ueg.trindade.gustavo_web2_fullstack.model.Usuario;
import br.ueg.trindade.gustavo_web2_fullstack.repository.UsuarioRepository;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public List<Usuario> listarTodos() {
        return usuarioRepository.findAll();
    }

    public Usuario buscarPorId(Long id) {
        return usuarioRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));
    }

    public Usuario criar(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    public Usuario atualizar(Long id, Usuario usuarioAtualizado) {
        Usuario usuario = buscarPorId(id);
        usuario.setNome(usuarioAtualizado.getNome());
        usuario.setUsername(usuarioAtualizado.getUsername());
        usuario.setEmail(usuarioAtualizado.getEmail());
        return usuarioRepository.save(usuario);
    }

    public void excluir(Long id) {
        usuarioRepository.deleteById(id);
    }
}
