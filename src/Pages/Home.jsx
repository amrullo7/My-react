import React, { useEffect, useState } from 'react'
import logo from "../Layout/img/illustration (6).png"
import logo1 from "../Layout/img/image (51).png"
import check from "../Layout/img/check (1).png"
import man from  "../Layout/img/image.png"
import star from "../Layout/img/Star.png"
import tabs from "../Layout/img/tabs.png"
import like from "../Layout/img/like.png"
import ill from "../Layout/img/illustration (7).png"
import hover from "../Layout/img/hover.png"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import axios from 'axios'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from '@/components/ui/button'

let api="https://to-dos-api.softclub.tj/api/to-dos"

const Home = () => {
  const [data,setdata]=useState([])
  const [open,setOpen]=useState(false)
  const [openEdit,setOpenEdit]=useState(false)
  const [elemEdit,setElemEdit]=useState(null)
  const [search,setSearch]=useState("")
  let idx=null
  function handleAdd(e) {
    e.preventDefault()
    let newUser=new FormData()
    newUser.append("name", e.target.name.value);
    newUser.append("description", e.target.desc.value);
    newUser.append("isCompleted", false);
    for (let el of e.target.photo.files) {
      newUser.append("images", el);
    }
    addUser(newUser)
  }
  function handleEdit(e) {
    e.preventDefault()
    let updateUser={
      name:elemEdit.name,
      description:elemEdit.description,
      id:elemEdit.id
    }
    editUser(updateUser)

  }
  async function editUser(user) {
    try {
      await axios.put(api,user)
      get()
    } catch (error) {
      console.error(error);
      
    }
  }
  async function addUser(user) {
    try {
      await axios.post(api,user)
    } catch (error) {
      console.error(error);
      
    }
  }
  async function get() {
    try {
      let {data}=await axios.get(api)
      console.log(data.data);
      setdata(data.data)
      
    } catch (error) {
      console.error(error);
      
    }
  }
  async function delImg(id) {
    try {
      await axios.delete(`https://to-dos-api.softclub.tj/api/to-dos/images/${id}`)
      get()
    } catch (error) {
      console.error(error);
      
    }
  }
  async function hadleDelete(id) {
    try {
      await axios.delete(api+"?id="+id)
      get()
    } catch (error) {
      console.error(error);
      
    }
  }
  async function editStatus(id) {
    try {
      await axios.put(`https://to-dos-api.softclub.tj/completed?id=${id}`)
      get()
    } catch (error) {
      console.error(error);
      
    }
  }
 useEffect(()=>{
get()

 },[])

  return (
    <div>
      <div className="bg-[#FEDAD5] flex justify-center items-center gap-[60px] pt-[65px] pb-[65px]">
        <div className="flex flex-col gap-[25px]">
          <h1 className='text-[64px] font-semibold'>Enjoy studying <br />
with Createx <br /> Online Courses</h1>
<div className="flex gap-[25px]">
  <button className='border border-[#F95318] w-[148px] h-[52px] text-[#F95318] rounded-[5px]'>About us</button>
   <button className="bg-[#F95318] w-[200px] h-[50px] rounded-[5px] text-white">Explore courses</button>
  
</div>
        </div>
        <img src={logo} alt="" />
      </div>
      <div className="flex items-center justify-center gap-[80px] mt-[70px]">
        <img src={logo1} alt="" />
        <div className="flex flex-col gap-[25px]">
          <div className="">
            <p className='text-[16px] font-semibold'>Who we are</p>
            <h1 className='text-[46px] font-semibold'>Why Createx?</h1>
          </div>
          <div className="flex flex-col gap-[15px]">
            <div className="flex gap-[15px] items-center">
              <img src={check} alt="" />
              <p className='w-[398px]'>
                A fermentum in morbi pretium aliquam adipiscing donec tempus.
              </p>
            </div>
             <div className="flex gap-[15px] items-center">
              <img src={check} alt="" />
              <p className='w-[398px]'>Vulputate placerat amet pulvinar lorem nisl.
              </p>
            </div>
             <div className="flex gap-[15px] items-center">
              <img src={check} alt="" />
              <p className='w-[398px]'>Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.
              </p>
            </div>
             <div className="flex gap-[15px] items-center">
              <img src={check} alt="" />
              <p className='w-[398px]'>Etiam duis lobortis in fames ultrices commodo nibh.
              </p>
            </div>
             <div className="flex gap-[15px] items-center">
              <img src={check} alt="" />
              <p className='w-[398px]'>Tincidunt sagittis neque sem ac eget.
              </p>
            </div>
             <div className="flex gap-[15px] items-center">
              <img src={check} alt="" />
              <p className='w-[398px]'>Ultricies amet justo et eget quisque purus vulputate dapibus tortor.
              </p>
            </div>
          </div>
           <button className="bg-[#F95318] w-[200px] h-[50px] rounded-[5px] text-white">More about us</button>
  
        </div>
      </div>
      <div className="mt-[70px]">
        <div className=" flex items-end justify-center gap-[750px]">
        <div className="">
            <p className='text-[16px] font-semibold'>Ready to learn?</p>
            <h1 className='text-[46px] font-semibold'>Featured Courses</h1>
          </div>
            <button className='border border-[#F95318] w-[202px] h-[52px] text-[#F95318] rounded-[5px]'>View all courses</button>
  
          </div>
          <div className=" flex flex-wrap gap-[25px] justify-center mt-[50px]">
            <div className="flex  items-center gap-[25px] border w-[600px] shadow-xl">
              <img src={man} alt="" />
              <div className="flex flex-col gap-[30px]">
                <p className='bg-[#03CEA4] text-white w-[80px] p-[2px] rounded-[8px]'>Marketing</p>
              <h1 className='font-semibold w-[302px]'>The Ultimate Google Ads Training Course</h1>
              <p className='text-[#787A80]'> <span className='text-[#FF4242]'>$100</span> | by Jerome Bell</p>
              </div>
            </div>
             <div className="flex  items-center gap-[25px] border w-[600px] shadow-xl">
              <img src={man} alt="" />
              <div className="flex flex-col gap-[30px]">
                <p className='bg-[#03CEA4] text-white w-[80px] p-[2px] rounded-[8px]'>Marketing</p>
              <h1 className='font-semibold w-[302px]'>The Ultimate Google Ads Training Course</h1>
              <p className='text-[#787A80]'> <span className='text-[#FF4242]'>$100</span> | by Jerome Bell</p>
              </div>
            </div>
             <div className="flex  items-center gap-[25px] border w-[600px] shadow-xl">
              <img src={man} alt="" />
              <div className="flex flex-col gap-[30px]">
                <p className='bg-[#03CEA4] text-white w-[80px] p-[2px] rounded-[8px]'>Marketing</p>
              <h1 className='font-semibold w-[302px]'>The Ultimate Google Ads Training Course</h1>
              <p className='text-[#787A80]'> <span className='text-[#FF4242]'>$100</span> | by Jerome Bell</p>
              </div>
            </div>
             <div className="flex  items-center gap-[25px] border w-[600px] shadow-xl">
              <img src={man} alt="" />
              <div className="flex flex-col gap-[30px]">
                <p className='bg-[#03CEA4] text-white w-[80px] p-[2px] rounded-[8px]'>Marketing</p>
              <h1 className='font-semibold w-[302px]'>The Ultimate Google Ads Training Course</h1>
              <p className='text-[#787A80]'> <span className='text-[#FF4242]'>$100</span> | by Jerome Bell</p>
              </div>
            </div>
             <div className="flex  items-center gap-[25px] border w-[600px] shadow-xl">
              <img src={man} alt="" />
              <div className="flex flex-col gap-[30px]">
                <p className='bg-[#03CEA4] text-white w-[80px] p-[2px] rounded-[8px]'>Marketing</p>
              <h1 className='font-semibold w-[302px]'>The Ultimate Google Ads Training Course</h1>
              <p className='text-[#787A80]'> <span className='text-[#FF4242]'>$100</span> | by Jerome Bell</p>
              </div>
            </div>
             <div className="flex  items-center gap-[25px] border w-[600px] shadow-xl">
              <img src={man} alt="" />
              <div className="flex flex-col gap-[30px]">
                <p className='bg-[#03CEA4] text-white w-[80px] p-[2px] rounded-[8px]'>Marketing</p>
              <h1 className='font-semibold w-[302px]'>The Ultimate Google Ads Training Course</h1>
              <p className='text-[#787A80]'> <span className='text-[#FF4242]'>$100</span> | by Jerome Bell</p>
              </div>
            </div>

          </div>
      </div>
      <div className=" flex flex-col justify-center">
         <div className="flex flex-col items-center mt-[80px]">
            <p className='text-[16px] font-semibold'>Our benefits</p>
            <h1 className='text-[46px] font-semibold'>That’s how we do it</h1>
          </div>
          <div className="flex justify-center gap-[15px] mt-[50px]">
            <div className="flex gap-[12px] items-center w-[307px] h-[46px] border border-[#F95318] justify-center">
              <img src={star} alt="" />
              <p className='text-[#F95318]'>Experienced Tutors</p>
            </div>
             <div className="flex gap-[12px] items-center w-[307px] h-[46px] border   justify-center">
              <img src={like} alt="" />
              <p className='text-[#9A9CA5]'>Experienced Tutors</p>
            </div>
               <div className="flex gap-[12px] items-center w-[307px] h-[46px] border   justify-center">
              <img src={like} alt="" />
              <p className='text-[#9A9CA5]'>Experienced Tutors</p>
            </div>
               <div className="flex gap-[12px] items-center w-[307px] h-[46px] border   justify-center">
              <img src={like} alt="" />
              <p className='text-[#9A9CA5]'>Experienced Tutors</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-[120px] mt-[80px]">
            <div className="">
              <h1 className='text-[42px] font-semibold'>Only practicing tutors</h1>
              <p className='w-[496px]'>Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor sit diam mi amet massa. Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim massa ut amet. Amet enim, nisi tempus vehicula.</p>
            </div>
            <img src={ill} alt="" />
          </div>
      </div>
      <div className="bg-[#F4F5F6]">
      <div className="flex items-end justify-center gap-[750px] pt-[80px]">
            <div className="">
            <p className='text-[16px] font-semibold'>Ready to learn?</p>
            <h1 className='text-[46px] font-semibold'>Featured Courses</h1>
          </div>
          <img src={hover} alt="" />
      </div>
      <div className="">
      <input type="text" name="" onInput={(e)=>setSearch(e.target.value)} placeholder='Search user' id="" />
      <Dialog open={open}>
  <DialogTrigger>
    <Button onClick={()=>setOpen(true)}>Add</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
      <form  onSubmit={(e)=>handleAdd(e)} action="">
        <input type="text" name="name" required />
        <input type="text" name="desc" id="" required />
        <input type="file" multiple name="photo" id="" required />
        <button type="submit" onClick={()=>setOpen(false)}>Add</button>
      </form>
  </DialogContent>
</Dialog>
    <Table className="justify-center w-325 m-auto">
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead >ID</TableHead>
      <TableHead>
      Avatar
      </TableHead>
      <TableHead>Name</TableHead>
      <TableHead >Desc</TableHead>
      <TableHead >Status</TableHead>
      <TableHead >Actions</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody> {
  data.filter((ed)=>ed.name.toLowerCase().includes(search.toLowerCase().trim())).map((el)=>{
      return <TableRow key={el.id}>
        <TableCell>{el.id}</TableCell>
        <TableCell>
<Carousel  className="ml-20 h-[100px] w-[100px]">
  <CarouselContent>
 {el.images.map((img)=>{
          return   <CarouselItem>
          <img className='w-[100px] h-[100px]' src={`https://to-dos-api.softclub.tj/images/${img.imageName}`} alt="" />
    <Button onClick={()=>delImg(img.id)}>x</Button>
      </CarouselItem>  })}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
       
        </TableCell>
        <TableCell>{el.name}</TableCell>
        <TableCell>{el.description}</TableCell>
        <TableCell>{el.isCompleted?"Active":"Inactive"} <input type="checkbox"  checked={el.isCompleted} onChange={()=>editStatus(el.id)} name="" id="" /></TableCell>
   <TableCell>
    <Button onClick={()=>hadleDelete(el.id)} >Delete</Button>

<Dialog open={openEdit}>
  <DialogTrigger>
    <Button onClick={()=>{ setOpenEdit(true), setElemEdit(el)}}>Edit</Button>

  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
    
      <form  onSubmit={(e)=>{handleEdit(e),idx=el.id}} action="">
        <input type="text" value={elemEdit?.name}  onChange={(e)=>setElemEdit({...elemEdit,name:e.target.value})}  name="name" required />
        <input type="text" value={elemEdit?.description} onChange={(e)=>setElemEdit({...elemEdit,description:e.target.value})}  name="desc" id="" required />
        <button type="submit" onClick={()=>setOpenEdit(false)}>Add</button>
      </form>
  </DialogContent>
</Dialog>


    <Dialog>
  <DialogTrigger>
    <Button>Info</Button>

  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        <h1 className='text-[16px] font-semibold text-black'>{el.name}</h1>
        <p  className='text-[16px] font-semibold text-black'>{el.description}</p>
        <p  className='text-[16px] font-semibold text-black'>{el.id}</p>
        <p  className='text-[16px] font-semibold text-black'>{el.isCompleted?"Active":"Inactive"}</p>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

   </TableCell>
      </TableRow>
    })}
  </TableBody>
</Table>
   

      </div>
      </div>
    </div>
  )
}

export default Home