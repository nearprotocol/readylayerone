(function() {

	document.querySelectorAll('a').forEach(function(link) {
		link.dataset.text = link.innerText;
	});

})();
