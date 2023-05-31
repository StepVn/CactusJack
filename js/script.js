"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const  personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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

if (personalMovieDB.count < 10 ) {
    console.log('Просмотрено довольно мало фильмов')
} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель')
} else if(personalMovieDB.count >= 30){
    console.log('Вы киноман')
} else {
    console.log('Произошла ошибка')
}

console.log(personalMovieDB);

