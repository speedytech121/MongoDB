
// update single document
// Uses the $set operator to update the value of the plot field for the movie Twilight.
// Uses the $currentDate operator to update the value of the lastUpdated field to the current date. 
// If lastUpdated field does not exist, $currentDate will create the field. See $currentDate for details.
db.movies.updateOne( 
    { title: "Twilight" },
    {
        $set: {
            plot: "A teenage girl risks everything–including her life–when she falls in love with a vampire."
        },
        $currentDate: { lastUpdated: true }
    }
)


// update multiple document
db.movies.updateMany(
    { runtime: { $lt: 130 } },
    {
        $set: {
            runtime: 300
        }
    }
)

// replace document
db.movies.replaceOne(
    { _id: ObjectId('669bebd6e6dd2de8d0c4e49d') },
    { title: "updateTag", genres: ['Action'], runtime: 120, rated: "A", year: 2022, directors: ['Anil Chopra'], cast: ['Alia', 'Ranbeer'], type: "movies" }
);
