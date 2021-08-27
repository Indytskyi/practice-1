"use strict";

// const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '5');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movie: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const LastFilm1 = prompt('Один из последних просмотренных фильмов', 'Оно'),
//     Rating1 = prompt('На сколько оцените его?', '7'),
//     LastFilm2 = prompt('Один из последних просмотренных фильмов', 'Оно'),
//     Rating2 = prompt('На сколько оцените его?', '7');

// personalMovieDB.movie[LastFilm1] = Rating1;
// personalMovieDB.movie[LastFilm2] = Rating2;


// console.log(personalMovieDB);




// Практика 2 !!!!!




// let  h=0;

// for(let i=0; i < 2; i++ ) {
    
//       const LastFilm1 = prompt('Один из последних просмотренных фильмов', 'Оно'),
//        Rating1 = prompt('На сколько оцените его?', '7');
//     //   if(LastFilm1 == "" || LastFilm1.length > 50 || LastFilm1 == null) {
//     //       i--;
//     //       continue;
//     //   }
//       if(LastFilm1 != null && Rating1 != null && LastFilm1 != "" && Rating1 != "" && LastFilm1.length < 50) {
//         personalMovieDB.movie[LastFilm1] = Rating1;
//         console.log('done');
//       } else {
//           console.log('error');
//           i--;
//       }
   
// }

// while(h<2) {
//     LastFilm1 = prompt('Один из последних просмотренных фильмов', 'Оно');
//     Rating1 = prompt('На сколько оцените его?', '7');
//    personalMovieDB.movie[LastFilm1] = Rating1;
//    h++; 
// }

// do {
//     LastFilm1 = prompt('Один из последних просмотренных фильмов', 'Оно');
//     Rating1 = prompt('На сколько оцените его?', '7');
//    personalMovieDB.movie[LastFilm1] = Rating1;
//    h++; 
// }
// while(h<3);







// if(personalMovieDB.count < 10) {
//     console.log("Просмотрено довольно мало фильмов");
// } else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
//     console.log("Вы классический зритель");
// } else if(personalMovieDB.count > 30) {
//     console.log("Вы киноман");
// } else {
//     console.log("Произошла ошибка");
// }


// console.log(personalMovieDB);


// // 16 урок (Функции, стрелочные функции)

// function showFirstMessage(text) {
//     console.log(text);
//     let num = 20;
// }

// showFirstMessage("Hello World!");

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(5,4));

// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function() {
//     console.log('Hello');
// };

// logger();

// Практика 3


let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '5');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '5');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    privat: false
};

function ShowMyDB() {
    if(!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
    else {
        console.log('свойство private стоит в позиции true. Для вывода обьекта поменяйте его на false');
    }
}



function writeYourGenres() {
    for(let i = 1; i < 4; i++) {
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}


function rememberMyFilms() {    
    for(let i=0; i < 2; i++ ) {
    
    const LastFilm1 = prompt('Один из последних просмотренных фильмов', 'Оно'),
     Rating1 = prompt('На сколько оцените его?', '7');
    //   if(LastFilm1 == "" || LastFilm1.length > 50 || LastFilm1 == null) {
    //       i--;
    //       continue;
    //   }
    if(LastFilm1 != null && Rating1 != null && LastFilm1 != "" && Rating1 != "" && LastFilm1.length < 50) {
      personalMovieDB.movie[LastFilm1] = Rating1;
      console.log('done');
    } else {
        console.log('error');
        i--;
    }
 
    }
}

rememberMyFilms();



function detectPersonalLevel() {
    if(personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log("Вы классический зритель");
    } else if(personalMovieDB.count > 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

writeYourGenres();

ShowMyDB();