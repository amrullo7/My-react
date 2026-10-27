import axios from "axios";
import React, { useEffect, useState } from "react";
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
import { Button } from "@/components/ui/button";
let api = "https://test-swagger-2ph6.onrender.com/users";
const Home = () => {
  let [data, setData] = useState([]);
  let [elemEdit,setElemedit]=useState(null)
  function handleSubmit(e) {
    e.preventDefault();
    let newUser = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.pass.value,
      role: e.target.select.value,
      city: e.target.city.value,
    };
    addUSer(newUser);
  }
  async function addUSer(newUser) {
    try {
      let token = localStorage.getItem("token");
      await axios.post(api, newUser, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      get();
    } catch (error) {
      console.error(error);
    }
  }
  async function handleDelete(id) {
    try {
      let token = localStorage.getItem("token");
      await axios.delete(api + "/" + id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      get();
    } catch (error) {
      console.error(error);
    }
  }

  async function get() {
    try {
      let token = localStorage.getItem("token");
      let data = await axios.get(api, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(data.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    get();
  }, []);
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button >+  Add</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              <form
                action=""
                className="border borde-black"
                onSubmit={handleSubmit}
              >
                <input type="text" name="name" id="" />
                <input type="text" name="email" id="" />
                <input type="text" name="pass" id="" />
                <input type="text" name="city" id="" />
                <select name="select" id="">
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>

                <button type="submit">Add</button>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
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
                <TableCell>{el.name}</TableCell>
                <TableCell>{el.email}</TableCell>
                <TableCell>{el.role}</TableCell>
                <TableCell>{el.city}</TableCell>
                <TableCell>
                  <Button
                    className="bg-red-800"
                    onClick={() => handleDelete(el.id)}
                  >
                    Delete
                  </Button>
                  <Dialog>
        <DialogTrigger>
          <Button className="bg-green-700" onClick={()=>setElemedit(el)}>Edit</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              <form
                action=""
                className="border borde-black"
                
              >
                <input type="text" value={el.name} name="name" id="" />
                <input type="text" value={el.email} name="email" id="" />
                <input type="text" value={el.password} name="pass" id="" />
                <input type="text" value={el.city} name="city" id="" />
                <select name="select" value={el.role} id="">
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>

                <button type="submit">Add</button>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default Home;
