import { useState } from "react";
import { CiLight, CiDark } from "react-icons/ci";

export default function Nav() {
    const [mode, setMode] = useState<"light" | "dark">("dark")
    const changeMode = (mode: "light" | "dark") => {
        if(mode==="light") document.documentElement.classList.remove("dark")
        else document.documentElement.classList.add("dark")
        setMode(mode)
    }
    const date = (new Date()).toString().split(' ')
    const day = date[0]
    const time = date[4].split(":")
    return (
        <nav className="w-full h-[70px]">
            <div className="container-screen w-full h-full flex items-center justify-between">
                <p className="text-sec font-semibold uppercase">{day} {time[0]+":"+time[1]}</p>
                
                <div className="flex gap-4 font-semibold">
                    <div onClick={() => changeMode("light")} className={`nav-links ${mode==="light"?"text-black":""}`}>
                        <CiLight className="text-xl" />
                        <p>LIGHT</p>
                    </div>
                    <div onClick={() => changeMode("dark")} className={`nav-links ${mode==="dark"?"dark:text-white":""}`}>
                        <CiDark className="text-xl" />
                        <p>DARK</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}