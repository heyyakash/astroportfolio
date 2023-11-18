import { CiLight,CiDark  } from "react-icons/ci";

export default function Nav(){
    return(
        <nav className="w-full h-[70px]">
        <div className="mx-auto max-w-[900px] w-full h-full flex items-center justify-between">
            <p className="text-sec font-semibold">SAT 12:24</p>
            <div className="flex gap-4 font-semibold">
                <div className={`text-sec cursor-pointer flex items-center gap-1`}>
                    <CiLight className = "text-xl" />
                    <p>LIGHT</p>
                </div>
                <div className={`text-white cursor-pointer flex items-center gap-1`}>
                    <CiDark className = "text-xl"/>
                    <p>DARK</p>
                </div>
            </div>
        </div>
        </nav>
    )
}