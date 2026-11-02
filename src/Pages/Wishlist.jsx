import React, { useState } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


import ras from "../Layout/imgpol/01 3.png";
import ras2 from "../Layout/imgpol//image 1.png";
import ras3 from "../Layout/imgpol/image 10 (1).png";
import ras4 from "../Layout/imgpol/image 2 (1).png";
import { Button } from '@/components/ui/button';
import { useTranslation } from "react-i18next";

let rasarr = [ras, ras2, ras3, ras4];
const Wishlist = () => {
  const { t } = useTranslation();
  
    let [arr, setArr] = useState(JSON.parse(localStorage.getItem("wsh")) || []);
    function deleteCart(id) {
  let users=JSON.parse(localStorage.getItem("wsh"))
  users=users.filter((el)=>el.id!==id)
  
  localStorage.setItem("wsh", JSON.stringify(users));
  setArr(users)
}
  return (
    <div className='pt-[100px]'>
         <Table className='w-[782px]'>
  <TableCaption>{t("A list of your recent invoices.")}</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="">{t("Products")}</TableHead>
      <TableHead>{t("Price")}</TableHead>
      <TableHead>{t("Action")}</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {arr.map((el,i)=>{
      return <TableRow>
        <TableCell>
          <div className="flex items-center gap-[15px]">
            <img className='w-[70px] h-[70px]' src={rasarr[i%rasarr.length]} alt="" />
            <div className="">
             <h1 className='font-semibold'>
              {el.name?.slice(0,16)}
              </h1> 
              <p>{t("SKU:")}{el.id}</p>
            </div>
          </div>
        </TableCell>
        <TableCell>
          <p>
            ${el.price}.00
            
            </p>
            
            </TableCell>
            <TableCell>
          <Button onClick={()=>{deleteCart(el.id)}} className="bg-red-800">{t("Delete")}</Button>
      
            </TableCell>
            <TableCell>

            </TableCell>
            <TableCell>
            </TableCell>
      </TableRow>
    })}
  </TableBody>
</Table>
    </div>
  )
}

export default Wishlist