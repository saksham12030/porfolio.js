"use client";
import React from 'react'
import { useState, useTransition } from "react";
import Image from "next/Image"
import Tabbutton from './Tabbutton';

const tab_data = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className=" flex flex-col gap-1 list-disc">
        <li>Nodejs</li>
        <li>Expressjs</li>
        <li>SQL</li>
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
    title: "Certifications",
    id: "certification",
    content: (
      <ul className=" flex flex-col gap-1 list-disc">
        <li>Completion of C++ DSA </li>
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
    <section className="text-white">
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
          <p className="text-base lg:text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
            aliquam tempore beatae unde corporis voluptas ea adipisci quam, et,
            mollitia debitis excepturi neque?
          </p>
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
                handletabchange("certification");
              }}
              active={tab === "certification"}
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