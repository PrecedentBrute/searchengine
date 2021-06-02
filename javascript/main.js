// Check for click or enter

document.querySelector(".js-go").addEventListener('click', function(e){
	var input = document.querySelector("input").value;
	searchGifs(input);
});

document.querySelector(".js-userinput").addEventListener('keyup', function(e){
	
	if(e.which === 13){
		var input = document.querySelector("input").value;
		searchGifs(input);
	}

});


// Search with the API

function searchGifs(search_input){
	var url = "https://api.giphy.com/v1/gifs/search?api_key=8UGdVweJMFFm2h6pCir52Xq8t8Xw88T4&q="+search_input;
	var GiphyAJAXCall = new XMLHttpRequest();
	
	GiphyAJAXCall.open( 'GET', url );
	GiphyAJAXCall.send();
	
	GiphyAJAXCall.addEventListener('load', function(e){
		
		var searchData = e.target.response;
		toDOM(searchData);
	
	});

	console.log("searched "+search_input);
	console.log(url);
}

// Parse and output the data in the container

function toDOM(input){
	
	var response = JSON.parse(input);

	var imgUrl = response.data;

	var container = document.querySelector('.js-container');

	container.innerHTML = "";

	imgUrl.forEach(function(image){
		container.innerHTML += "<img src=" + image.images.fixed_height.url + " class='container-image'" + "/>";
	});

}