package com.elton.transporte.model;

public enum StatusTempo {
	
	MANHA("Manhã"),
	TARDE("Tarde");
	
	private String clima;
	

	StatusTempo(String clima) {
		this.clima = clima;
	}


	public String getClima() {
		return clima;
	}
	
}