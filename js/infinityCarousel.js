const slider = document.querySelector(".slider");
const btnLeft = document.getElementById("moveLeft");
const btnRight = document.getElementById("moveRight");
const indicators = document.querySelectorAll(".indicator");

let baseSliderWidth = slider.offsetWidth;
let activeIndex = 0; // the current page on the slider

let movies = [
  {
    src:
      "https://media.discordapp.net/attachments/965565632764608523/967137922568568852/FilmeAquamen.png?width=337&height=422",
  },
  {
    src:
      "https://media.discordapp.net/attachments/965565632764608523/967138115066138664/FilmeBatman.png?width=273&height=421",
  },

  {
    src:
      "https://media.discordapp.net/attachments/965565632764608523/967138272239317052/FilmeCoringa.png?width=291&height=422",
  },

  {
    src:
      "https://media.discordapp.net/attachments/965565632764608523/967157627161284628/FilmeFlash.png?width=287&height=422",
  },
  {
    src:
      "https://media.discordapp.net/attachments/965565632764608523/967157748322164817/FilmeLigaJustica.png?width=285&height=422",
  },
  {
    src:
      "https://media.discordapp.net/attachments/965565632764608523/967157935631396914/FilmeSuperman.png?width=285&height=422",
  },
  {
    src:
      "https://media.discordapp.net/attachments/965565632764608523/967167517296558100/LanternaVerde.png?width=314&height=422",
  },
  {
    src:
      "https://media.discordapp.net/attachments/965565632764608523/967172942486192189/FilmeMulherMaravilha.png?width=260&height=385",
  },
  {
    src:
      "https://media.discordapp.net/attachments/965565632764608523/967174415030829066/FilmeEsquadraoSuicida.png?width=296&height=385",
  },
  {
    src:
      "https://media.discordapp.net/attachments/965565632764608523/967182662269816902/FilmeBatman3.png?width=286&height=385",
  },
  {
    src:
      "https://media.discordapp.net/attachments/965565632764608523/967183276362043412/FilmeBatman4.png?width=275&height=385",
  },
  {
    src:
      "https://media.discordapp.net/attachments/965565632764608523/967189458380275762/Imagem15.png?width=257&height=384",
  },
];

// Fill the slider with all the movies in the "movies" array
function populateSlider() {
  movies.forEach((image) => {
    // Clone the initial movie thats included in the html, then replace the image with a different one
    const newMovie = document.getElementById("movie0");
    let clone = newMovie.cloneNode(true);
    let img = clone.querySelector("img");
    img.src = image.src;

    slider.insertBefore(clone, slider.childNodes[slider.childNodes.length - 1]);
  });
}

populateSlider();
populateSlider();

// delete the initial movie in the html
const initialMovie = document.getElementById("movie0");
initialMovie.remove();

// Update the indicators that show which page we're currently on
function updateIndicators(index) {
  indicators.forEach((indicator) => {
    indicator.classList.remove("active");
  });
  let newActiveIndicator = indicators[index];
  newActiveIndicator.classList.add("active");
}

// Scroll Left button
btnLeft.addEventListener("click", (e) => {
  let movieWidth = document.querySelector(".movie").getBoundingClientRect()
    .width;
  let scrollDistance = movieWidth * 4; // Scroll the length of 6 movies. TODO: make work for mobile because (4 movies/page instead of 6)

  slider.scrollBy({
    top: 0,
    left: -scrollDistance,
    behavior: "smooth",
  });
  activeIndex = (activeIndex - 1) % 3;
  console.log(activeIndex);
  updateIndicators(activeIndex);
});

// Scroll Right button
btnRight.addEventListener("click", (e) => {
  let movieWidth = document.querySelector(".movie").getBoundingClientRect()
    .width;
  let scrollDistance = movieWidth * 4; // Scroll the length of 6 movies. TODO: make work for mobile because (4 movies/page instead of 6)

  console.log(`movieWidth = ${movieWidth}`);
  console.log(`scrolling right ${scrollDistance}`);

  // if we're on the last page
  if (activeIndex == 2) {
    // duplicate all the items in the slider (this is how we make 'looping' slider)
    populateSlider();
    slider.scrollBy({
      top: 0,
      left: +scrollDistance,
      behavior: "smooth",
    });
    activeIndex = 0;
    updateIndicators(activeIndex);
  } else {
    slider.scrollBy({
      top: 0,
      left: +scrollDistance,
      behavior: "smooth",
    });
    activeIndex = (activeIndex + 1) % 3;
    console.log(activeIndex);
    updateIndicators(activeIndex);
  }
});

// slider.addEventListener("scroll", (e) => {
//   console.log(slider.scrollLeft);
//   console.log(slider.offsetWidth);
// });