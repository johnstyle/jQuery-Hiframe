Hiframe est un plugin jQuery permettant de redimensionner automatiquement la hauteur d’une iframe suivant son contenu et d’éviter ainsi d’avoir la fameuse barre de défilement (srcoll).


##Utilisation :##
```html
	<script type="text/javascript" src="http://code.jquery.com/jquery-1.7.2.min.js"></script>
	<script type="text/javascript" src="http://labs.meqia.fr/wp-content/uploads/jquery.Hiframe.js"></script>
	<script type="text/javascript">
		jQuery(function(){
			jQuery('iframe').Hiframe();
		});
	</script>
	<iframe frameborder="0" scrolling="no" allowtransparency="true" src="http://www.google.fr"></iframe>
```

##Options :##
**scrolling** *(Boolean - Default: false)*
Force la désactivation de la barre de défillement

**bindCss** *(Boolean - Default: false)*
Active ou non le plugin bindCss permettant l'ajustement en direct de la hauteur de l'iframe en cas de modification de celle ci.