const card1 = document.querySelector(".card")
const search = document.querySelector("#myInput")


fetch("https://jsonplaceholder.typicode.com/photos?_limit=50")
  .then(response => response.json())
  .then(function(todos){
    todos.forEach(todo => {
        card1.innerHTML += `<div class ="fullCard">  <h3 class = "title">${todo.title}</h3> <img class="img" src=${todo.url}/> <button class="delete">Delete</button> </div> <br></br>`
    });
})

card1.addEventListener("click",deleteCard);
function deleteCard(e) {
  if(e.target.className === "delete"){
    e.target.parentElement.remove();
    alertify.success('Silme işlemi başarılı.'); 
  }
  
}


function myFunction() {
    let input, filter, i, txtValue,card;
    input = document.getElementById("myInput")
    filter = input.value.toUpperCase();
     fullCard = document.getElementsByClassName("fullCard");
    card = document.getElementsByClassName("card");

   for (i = 0; i < fullCard.length; i++) {
    run = fullCard[i].getElementsByTagName("h3")[0]
        if(run){
            txtValue = run.textContent || run.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                fullCard[i].style.display = "";
                
            }
            else{
                fullCard[i].style.display = "none"
            }
        }
   }
}

