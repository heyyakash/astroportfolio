import Section from "./Section"
import data from "../data/orgs.json"

const Previous = () => {
  return (
    <>
      <div className="mt-5"></div>
      <Section title="Orgs">
        <div className="dark:text-white/70 -mt-2 lg:mt-2">
          {data.map((job, index) => {
            return (
              <div key={index} className="my-3">
                <h4 className="dark-text-l"><b className="dark-text font-medium">{job.position}</b> <span>at</span> <b className="dark-text font-medium">{job.org}</b></h4>
                {job.contribution.map((contri, i)=>{
                  return(
                    <p key = {i}>{"->"} {contri}</p>
                  )
                })}
                
              </div>
            )
          })}
        </div>
      </Section>
    </>
  )
}

export default Previous