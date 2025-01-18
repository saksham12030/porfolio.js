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
      title: "Music Streaming Application",
      description:
        "Music Streaming Application developed using Reactjs ,Nodejs, Expressjs, and MongoDB",
      image: "/projects/1.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/saksham12030/SPOTIFY-Clone",
      previewUrl: "",
    },
    {
      id: 2,
      title: "Text Editing Application",
      description: "Text Editing Website Built using Reactjs,TailwindCss",
      image: "/projects/2.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/saksham12030/reactjsfiler",
      previewUrl: "https://storied-blini-f305bb.netlify.app",
    },
    {
      id: 3,
      title: "Mail Sender",
      description: "Mail Sending Application using Reactjs and Firebase",
      image: "/projects/3.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/saksham12030/Gmail-clone",
      previewUrl: "https://clone-yt-3f910.web.app",
    },
    {
      id: 4,
      title: "Youtube Clone Application",
      description: "Youtube Clone Application created using Reactjs and YOUTUBE API",
      image: "/projects/4.png",
      tag: ["All", "Mobile"],
      gitUrl: "https://github.com/saksham12030/Youtube-cln",
      previewUrl: "/",
    },
    {
      id: 5,
      title: "RealTime News Update",
      description: "A full Fledge News Application using Reactjs and News API",
      image: "/projects/5.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/saksham12030/gitnewapi",
      previewUrl: "/",
    },
    {
      id: 6,
      title: "Doc Mini Project",
      description: "A Mini Project on Document Management System using Reactjs and Framer Motion",
      image: "/projects/6.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/saksham12030/docs-project",
      previewUrl: "/",
    },
    {
      id: 7,
      title: "To Do Application",
      description: "Todo Application using Typescript",
      image: "/projects/7.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/saksham12030/todo-typescript",
      previewUrl: "https://todo-typescript-jn3l.vercel.app/",
    },
    {
      id: 8,
      title: "Card Application",
      description: "Todo Application using Nodejs and Expressjs and Ejs template Engine",
      image: "/projects/8.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/saksham12030/Pinterest-Auth",
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
