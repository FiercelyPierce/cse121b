const searchInput = document.querySelector('#search').value;

let type;

switch (searchInput) {
    case 'normal':
        type = 1;
      break;
    case "fighting":
        type = 2;
      break;
    case "flying":
        type = 3;
        break;
    case "poison":
        type = 4;
        break;
    case "ground":
        type = 5;
        break;
    case "rock":
        type = 6;
        break;
    case "bug":
        type = 7;
        break;
    case "":
        type = 8;
        break;
}

document.querySelector('#submit').addEventListener('click', 
getPokeCards(type));

const output = (pokemen) => {
    pokemen.forEach((pokemon) => {
        let section = document.createElement('section');

        let pokeName = document.createElement('h3');
        pokeName.textContent = pokemon.names;

        let pokeType = document.createElement('h3');
        pokeType.textContent = pokemon.moves;

        section.appendChild(pokeName);
        section.appendChild(pokeType);

        document.querySelector('#pokeList').appendChild(section);
    });
}

const getPokeCards = async () => {
    let url = 'https://pokeapi.co/api/v2/type/2'
    const response = await fetch(url);
    pokeList = await response.json();
    output(pokeList);
};