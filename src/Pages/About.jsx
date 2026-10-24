import React from 'react'
import ill from "../Layout/img/illustration (8).png"
import video from "../Layout/img/video.png"
import stats from "../Layout/img/statistics.png"
const About = () => {
  return (
    <div>
      <div className="] flex justify-center items-center gap-[60px] pt-[65px] pb-[65px]">
              <div className="flex flex-col gap-[25px]">
                <h1 className='text-[64px] font-semibold'>Enjoy studying <br />
      with Createx <br /> Online Courses</h1>
      <div className="flex gap-[25px]">
        <button className='border border-[#F95318] w-[148px] h-[52px] text-[#F95318] rounded-[5px]'>About us</button>
         <button className="bg-[#F95318] w-[200px] h-[50px] rounded-[5px] text-white">Explore courses</button>
        
      </div>
              </div>
              <img src={ill} alt="" />
            </div>
            <div className="flex justify-center items-center gap-[50px]">
              <img src={video} alt="" />
              <img src={stats} alt="" />
            </div>
    </div>
  )
}

export default About