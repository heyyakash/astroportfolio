import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import type { FC } from "react"
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import projectList from "../data/projects.json"

interface props {
  image: string
  github: string
  link: string
  name: string
  desc: string
}


const ProjectBox: FC<props> = ({ image, github, link, name, desc }) => {
  return (
    <div className=" lg:w-[850px] cursor-grab relative h-[250px] md:h-[500px] w-full p-1 grid place-items-center rounded-lg g-black/10 dark:bg-white/5 overflow-hidden">
      <div className="absolute p-4 w-full h-full top-0 left-0 bg-gradient-to-t dark:from-black/60 to-transparent z-10 flex justify-between items-end">
        <p className="bg-white text-black py-1 px-2 rounded-md font-semibold text-sm">{name}</p>
        <div className="flex gap-2 ">
          <a target="_blank" href={github} className="btn-project"><FaGithub /></a>
          <a target="_blank" href={link} className="btn-project"><FiExternalLink /></a>
        </div>
      </div>
      <div className="w-full h-full relative ">
        <img src={image} alt="screenshot" className="absolute w-full h-full rounded-lg top-0 left-0 object-fill" />
      </div>
    </div>
  )

}

const Projects = () => {

  return (
    <section className=" lg:mt-[3.7rem] -mt-5">
      <div className="w-full text-white">
        <Swiper
          loop
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
        >
          {projectList.map((x, y) => {
            return (
              <SwiperSlide className="lg:!w-[850px] !w-full" key={y}>

                <ProjectBox name={x.name} desc={x.desc} image={x.image} github={x.github} link={x.github} />
              </SwiperSlide>
            )
          })}

        </Swiper>
      
      </div>
    </section>
  )
}

export default Projects