//https://superheroapi.com/api.php/access-token
/*fetch('url')
.then(response =>response.json())
.then(json => console.log(json))*/
//`${BASE_URL}/${id}`
//https://superheroapi.com/api.php/3521702474742928/245

const SUPERHERO_TOKEN = '3521702474742928'
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`
/*const getSuperHero1 = () =>{
    fetch(`'https://superheroapi.com/api.php/3521702474742928'`)
    .then(response => response.json())
    .then(json =>{
        console.log(json)
            document.querySelector('body').innerHTML +=
             `<img src='${json.image.url}'/>`
    })
}
getSuperHero1(20)*/
const heroImage = document.getElementById('heroImage')
const getHeroBtn = document.getElementById('newHeroBtn')
const searchBtn = document.getElementById('search')
const searchInput = document.getElementById('searchInput')
const heroSpeed = document.getElementById('heroSpeed')
const heroStrength = document.getElementById('heroStrength')
const heroIntelligence = document.getElementById('heroIntelligence')

const getSuperHero = (id, name)=>{
    fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
    .then(json => {
        console.log(json)
        const stats = getStats(json)
        const name = `<h2>${json.name}</h2>`
        heroImage.innerHTML =
         `${name}<img src='${json.image.url}'/>${stats}`
        /*const intelligence = `${json.powerstats.intelligence}`
        const speed = `${json.powerstats.speed}`
        const strength = `${json.powerstats.strength}`
         heroIntelligence.innerText = `🧠Intelligence: ${intelligence}`
         heroSpeed.innerText = `⚡Speed: ${speed}`
         heroStrength.innerText = `💪 Strength: ${strength}`*/
         //Above codes can be written much cleaner and better with a loop👇
    })
}

const randomHero = ()=>{
    const numberOfHeroes = 731
    return Math.floor(Math.random() * numberOfHeroes) + 1
}

const getSearchedHero = (name)=>{
    console.log(searchInput.value)
    fetch(`${BASE_URL}/search/${name}`)
    .then(response => response.json())
    .then(json => {
        const hero = json.results[0]
        const stats = getStats(hero)
       /* const intelligence = hero.powerstats.intelligence
        const speed = `${hero.powerstats.speed}`
        const strength = `${hero.powerstats.strength}`
         heroIntelligence.innerText = `🧠Intelligence: ${intelligence}`
         heroSpeed.innerText = `⚡Speed: ${speed}`
         heroStrength.innerText = `💪 Strength: ${strength}`*/
         //Above codes can be written much cleaner and better with a loop👇

         console.log(hero)
         heroImage.innerHTML =
         `<img src='${hero.image.url}'/>${stats}`
    })
}

const getStats=(character)=>{
    const stats = Object.keys(character.powerstats).map(stat=>{
       return `<p>${statToEmoji[stat]}${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
    })
    console.log(stats.join(''))
    return stats.join('')
}

const statToEmoji = {
    intelligence: '🧠',
    strength: '💪',
    durability: '🔋',
    combat: '⚔️',
    power: '🏋️‍♂️',
    speed: '⚡'
}
getHeroBtn.onclick =()=> getSuperHero(randomHero())
searchBtn.onclick = ()=> getSearchedHero(searchInput.value)




