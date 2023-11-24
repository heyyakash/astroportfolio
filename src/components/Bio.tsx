import Section from "./Section"

const Bio = () => {
    return (
        <Section title="Bio">
            <div className="text-white font-medium w-[90%]">
            <p>I am a Computer Science Engineering student set to graduate in 2025. My technical expertise spans languages such as C, Python, JavaScript, and TypeScript, along with proficiency in frameworks like NodeJS, ReactJS, NextJS, and Express. I am well-versed in tools such as Docker, Git, Postman, Firebase, and GitLab CI.</p>
            <br />
            <p>My achievements include winning the E-Summit Hackathon at IIT Indore with the creation of the web app "Invent," allowing investors to track and analyze statistics of new businesses. I secured the 1st Runner-up position in the Hackelite Hackathon conducted by CSE Dept. at DSCE Bangalore, where we developed an all-rounder fitness app. Additionally, I achieved 2nd Runner-up in the BITS Pilani Postman API Hackathon with the creation of "H.care," a healthcare dashboard for health-related activities.</p>
            </div>
        </Section>
    )
}

export default Bio