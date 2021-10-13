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

// function createPlayer() {
    const $player1 = document.createElement('div');
    // $player1.innerText = 'Scorpion';
    $player1.classList.add('player1');
    const $root = document.querySelector('.root');
    $root.appendChild($player1);
    const $progressbar = document.createElement('div');
    $player1.appendChild($progressbar);
    $progressbar.classList.add('progressbar');
    const $life = document.createElement('div');
    $progressbar.appendChild($life);
    $life.classList.add('life');
    $life.style.width = '100%'
    const $name = document.createElement('div');
    $progressbar.appendChild($name);
    $name.classList.add('name');
    $name.innerText = 'SCORPION';

    const $character = document.createElement('div');
    $player1.appendChild($character);
    $character.classList.add('character');
    const $img = document.createElement('img');
    $img.src = 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif'
    $character.appendChild($img);
    

// }

// console.log(createPlayer())