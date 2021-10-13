const player1 = {
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Saw hat', 'Naginata', 'Steel fans', 'Hammer of Wrath'],
    attack: function() {
        console.log('Scorpion ' + 'Fight...')
    }
}

const player2 = {
    name: 'Kitana',
    hp: 100,
    img: '- http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['Saw hat', 'Naginata', 'Steel fans', 'Hammer of Wrath'],
    attack: function() {
        console.log('Kitana ' + 'Fight...')
    }
}

function createPlayer(player1, name, life) {
    let $player1 = document.createElement('div');
    $player1.classList.add('player1');
    // const $root = document.querySelector('.root');
    let $arenas = document.querySelector('.arenas');
    $arenas.appendChild($player1);
    let $progressbar = document.createElement('div');
    $player1.appendChild($progressbar);
    $progressbar.classList.add('progressbar');
    let $life = document.createElement('div');
    $progressbar.appendChild($life);
    $life.classList.add('life');
    $life.style.width = '100%'
    let $name = document.createElement('div');
    $progressbar.appendChild($name);
    $name.classList.add('name');
    $name.innerText = 'SCORPION';
    let $character = document.createElement('div');
    $player1.appendChild($character);
    $character.classList.add('character');
    let $img = document.createElement('img');
    $img.src = 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif'
    $character.appendChild($img)
}
createPlayer('player1', 'SCORPION', 50);
createPlayer('player2', 'KITANA', 80);
