import { useEffect, useState } from "react"
import Header from "../components/Header"
import NavBar from "../components/NavBar"

export default function Home() {
    const API_KEY = process.env.API_KEY

    const [movies, setMovies] = useState();
    useEffect(() => {
        (async () => {
            const { results } = await (await fetch(
                `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
            )
            ).json()
            setMovies(results)
        })()
    }, [])
    return (
        <div>
            <Header title="Home" />
            {!movies && <h4>Loading...</h4>}
            {movies?.map((movie) => (
                <div key={movie.id}>
                    <h4>{movie.original_title}</h4>

                </div>
            ))}
            <h1>hi</h1>

            <style jsx global>{`
                a {
                    color: white
                }
            `}</style>

        </div>
    )
}