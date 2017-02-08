(function() {
	var pokeImages = document.querySelectorAll('nav li'),
	critterHeader = document.querySelector('.click-header'),
	critterImage = document.querySelector('.pokemon-large'),
	critterDesc = document.querySelector('.content-section p'),
	habHeader = document.querySelector('.habitat-header'),
	critterHab = document.querySelector('.habitat');

	function makeRequest() {
		httpRequest = new XMLHttpRequest();

		if (!httpRequest) {
			console.log('your browser is so 1990s');
		}

		httpRequest.onreadystatechange = showPokemonInfo;
		httpRequest.open('GET', 'includes/getPokemon.php' + "?critter" + this.id);
		httpRequest.send();
	}

	function showPokemonInfo() {
		if(httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200)
			pokeData = JSON.parse(httpRequest.responseText);

			crtterHeader.firstChild.nodeValue = pokeName;

			[].forEach.call(document.querySelectorAll('.hidden'), function(item){
				item.classList.remove('hidden');
			})

			critterImage.src = 'images/' + pokeData.pokeImage + 'png';
			critterDesc.firstChild.nodeValue = pokeData.pokeDesc;
			hapHeader.firstChild.nodeValue = pokeData.pokeName + " lives here!";
			critterHab.src = 'images/' + pokeData.bgImage + '.jpg';
	}

	[].forEach.call(pokeImages, function(el) {
		el.addEventListener('click', makeRequest, false);
	})
})();