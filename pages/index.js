import { useState } from "react"
import Header from "../components/Header"
import NavBar from "../components/NavBar"

export default function hi() {
    const [counter, setCounter] = useState(0)
    return (
        <div>
            <Header title="Home" />
            <h1>hi {counter}</h1>
            <button onClick={() => setCounter((prv) => prv + 1)}>+</button>
            <style jsx global>{`
                a {
                    color: white
                }
            `}</style>

        </div>
    )
}