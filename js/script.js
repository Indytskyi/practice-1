"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '5');

const personalMovieDB = {
    count: numberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    privat: false
};

// const LastFilm1 = prompt('Один из последних просмотренных фильмов', 'Оно'),
//     Rating1 = prompt('На сколько оцените его?', '7'),
//     LastFilm2 = prompt('Один из последних просмотренных фильмов', 'Оно'),
//     Rating2 = prompt('На сколько оцените его?', '7');

// personalMovieDB.movie[LastFilm1] = Rating1;
// personalMovieDB.movie[LastFilm2] = Rating2;


// console.log(personalMovieDB);




// Практика 2 !!!!!




let  h=0;

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







if(personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log("Вы классический зритель");
} else if(personalMovieDB.count > 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}


console.log(personalMovieDB);