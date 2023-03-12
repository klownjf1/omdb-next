import {apikey} from "@/apikey/apikey";
import {GetServerSideProps} from "next";
import {IMovie} from "@/types/Types";
import MainContainer from "@/components/MainContainer";
import Image from 'next/image'

export default function ({movie}: {movie: IMovie}) {
    return (
        <MainContainer keywords={'want to work'}>
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="w-2/3 sm:w-1/2 md:w-1/3">
                    <Image src={`${movie.Poster}`} alt=""/>
                    <h1 className="text-xl font-bold mt-4">{movie.Title}</h1>
                    <p className="mt-2"><span className="font-bold">Type:</span> {movie.Type}</p>
                    <p><span className="font-bold">Year:</span> {movie.Year}</p>
                    <p><span className="font-bold">Actors:</span> {movie.Actors}</p>
                    <p><span className="font-bold">Released:</span> {movie.Released}</p>
                    <p><span className="font-bold">Plot:</span> {movie.Plot}</p>
                    <p><span className="font-bold">Runtime:</span> {movie.Runtime}</p>
                    <p><span className="font-bold">Writer:</span> {movie.Writer}</p>
                    <p><span className="font-bold">Country:</span> {movie.Country}</p>
                    <p><span className="font-bold">Genre:</span> {movie.Genre}</p>
                    <div className="flex items-center justify-between mt-4">
                        <p className="text-lg"><span className="font-bold">Rating:</span> {movie.imdbRating}</p>
                        <p><span className="font-bold">Votes:</span> {movie.imdbVotes}</p>
                    </div>
                </div>
            </div>
        </MainContainer>
    );
}



export const getServerSideProps:GetServerSideProps = async (context) => {

    const response = await fetch(`${apikey}i=${context.query.id}`)
    const movie = await response.json()

    return {
        props: {movie},
    }
}