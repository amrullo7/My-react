import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
let api="https://test-swagger-2ph6.onrender.com/catalogs"
const About = () => {
  let [data,setData]=useState([])
  let token=localStorage.getItem("token")
  async function getcatalog() {
    try {
      let {data}=await axios.get(api)
      console.log(data);
      
      setData(data)
    } catch (error) {
      console.error(error);
      
    }
  }
  useEffect(()=>{ 
  getcatalog()},
  [])
  return (
    <div>
      
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((el) => {
            return (
              <TableRow key={el.id}>
                <TableCell>{el?.name}</TableCell>
                <TableCell>{el?.slug}</TableCell>
                <TableCell>{el?.role}</TableCell>
                <TableCell>{el?.city}</TableCell>
                <TableCell>
                  <Button
                    className="bg-red-800"
                    onClick={() => handleDelete(el.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  )
}

export default About