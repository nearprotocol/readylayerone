(function() {

	document.querySelectorAll('a, .glitch').forEach(function(link) {
		link.dataset.text = link.innerText;
	});

})();
