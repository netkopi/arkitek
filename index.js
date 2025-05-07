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
            <p>Year ${project.year}</p>
            <p>${project.description}</p>
            <a href="">view more</a>
        </div>
    </div>
  `
})
