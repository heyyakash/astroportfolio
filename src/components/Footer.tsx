import { FaHeart } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full">
        <div className="max-w-[900px] w-full mx-auto flex items-center justify-center gap-1 mt-10 p-2 dark:text-white/50">
            Made with <FaHeart className = "text-pink-500" /> by Akash Sharma
        </div>
    </footer>
  )
}

export default Footer