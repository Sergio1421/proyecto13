function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function findSmallestRectangle(matrix) {
  let area = 60 * 30;
  let minWidth = 0;
  let minHeight = 0;
  for (let i = 0; i < 60; i++) {
    for (let j = 0; j < 30; j++) {
      if (matrix[i][j] === 15) {
        for (let k = j + 1; k < 30; k++) {
          if (matrix[i][k] === 15) {
            for (let l = i + 1; l < 60; l++) {
              if (matrix[l][j] === 15 && matrix[l][k] === 15) {
                const width = k - j + 1;
                const height = l - i + 1;
                const currentArea = width * height;

                if (currentArea < area) {
                  area = currentArea;
                  minWidth = width;
                  minHeight = height;
                }
              }
            }
          }
        }
      }
    }
  }
  return { width: minWidth, height: minHeight };
}

function createMatrix() {
  const matrix = [];

  for (let i = 0; i < 60; i++) {
    matrix[i] = [];
    for (let j = 0; j < 30; j++) {
      matrix[i][j] = getRandomInt(0, 29);
    }
  }

  return matrix;
}

function printMatrix(matrix) {
  for (let i = 0; i < 60; i++) {
    for (let j = 0; j < 30; j++) {
      if (matrix[i][j] === 15) {
        process.stdout.write('O');
      } else {
        process.stdout.write('.');
      }
    }
    console.log();
  }
}

function markRectangles(matrix) {
  for (let i = 0; i < 60; i++) {
    for (let j = 0; j < 30; j++) {
      if (matrix[i][j] === 15) {
        for (let k = j + 1; k < 30; k++) {
          if (matrix[i][k] === 15) {
            for (let l = i + 1; l < 60; l++) {
              if (matrix[l][j] === 15 && matrix[l][k] === 15) {
                for (let a = i; a <= l; a++) {
                  for (let b = j; b <= k; b++) {
                    if (matrix[a][b] !== 15) {
                      matrix[a][b] = 50;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

function printMarkedMatrix(matrix) {
  console.log();
  for (let i = 0; i < 60; i++) {
    for (let j = 0; j < 30; j++) {
      if (matrix[i][j] === 50) {
        process.stdout.write('x');
      } else if (matrix[i][j] === 15) {
        process.stdout.write('O');
      } else {
        process.stdout.write('.');
      }
    }
    console.log();
  }
}

const matrix = createMatrix();
printMatrix(matrix);
markRectangles(matrix);
printMarkedMatrix(matrix);

const smallestRectangle = findSmallestRectangle(matrix);
console.log(
  `\nEl área del rectángulo más pequeño es de ${smallestRectangle.width} x ${smallestRectangle.height}`
);
