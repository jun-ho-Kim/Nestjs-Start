
import { useRouter } from "next/router";
import Header from "../../components/Header";

export default function Detail({ params }) {

    const [title, id] = params || []

    return (
        <div>
            <Header title={title} />
            <h4>{title}</h4>
        </div>
    )
}

export function getServerSideProps({ params: { params } }) {
    return {
        props: {
            params,
        }
    }
}