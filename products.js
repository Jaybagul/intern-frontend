let product = [];

function Fetchdata() {
  fetch("https://backend-intern-7cop.onrender.com/products")
    .then((res) => res.json())
    .then((data) => {
      cardlist(data);
      product = data;
    })
    .catch((err) => console.log(err));
}
Fetchdata();

function cardlist(data) {
  const store = data.map((el) => singlecard(el.img, el.rating, el.title, el.price, el.description, el.link, el.text));
  document.querySelector(".pic").innerHTML = store.join("");
}

function singlecard(img, rating, title, price, description, link, text) {
  let card = `
    <div class="card m-auto pb-4" style="width: 31rem; margin: auto; border-radius: 20px;padding-bootm:10px;">
      <a href="description.html?title=${encodeURIComponent(title)}&img=${encodeURIComponent(img)}&price=${encodeURIComponent(price)}&description=${encodeURIComponent(description)}&link=${encodeURIComponent(link)}&text=${encodeURIComponent(text)}" class="link" style="text-decoration: none; color: inherit;">
        <img src="${img}" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="rating">${rating}</p>
          <h5 class="card-title" style="font-size: 23px; padding: 0px 10px 10px 0px; width: 70%;">${title}</h5>
          <p class="card-text">${price}</p>
        </div>
      </a>

    </div>
  `;
  return card;
}

// <div style="border: 0px solid black; width: 99%; border-radius: 15px; background-color: #FFFFFF; box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;">
          
// <img src="${img}" alt="Product image" style="height: 290px; width: 318px; border-radius: 15px;">
// <h5 style="padding: 5px; font-family: Poppins, sans-serif;">${rating}</h5>
// <p style="padding: 2px; font-family: Poppins, sans-serif; font-size: 24px;">${title}</p>
// <p style="padding: 4px; font-family: Poppins, sans-serif;">${price}</p>
// <p style="padding:10px;display:none;">${description}</p>
// </a>
// <button class="mb-2" style="font-family: Poppins, sans-serif; padding: 10px 60px; border-radius: 10px; display: block; margin: auto; background: red; border: none;">
// <a href="${link}" style="color: white; text-decoration: none;">Add to Cart</a>
// </button>
// </div>

