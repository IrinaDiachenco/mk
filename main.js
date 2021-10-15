
const player1 = {
    name: 'Scorpion',
    hp: 60,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Saw hat', 'Naginata', 'Steel fans', 'Hammer of Wrath'],
    attack: function() {
        console.log('Scorpion ' + 'Fight...')
    }
}

const player2 = {
    name: 'Kitana',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['Saw hat', 'Naginata', 'Steel fans', 'Hammer of Wrath'],
    attack: function() {
        console.log('Kitana ' + 'Fight...')
    }
}


let $arenas = document.querySelector('.arenas');

function createPlayer(player, {name, hp, img}) {
    let $player1 = document.createElement('div');
    $player1.classList.add(player);
    // const $root = document.querySelector('.root');
    $arenas.appendChild($player1);
    let $progressbar = document.createElement('div');
    $player1.appendChild($progressbar);
    $progressbar.classList.add('progressbar');
    let $life = document.createElement('div');
    $progressbar.appendChild($life);
    $life.classList.add('life');
    $life.style.width = hp + '%'
    let $name = document.createElement('div');
    $progressbar.appendChild($name);
    $name.classList.add('name');
    $name.innerText = name;
    let $character = document.createElement('div');
    $player1.appendChild($character);
    $character.classList.add('character');
    let $img = document.createElement('img');
    $img.src = img
    $character.appendChild($img)
}
createPlayer('player1', player1);
createPlayer('player2', player2);
