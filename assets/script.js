const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

// Constante pour la séléction des ID 
const arrowLeft = document.getElementById("arrowLeft");
const arrowRight = document.getElementById("arrowRight");
const imageBanner = document.getElementById("banner-img");
const taglineBanner = document.getElementById("banner-text");
const dots = document.getElementById("dots");

// Event 
arrowLeft.addEventListener('click',slidePrevious);
arrowRight.addEventListener('click',slideNext); 


for(let i = 0; i < slides.length; i++){
	// On créé le dot et on l'inject
	const dotDiv = document.createElement("div")
	dotDiv.className = "dot"
	dots.appendChild(dotDiv)
}

// Constante pour la séléction de tous les dot
const allTheDots = document.querySelectorAll(".dot"); 
allTheDots[0].classList.add("dot_selected"); 

// Initialisation index
let index = 0; 

// Fonction images 
function changeBanner(){
	imageBanner.src = "./assets/images/slideshow/" + slides[index].image;
	taglineBanner.innerHTML = slides[index].tagLine;
	allTheDots[index].classList.add("dot_selected");
}
// Function to delete the selected point
function removeClass(){
	allTheDots[index].classList.remove("dot_selected");
}

const lastSlide = slides.length-1;


function slidePrevious(){
	removeClass();
	if(index === 0){
		index = lastSlide;
	}else{
		index--; // décrémentation
	};
	changeBanner();
}

// Fonction slide suivante 

function slideNext (){
	removeClass();
	if (index === lastSlide){
		index = 0;
	}else{
		index++; // incrémentation
	};	
	changeBanner();
}





s