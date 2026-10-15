import React, { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const App = () => {
  const [data,setData]=useState([
    {name:"Abdullo",
      age:"22",
      id:1,
      status:true,

    },{name:"Qurbon",
      age:"18",
      id:2,
      status:false,

    },
  ])
  const handleDelete=(id)=>{ 
    setData((prev)=>prev.filter((el)=>el.id!=id))
  }
  return (
    <div>
      <button>Add</button>
      <Table>
  <TableCaption>A list of persons</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="">Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
{
        data.map((e)=>
        { return <TableRow key={e.id}>
           <TableCell>{e.name}</TableCell>
          <TableCell>{e.age}</TableCell>
          <TableCell>{e.status?"Active":"Inactive"}</TableCell>
         <TableCell>
           <button onClick={()=> handleDelete(e.id)}>Delete</button>
         </TableCell>
          
        </TableRow>})
      }
  </TableBody>
</Table>
      <Drawer swipeDirection="right">
        <DrawerTrigger  render={<Button variant="outline" />}>
          Open
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4">{/* Content here */}</div>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose render={<Button variant="outline" />}>
              Cancel
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
   
    </div>
  );
};

export default App;
