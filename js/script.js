const numberOfFilms = prompt('Сколько фильмов вы уже просмотрели?', '5');

const personalMovieDB ={ 
    count: numberOfFilms,
    movie:{},
    actors:{},
    genres: [],
    privat: false
};

const LastFilm1 = prompt('Один из последних просмотренных фильмов', 'Оно'),
     Rating1 = prompt('На сколько оцените его?', '7'),
     LastFilm2 = prompt('Один из последних просмотренных фильмов', 'Оно'),
     Rating2 = prompt('На сколько оцените его?', '7');

personalMovieDB.movie[LastFilm1] = Rating1;
personalMovieDB.movie[LastFilm2] = Rating2;


console.log(personalMovieDB);

