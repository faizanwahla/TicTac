'use strict';
// turn variable, scores
let x = 0;
let scoreOfX;
let scoreOfY;

// game over
const gameOver = function () {
  document
    .querySelector('.grid-item-one')
    .removeEventListener('click', clickEvent1);
  document
    .querySelector('.grid-item-two')
    .removeEventListener('click', clickEvent2);
  document
    .querySelector('.grid-item-three')
    .removeEventListener('click', clickEvent3);
  document
    .querySelector('.grid-item-four')
    .removeEventListener('click', clickEvent4);
  document
    .querySelector('.grid-item-five')
    .removeEventListener('click', clickEvent5);
  document
    .querySelector('.grid-item-six')
    .removeEventListener('click', clickEvent6);
  document
    .querySelector('.grid-item-seven')
    .removeEventListener('click', clickEvent7);
  document
    .querySelector('.grid-item-eight')
    .removeEventListener('click', clickEvent8);
  document
    .querySelector('.grid-item-nine')
    .removeEventListener('click', clickEvent9);
};
const addEvent = function () {
  document
    .querySelector('.grid-item-one')
    .addEventListener('click', clickEvent1);
  document
    .querySelector('.grid-item-two')
    .addEventListener('click', clickEvent2);
  document
    .querySelector('.grid-item-three')
    .addEventListener('click', clickEvent3);
  document
    .querySelector('.grid-item-four')
    .addEventListener('click', clickEvent4);
  document
    .querySelector('.grid-item-five')
    .addEventListener('click', clickEvent5);
  document
    .querySelector('.grid-item-six')
    .addEventListener('click', clickEvent6);
  document
    .querySelector('.grid-item-seven')
    .addEventListener('click', clickEvent7);
  document
    .querySelector('.grid-item-eight')
    .addEventListener('click', clickEvent8);
  document
    .querySelector('.grid-item-nine')
    .addEventListener('click', clickEvent9);
};

// score reset

const scoreReseter = function () {
  localStorage.setItem('scoreOfX', 0);
  localStorage.setItem('scoreOfY', 0);
  scoreOfX = Number(localStorage.getItem('scoreOfX'));
  scoreOfY = Number(localStorage.getItem('scoreOfY'));
  document.querySelector('.scoreOfX').textContent = scoreOfX;
  document.querySelector('.scoreOfY').textContent = scoreOfY;
};
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.resetScore').addEventListener('click', scoreReseter);
});

// score fetcher
document.addEventListener('DOMContentLoaded', function () {
  if (!localStorage.getItem('scoreOfX') && !localStorage.getItem('scoreOfY')) {
    localStorage.setItem('scoreOfX', 0);
    localStorage.setItem('scoreOfY', 0);
  }
  scoreOfX = Number(localStorage.getItem('scoreOfX'));
  scoreOfY = Number(localStorage.getItem('scoreOfY'));
  document.querySelector('.scoreOfX').textContent = scoreOfX;
  document.querySelector('.scoreOfY').textContent = scoreOfY;
});
// score updater
const scoreUpdaterX = function () {
  gameOver();
  scoreOfX++;
  localStorage.setItem('scoreOfX', scoreOfX);
  document.querySelector('.scoreOfX').textContent =
    localStorage.getItem('scoreOfX');
};
const scoreUpdaterY = function () {
  gameOver();
  scoreOfY++;
  localStorage.setItem('scoreOfY', scoreOfY);
  document.querySelector('.scoreOfY').textContent =
    localStorage.getItem('scoreOfY');
};
// Play Again function
const playAgain = function () {
  x = 0;
  disablePlayAgainBtn();
  addEvent();
  document.querySelector('h2').style.color = '#ffffff';
  document.querySelector('h2').textContent = 'null';
  document.querySelector('.grid-item-one').textContent = '1';
  document.querySelector('.grid-item-two').textContent = '2';
  document.querySelector('.grid-item-three').textContent = '3';
  document.querySelector('.grid-item-four').textContent = '4';
  document.querySelector('.grid-item-five').textContent = '5';
  document.querySelector('.grid-item-six').textContent = '6';
  document.querySelector('.grid-item-seven').textContent = '7';
  document.querySelector('.grid-item-eight').textContent = '8';
  document.querySelector('.grid-item-nine').textContent = '9';
  document.querySelector('.grid-item-one').style.color = '#d3eafd';
  document.querySelector('.grid-item-two').style.color = '#d3eafd';
  document.querySelector('.grid-item-three').style.color = '#d3eafd';
  document.querySelector('.grid-item-four').style.color = '#d3eafd';
  document.querySelector('.grid-item-five').style.color = '#d3eafd';
  document.querySelector('.grid-item-six').style.color = '#d3eafd';
  document.querySelector('.grid-item-seven').style.color = '#d3eafd';
  document.querySelector('.grid-item-eight').style.color = '#d3eafd';
  document.querySelector('.grid-item-nine').style.color = '#d3eafd';
};
// disable Play button
const disablePlayAgainBtn = function () {
  document.querySelector('.playAgain').disabled = true;
};
// enable Play button
const enablePlayAgainBtn = function () {
  document.querySelector('.playAgain').disabled = false;
};
// winner functions

const winner5 = function () {
  enablePlayAgainBtn();
  document.querySelector('h2').style.color = '#000000';
  document.querySelector('h2').textContent = `'${document
    .querySelector('.grid-item-five')
    .textContent.toUpperCase()}' Wins`;
  if (document.querySelector('.grid-item-five').textContent === 'x') {
    scoreUpdaterX();
  }
  if (document.querySelector('.grid-item-five').textContent === 'y') {
    scoreUpdaterY();
  }
};
const winner2 = function () {
  enablePlayAgainBtn();
  document.querySelector('h2').style.color = '#000000';
  document.querySelector('h2').textContent = `'${document
    .querySelector('.grid-item-two')
    .textContent.toUpperCase()}' Wins`;
  if (document.querySelector('.grid-item-two').textContent === 'x') {
    scoreUpdaterX();
  }
  if (document.querySelector('.grid-item-two').textContent === 'y') {
    scoreUpdaterY();
  }
};
const winner4 = function () {
  enablePlayAgainBtn();
  document.querySelector('h2').style.color = '#000000';
  document.querySelector('h2').textContent = `'${document
    .querySelector('.grid-item-four')
    .textContent.toUpperCase()}' Wins`;
  if (document.querySelector('.grid-item-four').textContent === 'x') {
    scoreUpdaterX();
  }
  if (document.querySelector('.grid-item-four').textContent === 'y') {
    scoreUpdaterY();
  }
};
const winner6 = function () {
  enablePlayAgainBtn();
  document.querySelector('h2').style.color = '#000000';
  document.querySelector('h2').textContent = `'${document
    .querySelector('.grid-item-six')
    .textContent.toUpperCase()}' Wins`;
  if (document.querySelector('.grid-item-six').textContent === 'x') {
    scoreUpdaterX();
  }
  if (document.querySelector('.grid-item-six').textContent === 'y') {
    scoreUpdaterY();
  }
};
const winner8 = function () {
  enablePlayAgainBtn();
  document.querySelector('h2').style.color = '#000000';
  document.querySelector('h2').textContent = `'${document
    .querySelector('.grid-item-eight')
    .textContent.toUpperCase()}' Wins`;
  if (document.querySelector('.grid-item-eight').textContent === 'x') {
    scoreUpdaterX();
  }
  if (document.querySelector('.grid-item-eight').textContent === 'y') {
    scoreUpdaterY();
  }
};
const draw = function () {
  enablePlayAgainBtn();
  document.querySelector('h2').style.color = '#000000';
  document.querySelector('h2').textContent = 'Draw';
};

// win/lose detections function

const ai = function () {
  if (
    document.querySelector('.grid-item-one').textContent ===
      document.querySelector('.grid-item-two').textContent &&
    document.querySelector('.grid-item-two').textContent ===
      document.querySelector('.grid-item-three').textContent
  ) {
    winner2();
  } else if (
    (document.querySelector('.grid-item-four').textContent ===
      document.querySelector('.grid-item-five').textContent &&
      document.querySelector('.grid-item-five').textContent ===
        document.querySelector('.grid-item-six').textContent) ||
    (document.querySelector('.grid-item-one').textContent ===
      document.querySelector('.grid-item-five').textContent &&
      document.querySelector('.grid-item-five').textContent ===
        document.querySelector('.grid-item-nine').textContent) ||
    (document.querySelector('.grid-item-three').textContent ===
      document.querySelector('.grid-item-five').textContent &&
      document.querySelector('.grid-item-five').textContent ===
        document.querySelector('.grid-item-seven').textContent) ||
    (document.querySelector('.grid-item-two').textContent ===
      document.querySelector('.grid-item-five').textContent &&
      document.querySelector('.grid-item-five').textContent ===
        document.querySelector('.grid-item-eight').textContent)
  ) {
    winner5();
    gameOver();
  } else if (
    document.querySelector('.grid-item-seven').textContent ===
      document.querySelector('.grid-item-eight').textContent &&
    document.querySelector('.grid-item-eight').textContent ===
      document.querySelector('.grid-item-nine').textContent
  ) {
    winner8();
    gameOver();
  } else if (
    document.querySelector('.grid-item-one').textContent ===
      document.querySelector('.grid-item-four').textContent &&
    document.querySelector('.grid-item-four').textContent ===
      document.querySelector('.grid-item-seven').textContent
  ) {
    winner4();
    gameOver();
  } else if (
    document.querySelector('.grid-item-three').textContent ===
      document.querySelector('.grid-item-six').textContent &&
    document.querySelector('.grid-item-six').textContent ===
      document.querySelector('.grid-item-nine').textContent
  ) {
    winner6();
    gameOver();
  } else if (
    x >= 9 &&
    document.querySelector('.grid-item-one').textContent != '1' &&
    document.querySelector('.grid-item-two').textContent != '2' &&
    document.querySelector('.grid-item-three').textContent != '3' &&
    document.querySelector('.grid-item-four').textContent != '4' &&
    document.querySelector('.grid-item-five').textContent != '5' &&
    document.querySelector('.grid-item-six').textContent != '6' &&
    document.querySelector('.grid-item-seven').textContent != '7' &&
    document.querySelector('.grid-item-eight').textContent != '8' &&
    document.querySelector('.grid-item-nine').textContent != '9'
  ) {
    draw();
    gameOver();
  }
};
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.playAgain').addEventListener('click', playAgain);
});

// game turn functions

const clickEvent1 = function () {
  if (x < 9 && document.querySelector('.grid-item-one').textContent === '1') {
    if (x === 0 || x % 2 == 0) {
      document.querySelector('.grid-item-one').textContent = 'x';
    } else {
      document.querySelector('.grid-item-one').textContent = 'y';
    }
  }
  document.querySelector('.grid-item-one').style.color = '#000000';
  x++;
  ai();
};
const clickEvent2 = function () {
  if (x < 9 && document.querySelector('.grid-item-two').textContent === '2') {
    if (x === 0 || x % 2 == 0) {
      document.querySelector('.grid-item-two').textContent = 'x';
    } else {
      document.querySelector('.grid-item-two').textContent = 'y';
    }
  }
  document.querySelector('.grid-item-two').style.color = '#000000';
  x++;
  ai();
};
const clickEvent3 = function () {
  if (x < 9 && document.querySelector('.grid-item-three').textContent === '3') {
    if (x === 0 || x % 2 == 0) {
      document.querySelector('.grid-item-three').textContent = 'x';
    } else {
      document.querySelector('.grid-item-three').textContent = 'y';
    }
  }
  document.querySelector('.grid-item-three').style.color = '#000000';
  x++;
  ai();
};
const clickEvent4 = function () {
  if (x < 9 && document.querySelector('.grid-item-four').textContent === '4') {
    if (x === 0 || x % 2 == 0) {
      document.querySelector('.grid-item-four').textContent = 'x';
    } else {
      document.querySelector('.grid-item-four').textContent = 'y';
    }
  }
  document.querySelector('.grid-item-four').style.color = '#000000';
  x++;
  ai();
};
const clickEvent5 = function () {
  if (x < 9 && document.querySelector('.grid-item-five').textContent === '5') {
    if (x === 0 || x % 2 == 0) {
      document.querySelector('.grid-item-five').textContent = 'x';
    } else {
      document.querySelector('.grid-item-five').textContent = 'y';
    }
  }
  document.querySelector('.grid-item-five').style.color = '#000000';
  x++;
  ai();
};
const clickEvent6 = function () {
  if (x < 9 && document.querySelector('.grid-item-six').textContent === '6') {
    if (x === 0 || x % 2 == 0) {
      document.querySelector('.grid-item-six').textContent = 'x';
    } else {
      document.querySelector('.grid-item-six').textContent = 'y';
    }
  }
  document.querySelector('.grid-item-six').style.color = '#000000';
  x++;
  ai();
};
const clickEvent7 = function () {
  if (x < 9 && document.querySelector('.grid-item-seven').textContent === '7') {
    if (x === 0 || x % 2 == 0) {
      document.querySelector('.grid-item-seven').textContent = 'x';
    } else {
      document.querySelector('.grid-item-seven').textContent = 'y';
    }
  }
  document.querySelector('.grid-item-seven').style.color = '#000000';
  x++;
  ai();
};
const clickEvent8 = function () {
  if (x < 9 && document.querySelector('.grid-item-eight').textContent === '8') {
    if (x === 0 || x % 2 == 0) {
      document.querySelector('.grid-item-eight').textContent = 'x';
    } else {
      document.querySelector('.grid-item-eight').textContent = 'y';
    }
  }
  document.querySelector('.grid-item-eight').style.color = '#000000';
  x++;
  ai();
};
const clickEvent9 = function () {
  if (x < 9 && document.querySelector('.grid-item-nine').textContent === '9') {
    if (x === 0 || x % 2 == 0) {
      document.querySelector('.grid-item-nine').textContent = 'x';
    } else {
      document.querySelector('.grid-item-nine').textContent = 'y';
    }
  }
  document.querySelector('.grid-item-nine').style.color = '#000000';
  x++;
  ai();
};

// Game turn logic

document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelectorAll('.grid-item')) {
    //one
    document
      .querySelector('.grid-item-one')
      .addEventListener('click', clickEvent1);

    //two
    document
      .querySelector('.grid-item-two')
      .addEventListener('click', clickEvent2);

    // three
    document
      .querySelector('.grid-item-three')
      .addEventListener('click', clickEvent3);

    // four
    document
      .querySelector('.grid-item-four')
      .addEventListener('click', clickEvent4);

    //five
    document
      .querySelector('.grid-item-five')
      .addEventListener('click', clickEvent5);

    //six
    document
      .querySelector('.grid-item-six')
      .addEventListener('click', clickEvent6);

    //seven
    document
      .querySelector('.grid-item-seven')
      .addEventListener('click', clickEvent7);

    //eight
    document
      .querySelector('.grid-item-eight')
      .addEventListener('click', clickEvent8);

    //nine
    document
      .querySelector('.grid-item-nine')
      .addEventListener('click', clickEvent9);
  }
});
