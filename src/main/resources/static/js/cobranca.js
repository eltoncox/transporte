$('#confirmacaoExclusaoModal').on('show.bs.modal', function(event) {
var button = $(event.relatedTarget);
	
	var codigoTitulo = button.data('codigo');
	var descricaoTitulo = button.data('aluno');
	
	var modal = $(this);
	var form = modal.find('form');
	var action = form.data('url-base');
	if (!action.endsWith('/')) {
		action += '/';
	}
	form.attr('action', action + codigoTitulo);
	
	modal.find('.modal-body span').html('Tem certeza que deseja excluir o aluno(a)<strong> ' + descricaoTitulo + '</strong>?');
});

$(function() {
	
	// .js-currency o ponto significa busque todas a classe [ js-currency ]
	$('.cpfMask').mask('000.000.000-00');
	$('.foneCel').mask('(00)00000-0000');
	$('.pagamento').mask('999.999.990,00',{reverse: true});//$('.').mask(''); 
	$('.js-currency').maskMoney({decimal: ',', thousands: '.', allowZero: true}); 
	$('[rel="tooltip"]').tooltip();
	
	$('.js-atualizar-status').on('click', function(event) {
		event.preventDefault();
		
		var botaoReceber = $(event.currentTarget);
		var urlReceber = botaoReceber.attr('href');
		
		var response = $.ajax({
			url: urlReceber,
			type: 'PUT'
		});
		
		
		response.done(function(e) {
			var codigoTitulo = botaoReceber.data('codigo');
			$('[data-role=' + codigoTitulo + ']').html('<span class="label label-success">' + e + '</span>');
			botaoReceber.hide();
		}); 
		// exemplo de recurso => botaoReceber.hide();// desaparece o botão
		
		
		response.fail(function(e) {
			console.log(e);
			alert('Erro recebendo aluno');
		});
			
	});
});	