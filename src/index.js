let addToy = false;
// console.log("ivan")

document.addEventListener("DOMContentLoaded", () => {
  console.log("%cDOM is loaded", "color:blue")
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

});

const toyCollectionDiv=document.querySelector("#toy-collection")
console.log (toyCollectionDiv)


const tempH1 = document.createElement("h1")
tempH1.textContent = "Yay!"

toyCollectionDiv.append(tempH1)


//FETCH 1
fetch("http://localhost:3000/toys")
.then( response => response.json() )
.then( (juguetes)=>console.log(juguetes))




// // Fetch Andy's Toys
// fetch("http://localhost:3000/toys")
//   .then(r => r.json())
//   .then(toys =>{
//     console.log(toys)
//   // function render(toys){
//     let toysHTML=toys.map(function(toy){
//       return `
//       <div class="card">
//     <h2>${toy.name}</h2>
//     <img src=${toy.image}class="toy-avatar" />
//     <p>4 ${toy.likes} </p>
//     <button class="like-btn" id="[toy_id]">Like <3</button>
//   </div>
//   `
//     })
//     document.querySelector("#toy-collection").innerHTML=toysHTML.join("")
//   })

//     // Add Toy
//     const toyFormContainer = document.querySelector(".container"); 
//     toyFormContainer.addEventListener("submit",function(e){
//       console.log(e.target.name)
//       //Grab Input from form
//       const toyName = e.target.name.value
//       const toyImage = e.target.name.value

//       fetch("http://localhost:3000/toys", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Accept": "application/json"
//       },
//       body: JSON.stringify({
//       name: toyName,
//       image: toyImage,
//       likes: 99
//       })
//     })
//     .then(r=> r.json())
//     .then(newToy => console.log(newToy))
//     })

