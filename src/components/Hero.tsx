const App = () => {
    return(
        <section id = "hero" className="w-full">
            <div className="container-screen flex flex-col">
                <div className="w-[70px] my-5 h-[70px] rounded-full overflow-hidden">
                    <img src="/photo.jpg" className="cover" alt="avatar" />
                </div>
                <h3 className="dark:text-white font-medium">Akash Sharma</h3>
                <p className="text-sec">Student - Web Developer</p>
            </div>
        </section>
    )
}

export default App