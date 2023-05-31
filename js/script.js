"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();
const  personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFlims() {
    for (let i = 0; i < 2; i++) {
        const question = prompt('Один из послдених просмотренных фильмов?', ''),
              question2 = prompt('На сколько оцените его?', '');

        if (question != null && question2 != null && question != '' && question2 != '' && question.length < 50) {
            personalMovieDB.movies[question] = question2;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}
rememberMyFlims();

function detectPersonal () {
    if (personalMovieDB.count < 10 ) {
        console.log('Просмотрено довольно мало фильмов')
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель')
    } else if(personalMovieDB.count >= 30){
        console.log('Вы киноман')
    } else {
        console.log('Произошла ошибка')
    }
}
detectPersonal();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres () {

    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();
