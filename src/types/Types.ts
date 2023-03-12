
export interface Search{
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster?: string
}

export interface IMovies {
    Search:Search[]
    totalResults?: string
    Response: string
    Error?: string
}


interface Ratings{
    Source: string,
    Value: string
}

export interface IMovie{
    Actors: string,
    Awards: string,
    BoxOffice: string,
    Country: string,
    DVD: string,
    Director: string,
    Genre: string,
    Language: string,
    Metascore: string,
    Plot: string,
    Poster: string,
    Production: string,
    Rated:string,
    Ratings: Ratings[],
    Released: string,
    Response: string,
    Runtime: string,
    Title: string,
    Type: string,
    Website: string,
    Writer: string,
    Year: string,
    imdbID: string,
    imdbRating: string,
    imdbVotes: string




}

