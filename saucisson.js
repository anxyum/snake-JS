const gameContainer = document.getElementById("gameContainer");
const gridSize = 20;
let snake = [{ x: 10, y: 10 }];
let apple = { x: 5, y: 5 };
let direction = { x: 0, y: 0 };
let speed = 400;

function createGrid() {
  for (let i = 0; i < gridSize * gridSize; i++) {
    const cell = document.createElement("div");
    gameContainer.appendChild(cell);
  }
}

function draw() {
  gameContainer.childNodes.forEach((cell) => {
    cell.className = "";
  });
  gameContainer.childNodes[apple.y * 20 + apple.x].classList.add("apple");
  for (let i = 0; i < snake.length; i++) {
    gameContainer.childNodes[(snake[i].y * 20 + snake[i].x) % (gridSize * gridSize)].classList.add(
      "snake"
    );
  }
}

function update() {
  const head = snake[snake.length - 1];
  const newHead = { x: head.x + direction.x, y: head.y + direction.y };
  console.log(newHead);

  if (
    gridSize < newHead.x ||
    newHead.x < 0 ||
    gridSize < newHead.y ||
    newHead.y < 0
  ) {
    alert("Game Over");
    snake = [{ x: 10, y: 10 }];
    apple = { x: 5, y: 5 };
    direction = { x: 0, y: 0 };
    return;
  }

  snake.push(newHead);
  if (newHead.x !== apple.x || newHead.y !== apple.y) {
    snake.shift();
  } else {
    aplle
  }
}

function gameLoop() {
  update();
  draw();
  setTimeout(gameLoop, speed);
}

function handleKey(event) {
  switch (event.key) {
    case "ArrowUp":
      if (direction.y === 0) direction = { x: 0, y: -1 };
      break;
    case "ArrowDown":
      if (direction.y === 0) direction = { x: 0, y: 1 };
      break;
    case "ArrowLeft":
      if (direction.x === 0) direction = { x: -1, y: 0 };
      break;
    case "ArrowRight":
      if (direction.x === 0) direction = { x: 1, y: 0 };
      break;
  }
}

document.addEventListener("keydown", handleKey);
createGrid();
gameLoop();
