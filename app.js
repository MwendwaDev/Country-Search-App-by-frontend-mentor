let API = 'https://restcountries.com/v3.1/all'
const searchBar = document.getElementById('search');

document.querySelector('.theme-toggle-button').addEventListener('click', () => {
  document.body.classList.toggle('dark')
})

//Fetching countries from an API
async function getCountries() {
  let res = await fetch(API);
  let data = await res.json();
 
  return data
}

let container = document.querySelector('.container')
container.innerHTML = ''

getCountries().then(data => {
  data.forEach(country => {


    let card = document.createElement('div')
    card.classList.add('card')

    let image = document.createElement('img')
    image.classList.add('card-image')
    image.src = country.flags.png

    let name = document.createElement('h3')
    name.classList.add('name')
    name.textContent = `${country.name.common}`

    let city = document.createElement('h3')
    city.classList.add('city')
    city.textContent = `CapitaL City: ${ country.capital}`

    let region = document.createElement('h3')
    region.classList.add('region')
    region.textContent =`Region: ${country.region}`

    let populace = document.createElement('h3')
    populace.classList.add('populace')
    populace.textContent = `Population: ${country.population}`


    card.append(image, name, city, region, populace)
    container.append(card)




  })
})



searchBar.addEventListener('input', async e => {
  e.preventDefault()
  const { value } = e.target
  let foundCountry = null

  //Getting country list
  const data = await getCountries()
  
  // container element
  const container = document.querySelector('.container')
  container.innerHTML = ''

  if (!value) {
    data.forEach(country => {
      const card = document.createElement('div')
      card.classList.add('card')
      

      const image = document.createElement('img')
      image.classList.add('card-image')
      image.src = country.flags.png


      const name = document.createElement('h3');
      name.classList.add('name');
      name.textContent = `Country: ${country.name.official}`;

      const city = document.createElement('h3');
      city.classList.add('city');
      city.textContent = `Capital city: ${country.capital}`;

      const region = document.createElement('h3');
      region.classList.add('region');
      region.textContent = `Region: ${country.region}`;

      const populace = document.createElement('h3');
      populace.classList.add('populace');
      populace.textContent = `Population: ${country.population}`;

      // const btn = document.createElement('button')
    // btn.classList.add('btn')
    //  btn.textContent = 'Read More'


      card.append(image, name, city, region, populace)
      container.append(card)



    })
  } else {
    // Find the country that matches the search input
    for (const country of data) {
        if (country.name.official.toLowerCase() === value.toLowerCase() ||
            country.name.common.toLowerCase() === value.toLowerCase()
        ) {
            foundCountry = country;
            break;
        }
    }

    // If a country was found, create a new card for he said country
    if (foundCountry) {
       
        const card = document.createElement('div');
        card.classList.add('card');

        const image = document.createElement('img');
        image.classList.add('card-image');
        image.src = foundCountry.flags.svg;  

        const name = document.createElement('h3');
        name.classList.add('name');
        name.textContent = `Country: ${foundCountry.name.official}`;

        const city = document.createElement('h3');
        city.classList.add('city')
        city.textContent = `Capital city: ${foundCountry.capital}`;

        const region = document.createElement('h3');
        region.classList.add('region');
        region.textContent = `Region: ${foundCountry.region}`;

        const populace = document.createElement('h3');
        populace.classList.add('populace');
        populace.textContent = `Population: ${foundCountry.population}`;

       

        card.append(image, name, city, region, populace);
        container.append(card);
    }
};searchBar


});

//Adding more info










