import { useEffect, useState } from "react"
import Header from "../components/Header"

export default function Home({ results }) {
    return (
        <div>
            <Header title="Home" />
            {results?.map((movie) => (
                <div key={movie.id}>
                    <h4>{movie.original_title}</h4>
                </div>
            ))}
            <h1>hi</h1>
        </div>
    )
}

export async function getServerSideProps() {
    const { results } = await (
        await fetch(`http://localhost:3000/api/movies`)
    ).json();

    return {
        props: {
            results
        }
    }
}