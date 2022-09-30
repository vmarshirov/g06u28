// https://rapidapi.com/weatherapi/api/weatherapi-com
// xml http request
const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://weatherapi-com.p.rapidapi.com/current.json?q=London");
xhr.setRequestHeader("X-RapidAPI-Key", "f26b69ba7dmsh0637cafdb3d2b99p150e05jsnc514268af367");
xhr.setRequestHeader("X-RapidAPI-Host", "weatherapi-com.p.rapidapi.com");

xhr.send(data);

