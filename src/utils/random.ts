import React from "react";

function getRandomNumber(min: number, max: number,
    isMinInclusive: boolean = true, isMaxInclusive: boolean = false): number {
    if (min > max) {
        [min, max] = [max, min]
    }
    if (min === max || !isMinInclusive || !isMaxInclusive) {
        throw 'min may not be equaled to max';
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomMatrix(row: number, columns: number, min: number, max: number): number[][] {
    const res: number[][] = [];
    for (let i: number = 0; i < row; i++) {
        res[i] = [];
    }
    for (let i: number = 0; i < row; i++) {
        for (let j: number = 0; j < columns; j++) {
            res[i][j] = getRandomNumber(min, max, true, true);
        }
    }
    return res;
}

//getRandomMatrix(5, 5, 1, 3);

function getRandomArrayElement(array: any[]): any {
    return array[getRandomNumber(0, array.length - 1, true, true)]
}

function getRandomDate(minYear: number, maxYear: number): Date {
    const year = getRandomNumber(minYear, maxYear, true, true);
    const month = getRandomNumber(0, 11, true, true);
    const day = getRandomNumber(1, 31, true, true);

    return new Date(year, month, day);
}





