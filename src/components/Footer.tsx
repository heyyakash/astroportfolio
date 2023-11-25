import { FaHeart } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full mt-10 ">
        <div className="max-w-[900px] w-full mx-auto flex text-sm items-center border-t border-white/10 justify-center gap-1 mt-10 p-4 dark:text-white/50">
            Made with <FaHeart className = "text-pink-700" /> by <b>Akash Sharma</b>
        </div>
    </footer>
  )
}

export default Footer