const projectNameText = document.querySelector('.project-name')
const addressText = document.querySelector('.address')
const yearText = document.querySelector('.year')
const coordinatesText = document.querySelector('.coordinates')
const imageElement = document.querySelector('img.image')
const descriptionText = document.querySelector('.descriptionText')
const googleMapsLink = document.querySelector('.search-google-maps')

const searchParam = new URLSearchParams(window.location.search)
const id = searchParam.get('id')




projectsDetails.forEach(project => {
    if(project.id == id){
        projectNameText.textContent = project.name
        addressText.textContent = project.address
        yearText.textContent = project.year
        coordinatesText.textContent = project.coordinates
        imageElement.src = `../images/${project.imgSource}`
        descriptionText.textContent = project.description
        googleMapsLink.href = `https://www.google.com/maps/search/?api=1&query=${project.coordinates[0]},${project.coordinates[1]}`
        
        const map = L.map('map', {
            center: project.coordinates, // Los Baños
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
            
            L.marker(project.coordinates).addTo(map)
            .bindPopup(`<b>Hello!</b><br>This is ${project.name}.`)
            .openPopup()

            dragButtonCheckbox.addEventListener('change', () => {
                if (dragButtonCheckbox.checked) {
                map.dragging.enable()
                } else {
                map.dragging.disable()
                }
            })
            
            if(resetMapViewButton){
                resetMapViewButton.addEventListener('click', () => {
                map.setView(project.coordinates, 14);
                })
            }
    }

})

const otherProjectsContainer = document.querySelector('.other-projects-container')
const pagination = document.querySelector('.pagination')

function changePage(index){
    otherProjectsContainer.innerHTML = "";
    pagination.innerHTML = ""

    let paginationCurrentIndex = index
    projects[paginationCurrentIndex].forEach(project =>{
        otherProjectsContainer.innerHTML += `
            <div class="project">
                <div class="img-container">
                    <img src="../images/${project.imgSource}" alt="">
                </div>
                <div class="content">
                    <span>${project.name}</span>
                    <p class="year">Year ${project.year}</p>
                    <p>${project.overview}</p>
                    <a href="view-projects.html?id=${project.id}">view more</a>
                </div>
            </div>
        `
    })
    projects.forEach((page, i) => {
        let isActive = paginationCurrentIndex == i ? 'active' : 'inactive'
        pagination.innerHTML += `
            <button class="pagination-page ${isActive}" onclick="changePage(${i})">${i + 1}</button>
        `
    })
}
changePage(0)

