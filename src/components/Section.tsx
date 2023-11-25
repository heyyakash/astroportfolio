import { Children, type FC, type ReactNode } from "react"

interface props {
    children: ReactNode
    title: string
    attrib?:string
}

const App: FC<props> = ({ children, title, attrib }) => {
    return (
        <section id={title} className="w-full my-5">
            <div className = "relative flex flex-col items-start lg:block container-screen bg-grey-400">
                <div className={`my-2 lg:absolute dark:bg-white bg-black text-white dark:text-black -top-0.5 -left-[5rem] text-xs p-1 px-2 rounded-md font-semibold uppercase ${attrib}`}>{title}</div>
                {children}
            </div>
            
        </section>
    )
}

export default App