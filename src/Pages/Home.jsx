import React, { useState } from 'react'
import { useSearchParams } from 'react-router'

export  const Home = () => {
  const [searchParams,seTSearchParams]=useSearchParams()
  const [search,setSearch]=useState(searchParams.get("searchname")?searchParams.get("searchname"):"")
  const [data,setData]=useState([{name:"Abdullo",id:1},
    {
      name:"Qurbon",
      id:2
    }
  ])
  console.log(searchParams);
  const handleSearch=(value)=>{
    setSearch(value)
    seTSearchParams([["searchname",value]])
  }
  return (
    <div>
      <input type="text" value={search} onChange={(e)=>handleSearch(e.target.value)} name="" id="" />
    {
      data.filter((e)=>e.name.toLowerCase().includes(search.trim().toLowerCase())).map((e)=>{
        return <div>
          <h1>{e.name}</h1>
          <p>{e.id}</p>
        </div>
      })
    }
    
    
    
    
    
    </div>
  )
}

