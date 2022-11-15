//https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
//7ha4uUSgwU8L2zEqolddJuOdivE7ozhG0EoUqaIqYfY

function updateUI(arr) {
  let imageSection = document.querySelector(".imageSection");
  arr.forEach((element) => {
    let imagDiv = document.createElement("div");
    imagDiv.classList.add("imag");
    let img = document.createElement("img");
    img.src = element;
    imagDiv.append(img);
    imageSection.append(imagDiv);
  });
}

function searchRequest(str) {
    
let xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://api.unsplash.com/search/photos/?page=1&query=${str}&client_id=7ha4uUSgwU8L2zEqolddJuOdivE7ozhG0EoUqaIqYfY`
);
xhr.onload = function () {
    
  let response = JSON.parse(xhr.response);
//   console.log(response.results);
  let temp = [];
  for (let items of response.results) {
    console.log(items.urls.regular);
    temp.push(items.urls.regular);
  };
  updateUI(temp);
};

xhr.send();
}

let input = document.querySelector(`input`);
input.addEventListener('keyup', (event) => {
    if (event.keyCode == 13) {
        console.log(event.target.value);
        searchRequest(event.target.value);
    }
});
