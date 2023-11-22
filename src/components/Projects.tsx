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
    <div className=" lg:w-[900px] relative h-[300px] md:h-[500px] rounded-sm">
      <div className="absolute p-4 w-full h-full top-0 left-0 bg-gradient-to-t dark:from-black to-transparent z-10 flex justify-between items-end">
        <p className="bg-white text-black py-1 px-2 rounded-md font-semibold text-sm">{name}</p>
        <div className="flex gap-2 ">
          <a target= "_blank" href = {github} className="btn-project"><FaGithub /></a>
          <a target= "_blank" href = {link} className="btn-project"><FiExternalLink /></a>
        </div>
      </div>
      <div className="w-full h-full relative ">
        <img src={image} alt="screenshot" className="absolute w-full h-full top-0 left-0 object-fill" />
      </div>
    </div>
  )

}

const Projects = () => {

  return (
    <section className="mb-10 lg:my-[4.5rem]">
      <div className="w-full text-white">
        <Swiper
          
          loop={true}
          slidesPerView={3}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            320:{
              slidesPerView:1,
              spaceBetween:0
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 0,
            
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 820,
            },
          }}
        >
          {projectList.map((x, y) => {
            return (
              <SwiperSlide>
                <ProjectBox name={x.name} desc={x.desc} key={y} image={x.image} github={x.github} link={x.github} />
              </SwiperSlide>
            )
          })}
        </Swiper>

      </div>
    </section>
  )
}

export default Projects