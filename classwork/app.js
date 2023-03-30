let users = document.querySelector(".cardbox")

let movie = fetch("https://www.omdbapi.com/?apikey=b6003d8a&s=All");

movie.then((response) => {
  return response.json();
})
  .then((info) => {
    console.log(info.Search);
    users.innerHTML = ""
    info.Search.forEach((elem) => {
      users.innerHTML += ` 
      <div class="user-n"> 
      <img class='m-img'
      src="${elem.Poster}" 
      alt="user" 
      width="180" 
    /> 
        <h5>${elem.Title} ${elem.Year}</h5> 
        
        <br /> 
   <h3>${elem.Year}</h3>
      </div> 
      `;
    });
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Ваш запрос прилетел");
  });