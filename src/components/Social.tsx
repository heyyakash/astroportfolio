import Section from './Section'
const Intro = () => {
    return (
        <Section title="Social">
            <div className='text-sec'>
                <p>Send an email {"->"} <a target='_blank' href = "mailto:akashsharma2002@gmail.com" className='dark:text-white text-black font-semibold'>akashsharma2002@gmail.com</a></p>
                <p>DM on X {"->"} <a target='_blank' href = "https://x.com/heyyakash" className='dark:text-white text-black font-semibold'>@heyyakash</a></p>
                <p>Connect on LinkedIn {"->"} <a target='_blank' href = "https://www.linkedin.com/in/akash-sharma-a3536519a/" className='dark:text-white text-black font-semibold'>Akash Sharma</a></p>
                <p>Follow on GitHub {"->"} <a target='_blank' href = "https://github.com/heyyakash" className='dark:text-white text-black font-semibold'>@heyyakash</a></p>
            </div>
            <div className='bg-black my-3 inline-flex items-center gap-2 text-white/70 text-sm p-2 px-3 rounded-lg'>
                <span className='bg-green-500 rounded-full h-2 w-2 animate-pulse'></span>
                Available for work
            </div>
        </Section>
    )
}

export default Intro