// !------------ Запросы ------------ 
// ? -------- XMLHttpRequest ------- 
// API (Application Programming Interface — программный интерфейс приложения, или интерфейс программирования приложений) — специальный протокол для взаимодействия компьютерных программ, который позволяет использовать функции одного приложения внутри другого 
 
// console.log(new XMLHttpRequest); 
 
function getData(){ 
  console.log("hey"); 
  const xhr = new XMLHttpRequest(); 
  xhr.open("GET", "https://reqres.in/api/users?page=2") 
  xhr.send(); 
  // console.log(xhr); 
  // Сработает но не желательно  
  // setTimeout(()=>{ 
  //     let data = JSON.parse(xhr.response); 
  //     console.log(data); 
  // }) 

  xhr.onload = (()=>{ 
      let data = JSON.parse(xhr.response); 
      console.log(data.data); 
  }) 
} 
let btn = document.querySelector(".btn") 
btn.addEventListener("click",getData) 


// ? --------- Fetch ---------- 
// console.log(fetch("https://reqres.in/api/users?page=2")); 

let users = document.querySelector(".users") 

let z = fetch("https://reqres.in/api/users?page=2"); 

z.then((response) => { 
return response.json(); 
}) 
.then((info) => { 
  console.log(info.data); 
  users.innerHTML = "" 
  info.data.forEach((elem) => { 
      users.innerHTML += ` 
      <div class="user-n"> 
        <h5>${elem.first_name} ${elem.last_name}</h5> 
        <a href="#">${elem.email}</a> 
        <br /> 
        <img 
          src="${elem.avatar}" 
          alt="user" 
          width="100" 
        /> 
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