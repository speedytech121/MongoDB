//sample data format:
// {
//     _id: ObjectId('669c9ed2d5db7b7e76c4e49c'),
//     title: 'title',
//     genres: [ 'ram', 'rom' ],
//     runtime: 100,
//     rated: 'A',
//     year: 2022,
//     directors: [ 'bejos' ],
//     cast: [ 'kahani', 'jerry' ],
//     type: 'movie',
//     imdb: { rating: 5, votes: 120 }
// }


// find all movies directed by "Jeff Tomsic"
db.movies.find({
    directors:"Jeff Tomsic"
})


//find movies realeased in 2018
db.movies.find({
    year:2018
})

// movies rated R
db.movies.find({
    rated:'R'
})


//movies in the 'comedy' genres
db.movies.find({
    genres:"Comedy"
})

// Find all movies that are both "Comedy" and "Action".
db.movies.find({
    genres:{$all:["Comedy","Action"]}
})


// Find all movies released between 2015 and 2020.
db.movies.find({
    year:{$gte:2015,$lte:2020}    
})

// Find all movies that are either rated "R" or have a runtime less than 90 minutes.
db.movies.find({
 $or:[
    {rated:"R"},
    {runtime:{$lt:90}}
 ]   
})