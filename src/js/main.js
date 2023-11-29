import "/src/css/style.css"

class Movie {
  title;
  type; 
  year;
  constructor(title, type, year){
    this.title = title;
    this.type = type;
    this.year = year;
  }
}



fetch("http://www.omdbapi.com/?apikey=aa1b7a15&s=harry")
.then((response) => response.json())
.then((movies)=>{
console.log(movies);

const newMovielist = movies.Search.map ((movie)=>{
  return new Movie (movie.Title, movie.Type, movie.Year);
})

console.log(newMovielist);
const movieContainer = document.getElementById("movieContainer");
for(let i = 0; i < newMovielist.length; i++){
console.log( newMovielist[i]);
const contanier = document.createElement("div");
contanier.className= "container";

const h1 = document.createElement("h1");
h1.innerHTML= newMovielist[i].title;
h1.className = "text-center"
contanier.appendChild(h1);
contanier.className = "col-3 p-3"
movieContainer.appendChild(contanier);
}
});





// fetch("http://www.omdbapi.com/?apikey=aa1b7a15&t=harry")
// .then((response) => response.json())
// .then((movies)=>{
// console.log(movies);
// })

