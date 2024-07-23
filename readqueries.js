// to fetch all documents from the collection(table)
db.movies.find()  //select * from movies
 
// specify equality condition
db.moves.find({title:"Titanic"})

// $in operator
db.movies.find({rated:{$in:["PG","PG-13"]}})
// $or operator (specify a compound query that joins each clause with a logical or)
db.movies.find({
    $or:[
        {title:{$in:['title','abc']}},
        {countries:{$in:['Mexico','abcd']}}
    ]
})

// logical operators AND OR
db.movies.find( { countries: "Mexico", "imdb.rating": { $gte: 7 } } )



// To return movies from the sample_mflix.movies collection which were released in 
// 2010 and either runtime gte 100 or have a genre of Drama
db.movies.find({
    year:2018,
    $or:[
        {runtime:{$gte:100}},
        {genres:"drama"}
    ]
})