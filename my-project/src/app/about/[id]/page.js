"use client"
import { useParams } from "next/navigation"

const page = () => {
    const params = useParams();

    return (
        <div>Yoru Url Id is {params.id}</div>
    )
}

export default page