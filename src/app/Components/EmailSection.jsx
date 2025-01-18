"use client"
import React from 'react'
import Link from "next/link";
import {useState} from "react";
import Image from "next/image";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
const EmailSection = () => {
    const [emailsubmitted,setEmailsubmitted]=useState(false);
    const handlesubmit=async (e)=>{
        
        e.preventDefault();
        const data={
            email:e.target.email.value,
            subject:e.target.subject.value,
            message:e.target.message.value
        }

        const Jsondata=JSON.stringify(data);
        const endpoint="api/send";
        const options={
            method:'POST',
            header:{
                'Content-Type':'application/json'
            },
            body:Jsondata,
        }
        const response=await fetch(endpoint,options);
        const resData=await response.json();
        console.log(resData)
        if(resData.status===200){
            alert('Message sent successfully');
            setEmailsubmitted(true);
        }
    }
        return (
          <>
            <section
              id="contact"
              className="grid relative md:grid-cols-2 my-12 md:my-12 py-24 gap-4"
            >
              <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
              <div className="z-10 items-center justify-center flex flex-col">
                <div className=" flex flex-col items-center  p-8">
                  <h5 className="text-xl font-bold text-wrap text-white my-2">
                    Let&apos;s connect
                  </h5>
                  <h5 className="text-xl font-bold text-wrap text-white my-2">
                    Create something remarkable together!
                  </h5>
                </div>
                <div className="socials flex flex-row gap-5">
                  <Link href="https://github.com/saksham12030/">
                    <Image src={GithubIcon} alt="Github Icon" />
                  </Link>
                  <Link href="https://www.linkedin.com/in/saksham-bhardwaj-57696a20b/">
                    <Image src={LinkedinIcon} alt="Linkedin Icon" />
                  </Link>
                </div>
              </div>
              <div>
                <form
                  action=""
                  onSubmit={handlesubmit}
                  className="flex flex-col gap-4"
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="text-white block mb-2 text-sm font-medium"
                    >
                      Your email
                    </label>
                    <input
                      name="email"
                      type="email"
                      id="email"
                      className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-sm rounded-lg  block w-full p-2.5"
                      required
                      placeholder="Hello@gmail.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="text-white mb-2 block text-sm font-medium"
                    >
                      Subject
                    </label>
                    <input
                      name="subject"
                      type="text"
                      id="subject"
                      className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-sm rounded-lg  block w-full p-2.5"
                      required
                      placeholder="Just saying hi"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="text-white mb-2 block text-sm font-medium"
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-sm rounded-lg  block w-full p-2.5"
                      placeholder="Let's talk about..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                  >
                    Send Message
                  </button>
                  {emailsubmitted && (
                    <p className="text-green-500 text-sm mt-1">
                      Email Sent Successfully
                    </p>
                  )}
                </form>
              </div>
            </section>
          </>
        );
}

export default EmailSection