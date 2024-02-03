import { useEffect, useState } from "react"

const LowerNav = () => {
    const [location,setLocation] = useState<null | string>(null)
    useEffect(()=>{
        let current = window.location.pathname
        setLocation(current)
    },[])
    return (
        <nav className="w-full mt-5">
            <div className="container-screen flex gap-4 dark:text-white/80 text-black/70 font-medium">
                <a href = "/" className={`${location==="/"?"dark:text-white":"text-black/40 dark:text-white/70"}`}>Home</a>
                 x
                <a href = "/blogs" className={`${location==="/blogs"?"dark:text-white":"text-black/40 dark:text-white/70"}`}>Blogs</a>
                 x
                <a href = "/hobbies" className={`${location==="/hobbies"?"dark:text-white":"text-black/40 dark:text-white/70"}`}>Hobbies</a>
            </div>
        </nav>
    )
}

export default LowerNav