import { getRandomMatrix } from "../utils/random";


export class LifeMatrix {
    constructor(private _numbers: number[][]) { }
    get numbers() {
        return this._numbers;
    }

    nextStep(): number[][] {
        // return getRandomMatrix(this._numbers.length, this._numbers[0].length, 0, 1);

        //const nextMatrix: number[][] = [];
        // for (let i: number = 0; i < this._numbers.length; i++) {
        //     nextMatrix[i] = [];
        //     for(let j: number = 0; j < this._numbers[0].length; j++) {
        //         nextMatrix[i][j] = getNumber(this._numbers, i, j);
        //     }

        // const nextMatrix = this._numbers.map((row, i) => row.map((cell, j) =>
        //     getNumber(this._numbers, i, j)));

        const nextMatrix = this._numbers.map((row, i) => row.map((cell, j) =>
            getNextCellValue(this._numbers, i, j)));

        this._numbers = nextMatrix;
        return this._numbers;
    }
}

//--------------------------VR------------

// Status calculation for living cell. nLives - amount of living neighbours
function fromAlive(nLives: number): number {
    return +(nLives === 2 || nLives === 3);//to 1 only if the condition true
}

// Status calculation for dead cell. nLives - amount of living neighbours
function fromDead(nLives: number): number {
    return +(nLives === 3);//to 1 only if the condition true
}

// Calculation of amount top/bottom living neighbours
function topBottomNeighbors(numbers: number[][], i: number, j: number): number {
    return numbers[i] ? +!!numbers[i][j - 1] + +!!numbers[i][j + 1] + numbers[i][j] : 0;
}

// Status calculation for cell
function getNextCellValue(numbers: number[][], i: number, j: number): number {
    const nNeighbourLives: number = +!!numbers[i][j - 1] + +!!numbers[i][j + 1] +
        topBottomNeighbors(numbers, i - 1, j) + topBottomNeighbors(numbers, i + 1, j);

    return numbers[i][j] ? fromAlive(nNeighbourLives) : fromDead(nNeighbourLives);
}

// export class LifeMatrix {
//     constructor(private _numbers: number[][]) {}
//     get numbers() {
//         return this._numbers;
//     }
//     nextStep(): number[][] {
//         const nextMatrix = this._numbers.map((a, i) => a.map((r, j) => getNextCellValue(this._numbers, i, j)));
//          this._numbers = nextMatrix;
//          return this._numbers;
//      }
//  }