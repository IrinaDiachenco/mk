const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const player1 = {
    player: 1,
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Saw hat', 'Naginata', 'Steel fans', 'Hammer of Wrath'],
    attack: function(name) {
        console.log(`${name} Fight...`)
    }
}

const player2 = {
    player: 2,
    name: 'Kitana',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['Saw hat', 'Naginata', 'Steel fans', 'Hammer of Wrath'],
    attack: function(name) {
        console.log(`${name} Fight...`)
    }
}

function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }
    
    return $tag;
}

function createPlayer(playerObj) {
    const $player = createElement('div', 'player'+playerObj.player);
    const $progressbar = createElement('div', 'progressbar');
    const $life = createElement('div', 'life');
    const $name = createElement('div', 'name');
    const $character = createElement('div', 'character');
    const $img = document.createElement('img');

    $name.innerText = playerObj.name;
    $img.src = playerObj.img;
    $life.style.width = playerObj.hp + '%';
    
    $player.appendChild($progressbar);
    $player.appendChild($character);

    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    
    $character.appendChild($img);

    return $player;
}

function changeHP(player) {
    const $playerLife = document.querySelector('.player'+ player.player +' .life');
    player.hp -= Math.ceil(Math.random() * 20);
    $playerLife.style.width = player.hp + '%';
console.log(player)

        if (player.hp <= 0) {

        $playerLife.style.width = 0 + '%';
    } else if (player1.hp <= 0) {
        
        $arenas.appendChild(playerWins(player2.name));
    } else if (player2.hp <= 0) {

        $arenas.appendChild(playerWins(player1.name));
    }
}

function playerLose(name) {
    const $loseTitle = createElement('div', 'loseTitle');
    $loseTitle.innerText = `${name} lose`;

    return $loseTitle;
}

function playerWins(name) {
    const $winsTitle = createElement('div', 'winsTitle');
    $winsTitle.innerText = `${name} wins`;

    return $winsTitle;
}

$randomButton.addEventListener('click', function() {
    changeHP(player1);
    changeHP(player2);
})

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

