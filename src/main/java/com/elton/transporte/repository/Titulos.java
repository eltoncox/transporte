package com.elton.transporte.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.elton.transporte.model.Titulo;

public interface Titulos extends JpaRepository<Titulo, Long> {
	
	public List<Titulo> findByDescricaoContaining(String descricao );
}