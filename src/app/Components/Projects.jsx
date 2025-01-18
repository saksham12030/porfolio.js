"use client"
import React,{useState,useRef} from "react";
import Projectcard from "./Projectcard";
import ProjectTag from "./ProjectTag";
import {motion,useInView} from "framer-motion"
const cardvariant={
  initial:{y:50,opacity:0,},
  animate:{y:0,opacity:1},
} 

const Projects = () => {
  const ref=useRef(null);
  const inview=useInView(ref,{once:true});
  const projectsData = [
    {
      id: 1,
      title: "React Portfolio Website",
      description: "Project 1 description",
      image: "/projects/1.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 2,
      title: "Potography Portfolio Website",
      description: "Project 2 description",
      image: "/projects/2.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 3,
      title: "E-commerce Application",
      description: "Project 3 description",
      image: "/projects/3.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 4,
      title: "Food Ordering Application",
      description: "Project 4 description",
      image: "/projects/4.png",
      tag: ["All", "Mobile"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 5,
      title: "React Firebase Template",
      description: "Authentication and CRUD operations",
      image: "/projects/5.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 6,
      title: "Full-stack Roadmap",
      description: "Project 5 description",
      image: "/projects/6.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
  ];
  const [tag, settag] = useState("All");
  const handletag=(newtag)=>{
    settag(newtag)
  }
  const filtereddata=
    projectsData.filter((project)=>project.tag.includes(tag))
  return (
    <section ref={ref} id="projects">
      <h2 className="text-white text-center text-4xl mb-4 font-bold">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag onclick={handletag} name="All" isselected={tag === "All"} />
        <ProjectTag onclick={handletag} name="Web" isselected={tag === "Web"} />

      
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filtereddata.map((project,index) => (
          <motion.li
          key={index}
          variants={cardvariant}
          initial="initial"
          animate={inview?"animate":"initial"}
          transition={{duration:0.3,delay:index*0.4}}
          >

          <Projectcard
            key={project.id}
            title={project.title}
            description={project.description}
            imgurl={project.image}
            giturl={project.gitUrl}
            previewurl={project.previewUrl}
            />
            </motion.li>
        ))}
      </div>
    </section>
  );
};

export default Projects;
