import Btn from '@/components/ui/btn';
import React, { useMemo, useState } from 'react'

const Home = () => {
  console.log("App rendering");
  const [count,setCount]=useState(0)
  const [count10,setCount10]=useState(false)
  const obj=useMemo(()=>{
    return {id:1,name:"Abdullo"}
  },[count10])
  return (
    <div>
  <button onClick={()=>{setCount((prev)=>prev+2),count==100?setCount10(true):null}}>{count}</button>
Salom
<Btn text={obj}></Btn>
    </div>
  )
}

export default Home
