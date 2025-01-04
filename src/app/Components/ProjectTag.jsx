import React from 'react'

const ProjectTag = ({name,onclick,isselected}) => {
    const buttonstyles = isselected
      ? "text-white border-purple-500"
      : "text-[#ADB7BE] border-slate-600 hover:border-white";
      
  return (
    <>
      <button onClick={()=>onclick(name)} className={`cursor-pointer rounded-full border-2 px-6 py-3 text-xl ${buttonstyles}`}>
        {name}
      </button>
    </>
  );
}

export default ProjectTag