"use strict";

const  personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB == '' || personalMovieDB == null || isNaN(personalMovieDB)) {
            personalMovieDB = prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFlims: function() {
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
    },
    detectPersonal: function() {
        if (personalMovieDB.count < 10 ) {
            console.log('Просмотрено довольно мало фильмов')
        } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель')
        } else if(personalMovieDB.count >= 30){
            console.log('Вы киноман')
        } else {
            console.log('Произошла ошибка')
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if(personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {

        for (let i = 1; i < 2; i++) {
            // let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            // if (genre === '' || genre == null) {
            //     console.log('Вы ввели некоректные данные или не ввели их');
            //     i--;
            // } else {
            //     personalMovieDB.genres[i - 1] = genre;
            // }
            let genres = prompt(`Введите ваши любимые жанры через запятую ${i}`).toLocaleLowerCase();
            if (genres === '' || genres == null) {
                console.log('Вы ввели некоректные данные или не ввели их');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        })
    }
};