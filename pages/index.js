import { useEffect, useState } from "react"
import Header from "../components/Header"

export default function Home() {
    const [movies, setMovies] = useState();
    useEffect(() => {
        (async () => {
            const { results } = await (await fetch(`/api/movies`)).json()
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
            {console.log('movies', movies)}
            <style jsx global>{`
       
            `}</style>

        </div>
    )
}