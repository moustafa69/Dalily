// const myCarouselElement = document.querySelector("#myCarousel");

// const carousel = new bootstrap.Carousel(myCarouselElement, {
//   interval: 2000,
//   touch: false,
// });

let trendyPlaces = document.getElementsByClassName("elements")[0];

function getTrendyPlaces() {
  const req = new XMLHttpRequest();
  req.open("GET", "http://localhost:3050/places/trendy");
  req.send();
  req.onreadystatechange = function () {
    if (req.readyState === 4 && req.status === 200) {
      let response = req.responseText;
      response = JSON.parse(response);
      FetchPlaces(response);
    }
  };
}

function FetchPlaces(response) {
  for (let i = 0; i < response.length; i++) {
    console.log(response[i].description);
    let div = document.createElement("div");
    div.setAttribute("class", "element d-flex align-items-center");
    div.innerHTML = `<div class="element-picture">
                          <img
                            src="./assests/home-page-elements/rsz_2rsz_zara2.jpg"
                            alt="zara clothing shop"
                          />
                      </div>
                        <div class="element-info">
                        ${response[i].description}
                      </div>`;
    trendyPlaces.appendChild(div);
  }
}

document.getElementById("filterBtn").addEventListener("click", () => {
  const category = document.getElementById("filter-search").value;
  getPlacesByCategory(category);
});

function getPlacesByCategory(category) {
  const req = new XMLHttpRequest();
  req.open("GET", `http://localhost:3050/places/filter?category=${category}`);
  req.send();
  req.onreadystatechange = function () {
    if (req.readyState === 4 && req.status === 200) {
      let response = req.responseText;
      response = JSON.parse(response);
      console.log(response);
      while (trendyPlaces.hasChildNodes())
        trendyPlaces.removeChild(trendyPlaces.firstChild);
      FetchPlaces(response);
    }
  };
}

getTrendyPlaces();
