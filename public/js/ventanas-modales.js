$(function(){
	//evento que se produce al hacer clic en el boton cerrar de la ventana
	$('.Afiliar_Otro').live('click',function(eEvento){
		//prevenimos el comportamiento normal del enlace
		eEvento.preventDefault();
		//buscamos la ventana padre (del boton "cerrar")
		var $objVentana=$($(this).parents().get(1));
		
		//cerramos la ventana suavemente
		$objVentana.fadeOut(300,function(){
			//eliminamos la ventana del DOM
			$(this).remove();
			//ocultamos el overlay suavemente
			$('#divOverlay').fadeOut(500,function(){
				//eliminamos el overlay del DOM
				$(this).remove();
				window.location.replace("afiliaciondigitel");
			});
		});
	});

	$('.Realizar_Recarga').live('click',function(eEvento){
		//prevenimos el comportamiento normal del enlace
		eEvento.preventDefault();
		//buscamos la ventana padre (del boton "cerrar")
		var $objVentana=$($(this).parents().get(1));
		
		//cerramos la ventana suavemente
		$objVentana.fadeOut(300,function(){
			//eliminamos la ventana del DOM
			$(this).remove();
			//ocultamos el overlay suavemente
			$('#divOverlay').fadeOut(500,function(){
				//eliminamos el overlay del DOM
				$(this).remove();
				window.location.replace("digitelrecarga");
			});
		});
	});

	$('.clsVentanaCerrar').live('click',function(eEvento){
		//prevenimos el comportamiento normal del enlace
		eEvento.preventDefault();
		//buscamos la ventana padre (del boton "cerrar")
		var $objVentana=$($(this).parents().get(1));
		
		//cerramos la ventana suavemente
		$objVentana.fadeOut(300,function(){
			//eliminamos la ventana del DOM
			$(this).remove();
			//ocultamos el overlay suavemente
			$('#divOverlay').fadeOut(500,function(){
				//eliminamos el overlay del DOM
				$(this).remove();
				$('#boton_auxiliar_siguiente[value="2"]').toggle();
				$('.clsVentanaIFrame').toggle();
			});
		});
	});

	$('.clsVentanaCerrar2').live('click',function(eEvento){
		//prevenimos el comportamiento normal del enlace
		eEvento.preventDefault();
		//buscamos la ventana padre (del boton "cerrar")
		var $objVentana=$($(this).parents().get(1));
		
		//cerramos la ventana suavemente
		$objVentana.fadeOut(300,function(){
			//eliminamos la ventana del DOM
			$(this).remove();
			//ocultamos el overlay suavemente
			$('#divOverlay').fadeOut(500,function(){
				//eliminamos el overlay del DOM
				$(this).remove();
				window.location.replace("home2");
			});
		});
	});
	
	$('.clsVentanaIFrame').on('click',function(eEvento){
		//prevenir el comportamiento normal del enlace
		eEvento.preventDefault();

		var href = 'modal/registro/' + $('#campo_registroa[name="mail"]').val() + '/' + $('#campo_registro[name="usuario"]').val();

		//obtenemos la pagina que queremos cargar en la ventana y el titulo
		var strPagina=href, strTitulo=$(this).attr('rel');
		
		//creamos la nueva ventana para mostrar el contenido y la capa para el titulo
		var $objVentana=$('<div class="clsVentana">');
		
		//creamos la capa que va a mostrar el contenido
		var $objVentanaContenido=$('<div class="clsVentanaContenido">');
		
		//agregamos un iframe y en el source colocamos la pagina que queremos cargar ;)
		$objVentanaContenido.append('<iframe src="'+strPagina+'">');
		
		//agregamos un iframe y en el source colocamos la pagina que queremos cargar ;)
		$objVentanaContenido.append('<a href="" class="clsVentanaCerrar"><img src="img/aceptar.png"></a>');
		
		//agregamos la capa de contenido a la ventana
		$objVentana.append($objVentanaContenido);
		
		//creamos el overlay con sus propiedades css y lo agregamos al body
		var $objOverlay=$('<div id="divOverlay">').css({
			opacity: .5,
			display: 'none'
		});
						
		$('body').append($objOverlay);
		
		//animamos el overlay y cuando su animacion termina seguimos con la ventana
		$objOverlay.fadeIn(function(){
			//agregamos la nueva ventana al body
			$('body').append($objVentana);
			//mostramos la ventana suavemente ;)
			$objVentana.fadeIn();
		})
	});

	$('.clsVentanaIFrame2').on('click',function(eEvento){
		//prevenir el comportamiento normal del enlace
		eEvento.preventDefault();
		
		//obtenemos la pagina que queremos cargar en la ventana y el titulo
		var strPagina=$(this).attr('href'), strTitulo=$(this).attr('rel');
		
		//creamos la nueva ventana para mostrar el contenido y la capa para el titulo
		var $objVentana=$('<div class="clsVentana2">');
		
		//creamos la capa que va a mostrar el contenido
		var $objVentanaContenido=$('<div class="clsVentanaContenido2">');
		
		//agregamos un iframe y en el source colocamos la pagina que queremos cargar ;)
		$objVentanaContenido.append('<iframe src="'+strPagina+'">');
		
		//agregamos un iframe y en el source colocamos la pagina que queremos cargar ;)
		$objVentanaContenido.append('<div class="modal_afiliacion_botones"><a href="" class="Afiliar_Otro"><img src="img/afiliar_otro.png"></a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="" class="clsVentanaCerrar2"><img src="img/aceptar.png"></a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="" class="Realizar_Recarga"><img src="img/realizar_recarga.png"></a></div>');
		
		//agregamos la capa de contenido a la ventana
		$objVentana.append($objVentanaContenido);
		
		//creamos el overlay con sus propiedades css y lo agregamos al body
		var $objOverlay=$('<div id="divOverlay">').css({
			opacity: .5,
			display: 'none'
		});
						
		$('body').append($objOverlay);
		
		//animamos el overlay y cuando su animacion termina seguimos con la ventana
		$objOverlay.fadeIn(function(){
			//agregamos la nueva ventana al body
			$('body').append($objVentana);
			//mostramos la ventana suavemente ;)
			$objVentana.fadeIn();
		})
	});

	$('.clsVentanaIFrame3').on('click',function(eEvento){

		//prevenir el comportamiento normal del enlace
		eEvento.preventDefault();

		if( $('#campo_registro.campo_registro_pwd_check').val() != '12345' )
		{
			alert('Clave Inválida');
			return false;
		}

		//obtenemos la pagina que queremos cargar en la ventana y el titulo
		var strPagina=$(this).attr('href'), strTitulo=$(this).attr('rel');
		
		//creamos la nueva ventana para mostrar el contenido y la capa para el titulo
		var $objVentana=$('<div class="clsVentana3">');
		
		//creamos la capa que va a mostrar el contenido
		var $objVentanaContenido=$('<div class="clsVentanaContenido3">');
		
		//agregamos un iframe y en el source colocamos la pagina que queremos cargar ;)
		$objVentanaContenido.append('<iframe src="'+strPagina+'">');
		
		//agregamos un iframe y en el source colocamos la pagina que queremos cargar ;)
		$objVentanaContenido.append('<div class="modal_transaccion_botones"><a href="" class="clsVentanaCerrar2"><img src="img/aceptar_ovalo.png"></a>&nbsp;&nbsp;<a href="javascript:window.print()"><img src="img/imprimir.png"></a>&nbsp;&nbsp;<a href="" class="Realizar_Recarga"><img src="img/realizar_otra_recarga.png"></a></div>');
		
		//agregamos la capa de contenido a la ventana
		$objVentana.append($objVentanaContenido);
		
		//creamos el overlay con sus propiedades css y lo agregamos al body
		var $objOverlay=$('<div id="divOverlay">').css({
			opacity: .5,
			display: 'none'
		});
						
		$('body').append($objOverlay);
		
		//animamos el overlay y cuando su animacion termina seguimos con la ventana
		$objOverlay.fadeIn(function(){
			//agregamos la nueva ventana al body
			$('body').append($objVentana);
			//mostramos la ventana suavemente ;)
			$objVentana.fadeIn();
		})
	});
});




