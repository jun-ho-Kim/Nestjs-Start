import Head from 'next/head'

export default function Header({ title }) {
    return (
        <Head>
            <title>{title} | Next Movies</title>
        </Head>
    )
}