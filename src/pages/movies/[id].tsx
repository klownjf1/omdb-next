import { apikey } from "@/apikey/apikey";
import { GetServerSideProps } from "next";
import {IMovies, IMovie, Search} from "@/types/Types";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import Paginator from "@/components/Paginator";
import MainContainer from "@/components/MainContainer";

export default function Movies({ movies }: { movies: IMovies }) {
    const handleAddToWishList = (movie: Search) => {
        const moviesFromLocalStorage = localStorage.getItem("movies");
        let movies = moviesFromLocalStorage ? JSON.parse(moviesFromLocalStorage) : [];

        const newMovie = {
            Id: uuidv4(),
            imdbID: movie.imdbID,
            Title: movie.Title,
            Poster: movie.Poster
        };

        movies.push(newMovie);
        localStorage.setItem("movies", JSON.stringify(movies));
    };

    let moviesItems;

    if (movies.Response === "True") {
        moviesItems = movies.Search.map((item) => (

            <div className="p-4 flex flex-col" key={item.imdbID}>
                <Link href={`/movie/${item.imdbID}`} className="mt-2 text-gray-900" >
                    <div className="h-96 w-5/6">

                            <img
                                src={item.Poster}
                                alt=""
                                className="object-cover w-full h-full rounded-lg shadow-md"
                            />

                    </div>
                    <div className="mt-4">
                        {item.Title}, {item.Year}
                    </div>
                </Link>
                <div>
                    <button onClick={() => handleAddToWishList(item)} className="relative bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Add to wish list
                    </button>
                </div>
            </div>

        ));
    } else if (movies.Response === "False") {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <h1>{movies.Error}</h1>
            </div>
        );
    }

    return (
        <MainContainer keywords={'want to work'}>
        <div className="container mx-auto">
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {moviesItems}
                </div>
            </div>
            <Paginator totalResults={movies.totalResults} />
        </div>
        </MainContainer>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const response = await fetch(`${apikey}s=${context.query.id}&page=${context.query.page}`);
    const movies = await response.json();

    return {
        props: { movies },
    };
};