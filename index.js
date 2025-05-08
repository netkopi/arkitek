const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    lerp: .00007,
    multiplier: 3,
  });







// PROJECT SECTION //
const projectsDetails = [
  {name: "International Rice Research Incorporation",
    year: 2015,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    imgSource: "project-01.jpg"
  },
  {name: "Olivarez Plaza Los Baños",
    year: 2017,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    imgSource: "project-02.jpg"
  },
  {name: "Los Baños Laguna National Hospital",
    year: 2021,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    imgSource: "project-03.webp"
  },
]
const projectContainer = document.querySelector('.projects')

projectsDetails.forEach(project => {
  projectContainer.innerHTML += `
    <div class="project">
        <div class="img-container">
            <img src="images/${project.imgSource}" alt="">
        </div>
        <div class="content">
            <span>${project.name}</span>
            <p class="year">Year ${project.year}</p>
            <p>${project.description}</p>
            <a href="">view more</a>
        </div>
    </div>
  `
})



// SCRIPT FOR MAP //
let isTwoFingerTouch = false


const map = L.map('map', {
  center: [14.17025, 121.24181], // Los Baños
  zoom: 14,
  zoomControl: true,
  scrollWheelZoom: false,
  doubleClickZoom: false,
  touchZoom: false,
  dragging: false
});

// Clean tile style
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; OpenStreetMap & CartoDB',
  subdomains: 'abcd',
  maxZoom: 19
}).addTo(map);


const marker = L.marker([14.17025, 121.24181]).addTo(map)
  .bindPopup(`<b>Hello!</b><br>This is Los Baños Laguna.`)
  .openPopup();

map.on('touchstart', (e) => {
  if(e.originalEvent.touches.length === 2){
    isTwoFingerTouch = true
    map.dragging.enable()
  } else {
    isTwoFingerTouch = false
    map.dragging.disable()
  }
})

map.on('touchend', () => {
  map.dragging.disable()
})