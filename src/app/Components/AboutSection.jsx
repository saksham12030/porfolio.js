"use client";
import React from 'react'
import { useState, useTransition } from "react";
import Image from "next/image";
import Tabbutton from './Tabbutton';

const tab_data = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className=" flex flex-col gap-1 list-disc">
        <li>Nodejs</li>
        <li>Expressjs</li>
        <li>Mongodb</li>
        <li>Reactjs</li>
        <li>Nextjs</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className=" flex flex-col gap-1 list-disc">
        <li>Maharaja Agrasen Institute of Technology</li>
        <li>Shiksha Niketan Senior Secondary School</li>
      </ul>
    ),
  },
  {
    title: "Achievement",
    id: "achievements",
    content: (
      <ul className=" flex flex-col gap-1 list-disc">
        <li>5⭐ Coder at HackerRank </li>
        <li>Solve over 300+ Coding Problems </li>
        <li>Developer and Debugger</li>
      </ul>
    ),
  },
];
const AboutSection = () => {
    const [tab, settab] = useState("skills");
    const [isPending, startTransition] = useTransition();
    const handletabchange=(id)=>{
        startTransition(()=>{
            settab(id)
        })
    }
  return (
    <section className="text-white" id='about'>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          className="rounded-xl"
          src="/images/about-image.png"
          alt="About-image "
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex h-full flex-col">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="text-base lg:text-lg">
            <p>
              Hi, I&apos;m Saksham Bhardwaj, a passionate and innovative web
              developer specializing in the MERN stack. With a strong foundation
              in React.js, Node.js, Express.js, and MongoDB, I thrive on
              creating dynamic, user-friendly, and scalable web applications.
            </p>
            <br />
            <p>
              I enjoy solving complex problems and building impactful projects.
              My skill set includes C++, Python, and proficiency in tools like
              Tailwind CSS, Cloudinary, and Firebase, enabling me to craft
              visually appealing and robust solutions.
            </p>
            <br />
          </div>
          <div className="flex flex-row gap-2 justify-start mt-8 ">
            <Tabbutton
              selecttab={() => {
                handletabchange("skills");
              }}
              active={tab === "skills"}
            >
              Skills
            </Tabbutton>
            <Tabbutton
              selecttab={() => {
                handletabchange("education");
              }}
              active={tab === "education"}
            >
              Education
            </Tabbutton>
            <Tabbutton
              selecttab={() => {
                handletabchange("achievements");
              }}
              active={tab === "achievements"}
            >
              Certfication
            </Tabbutton>
          </div>
          <div className="mt-5 ">
            {tab_data.find((e) => e.id == tab).content}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection