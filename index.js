const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    lerp: .00007,
    multiplier: 3,
  });







// PROJECT SECTION //
const projectsDetails = [
  {
    id: 1,
    name: "International Rice Research Incorporation",
    year: 2015,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doore magna aliqua. Ut enum ad minim veriam, quis nostrud exercitaion ullamco laboris nidi ut alliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate celit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt moolit anim id est laborum.",
    overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    imgSource: "project-01.jpg",
    coordinates: [14.16987028454081, 121.25794115862936],
    address: "Batong Malake Los Baños Laguna 4030"
  },
  {
    id: 2,
    name: "Olivarez Plaza Los Baños",
    year: 2017,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doore magna aliqua. Ut enum ad minim veriam, quis nostrud exercitaion ullamco laboris nidi ut alliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate celit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt moolit anim id est laborum.",
    overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    imgSource: "project-02.jpg",
    coordinates: [14.179722433215508, 121.23879013796773],
    address: "Batong Malake Los Baños Laguna 4030"
  },
  {
    id: 3,
    name: "Los Baños Doctors Hospital and Medical Center (LBDHMC)",
    year: 2021,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doore magna aliqua. Ut enum ad minim veriam, quis nostrud exercitaion ullamco laboris nidi ut alliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate celit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt moolit anim id est laborum.",
    overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    imgSource: "project-03.webp",
    coordinates: [14.171018819212023, 121.24306873611403],
    address: "Batong Malake Los Baños Laguna 4030"
  },
  {
    id: 4,
    name: "Robinsons Los Baños Laguna",
    year: 2017,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doore magna aliqua. Ut enum ad minim veriam, quis nostrud exercitaion ullamco laboris nidi ut alliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate celit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt moolit anim id est laborum.",
    overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    imgSource: "project-04.webp",
    coordinates: [14.177487019175075, 121.24244969749398],
    address: "Batong Malake Los Baños Laguna 4030"
  },
]
let projects = []
for(let i = 0; i < projectsDetails.length; i+=3){
  projects.push(projectsDetails.slice(i, i + 3))
}


const projectContainer = document.querySelector('.projects')
let currentIndex = 0
if(projectContainer){
  projects[currentIndex].forEach(project => {
    projectContainer.innerHTML += `
      <div class="project">
          <div class="img-container">
              <img src="images/${project.imgSource}" alt="">
          </div>
          <div class="content">
              <span>${project.name}</span>
              <p class="year">Year ${project.year}</p>
              <p>${project.overview}</p>
              <a href="projects/view-projects.html?id=${project.id}">view more</a>
          </div>
      </div>
    `
  })
}



// SCRIPT FOR MAP //

const dragButtonCheckbox = document.querySelector('#drag-map')
const dragButtonCheckboxLabel = document.querySelector('#drag-map-label')
const resetMapViewButton = document.querySelector('#reset')

if(document.querySelector('.home-map')){
  // Create the map once
  const map = L.map('map', {
    center: [14.17025, 121.24181], // Los Baños
    zoom: 14,
    zoomControl: true,
    scrollWheelZoom: false,
    doubleClickZoom: false,
    touchZoom: false,
    dragging: false // Initially off
  })
  
  // Add tile layer and marker
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap & CartoDB',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(map)
  
  L.marker([14.17025, 121.24181]).addTo(map)
    .bindPopup(`<b>Hello!</b><br>This is Los Baños Laguna.`)
    .openPopup()
  
  // Toggle drag dynamically
  dragButtonCheckbox.addEventListener('change', () => {
    if (dragButtonCheckbox.checked) {
      dragButtonCheckboxLabel.textContent = "drag enabled"
      map.dragging.enable()
    } else {
      dragButtonCheckboxLabel.textContent = "drag disabled"
      map.dragging.disable()
    }
  })
  
}

if(resetMapViewButton){
  resetMapViewButton.addEventListener('click', () => {
    map.setView([14.17025, 121.24181], 14);
  })
}