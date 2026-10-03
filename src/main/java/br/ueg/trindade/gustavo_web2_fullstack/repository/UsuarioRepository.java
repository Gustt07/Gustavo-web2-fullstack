package br.ueg.trindade.gustavo_web2_fullstack.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.ueg.trindade.gustavo_web2_fullstack.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
}
