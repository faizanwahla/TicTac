'use strict';
let x = 0;
let scoreOfX = 0;
let scoreOfY = 0;

// score updater
const scoreUpdaterX = function () {
  scoreOfX++;
  document.querySelector('.scoreOfX').textContent = scoreOfX;
};
const scoreUpdaterY = function () {
  scoreOfY++;
  document.querySelector('.scoreOfY').textContent = scoreOfY;
};
// Play Again function
const playAgain = function () {
  x = 0;
  disablePlayAgainBtn();
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
  enablePlayAgainBtn();
};
const winner2 = function () {
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
  enablePlayAgainBtn();
};
const winner4 = function () {
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
  enablePlayAgainBtn();
};
const winner6 = function () {
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
  enablePlayAgainBtn();
};
const winner8 = function () {
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
  enablePlayAgainBtn();
};
const draw = function () {
  document.querySelector('h2').style.color = '#000000';
  document.querySelector('h2').textContent = 'Draw';
  enablePlayAgainBtn();
};

// win/lose detections function

const ai = function () {
  if (
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
  } else if (
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
  } else if (
    document.querySelector('.grid-item-seven').textContent ===
      document.querySelector('.grid-item-eight').textContent &&
    document.querySelector('.grid-item-eight').textContent ===
      document.querySelector('.grid-item-nine').textContent
  ) {
    winner8();
  } else if (
    document.querySelector('.grid-item-one').textContent ===
      document.querySelector('.grid-item-four').textContent &&
    document.querySelector('.grid-item-four').textContent ===
      document.querySelector('.grid-item-seven').textContent
  ) {
    winner4();
  } else if (
    document.querySelector('.grid-item-three').textContent ===
      document.querySelector('.grid-item-six').textContent &&
    document.querySelector('.grid-item-six').textContent ===
      document.querySelector('.grid-item-nine').textContent
  ) {
    winner6();
  }
};
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.playAgain').addEventListener('click', playAgain);
});

// Game turn logic

document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelectorAll('.grid-item')) {
    //one
    document
      .querySelector('.grid-item-one')
      .addEventListener('click', function () {
        if (x === 0 || x % 2 == 0) {
          document.querySelector('.grid-item-one').textContent = 'x';
        } else {
          document.querySelector('.grid-item-one').textContent = 'y';
        }
        document.querySelector('.grid-item-one').style.color = '#000000';
        x++;
      });

    //two
    document
      .querySelector('.grid-item-two')
      .addEventListener('click', function () {
        if (x === 0 || x % 2 == 0) {
          document.querySelector('.grid-item-two').textContent = 'x';
        } else {
          document.querySelector('.grid-item-two').textContent = 'y';
        }
        document.querySelector('.grid-item-two').style.color = '#000000';
        x++;
        ai();
      });

    // three
    document
      .querySelector('.grid-item-three')
      .addEventListener('click', function () {
        if (x === 0 || x % 2 == 0) {
          document.querySelector('.grid-item-three').textContent = 'x';
        } else {
          document.querySelector('.grid-item-three').textContent = 'y';
        }
        document.querySelector('.grid-item-three').style.color = '#000000';
        x++;
        ai();
      });

    // four
    document
      .querySelector('.grid-item-four')
      .addEventListener('click', function () {
        if (x === 0 || x % 2 == 0) {
          document.querySelector('.grid-item-four').textContent = 'x';
        } else {
          document.querySelector('.grid-item-four').textContent = 'y';
        }
        document.querySelector('.grid-item-four').style.color = '#000000';
        x++;
        ai();
      });

    //five
    document
      .querySelector('.grid-item-five')
      .addEventListener('click', function () {
        if (x === 0 || x % 2 == 0) {
          document.querySelector('.grid-item-five').textContent = 'x';
        } else {
          document.querySelector('.grid-item-five').textContent = 'y';
        }
        document.querySelector('.grid-item-five').style.color = '#000000';
        x++;
        ai();
      });

    //six
    document
      .querySelector('.grid-item-six')
      .addEventListener('click', function () {
        if (x === 0 || x % 2 == 0) {
          document.querySelector('.grid-item-six').textContent = 'x';
        } else {
          document.querySelector('.grid-item-six').textContent = 'y';
        }
        document.querySelector('.grid-item-six').style.color = '#000000';
        x++;
        ai();
      });
    //seven
    document
      .querySelector('.grid-item-seven')
      .addEventListener('click', function () {
        if (x === 0 || x % 2 == 0) {
          document.querySelector('.grid-item-seven').textContent = 'x';
        } else {
          document.querySelector('.grid-item-seven').textContent = 'y';
        }
        document.querySelector('.grid-item-seven').style.color = '#000000';
        x++;
        ai();
      });

    //eight
    document
      .querySelector('.grid-item-eight')
      .addEventListener('click', function () {
        if (x === 0 || x % 2 == 0) {
          document.querySelector('.grid-item-eight').textContent = 'x';
        } else {
          document.querySelector('.grid-item-eight').textContent = 'y';
        }
        document.querySelector('.grid-item-eight').style.color = '#000000';
        x++;
        ai();
      });

    //nine
    document
      .querySelector('.grid-item-nine')
      .addEventListener('click', function () {
        if (x === 0 || x % 2 == 0) {
          document.querySelector('.grid-item-nine').textContent = 'x';
        } else {
          document.querySelector('.grid-item-nine').textContent = 'y';
        }
        document.querySelector('.grid-item-nine').style.color = '#000000';
        x++;
        ai();
      });
  }
});
