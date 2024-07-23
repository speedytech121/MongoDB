// insert one
db.movies.insertOne(
    {
        title: "the favourite",
        genres: ["drama", "history"],
        runtime: 121,
        rated: "R",
        year: 2018,
        directors: ["yorgos lanthimos"],
        cast: ["olivia colman","emma stone","rachel weisz"],
        type: "movie"
    }
)

// insertmany
db.movies.insertMany([
   {
      title: "Jurassic World: Fallen Kingdom",
      genres: [ "Action", "Sci-Fi" ],
      runtime: 130,
      rated: "PG-13",
      year: 2018,
      directors: [ "J. A. Bayona" ],
      cast: [ "Chris Pratt", "Bryce Dallas Howard", "Rafe Spall" ],
      type: "movie"
    },
    {
      title: "Tag",
      genres: [ "Comedy", "Action" ],
      runtime: 105,
      rated: "R",
      year: 2018,
      directors: [ "Jeff Tomsic" ],
      cast: [ "Annabelle Wallis", "Jeremy Renner", "Jon Hamm" ],
      type: "movie"
    }
])
