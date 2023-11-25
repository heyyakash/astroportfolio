import { useEffect, type FC } from "react"
import { fetchBlogs } from "../functions/fetchblogs"

interface node {
    id: string;
    title: string;
    slug: string;
    views:string
}

interface obj {
    node: node
}

interface props {
    data: obj[]
}
  

const Blogs : FC<props> = ({data}) => {
    return (
        <div className="flex flex-col gap-4">
        {data.map((obj,i)=>{
            return(
                <div key = {i}>
                    <a target="_blank" href = {`https://techbyakash.hashnode.dev/${obj.node.slug}`} className="dark-text text-lg font-medium">{obj.node.title}</a>
                    <p className="dark-text-l">{obj.node.views} views</p>
                </div>
            )
        })}
        </div>
    )
}

export default Blogs