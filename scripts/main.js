const calcBtn = document.querySelector('#calcBtn')
const container = document.querySelector('.flex-container')
function showImageandBMI(mass,planet){
    const gravitationalConstants = {
        earth: 9.81,
        mars: 3.71,
        jupiter: 24.79,
        saturn: 10.44,
        uranus: 8.87,
        neptune: 11.15,
        mercury: 3.7, // Include Mercury
        pluto: 0.29, // Include Pluto
        moon: 1.625, // Include Moon
      };

      let weight = Math.floor(mass * gravitationalConstants[planet.toLowerCase()])
    container.innerHTML = `<div class="flex-item image">
    <img src='./images/${planet.toLowerCase()}.png' class="planet-image" />
</div>
<div class="flex-item description">
    <p>The  Weight of Object in ${planet} is <br><span id='weight'> ${weight} N  <span> </p>
</div>`
}
function checkErrors(mass, planet) {
    if (mass === '') {
        container.innerHTML = `<div class='flex-item'>
        <p>Please Enter Mass</p>
        </div>`
    } else if (isNaN(mass)) {
        container.innerHTML = `<div class='flex-item'>
        <p>Please Enter Mass In Numbers</p>
        </div>`
    } else if (planet === 'none') {
        container.innerHTML = `<div class='flex-item'>
        <p>Please Select Planet</p>
        </div>`
    } else{
        showImageandBMI(mass,planet)
    }
}
calcBtn.addEventListener('click', () => {
    let mass = document.getElementById('mass').value
    let planet = document.getElementById('selectPlanet').value
    checkErrors(mass, planet)
})