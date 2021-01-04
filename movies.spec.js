import movies from "./movies.js";

describe('Favorite Movies', () => {
    let myMovies = [];
    beforeEach(() => {
         myMovies = [
            {
                title : "Age of ultron",
                rate : null,
            },
        ]    
    });

    test('can add movie', () => {
        movies.add(myMovies, "Kungfu Panda")
        expect(myMovies).toMatchSnapshot();
    })

    test('rate a movie', () => {
        movies.rate(myMovies[0], 5);
        movies.add(myMovies, "Kungfu Panda")
        movies.rate(myMovies[1], 2);
        expect(myMovies).toMatchSnapshot();
    })
})