
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
import axios from "axios";

export const App = () => {
  const api = "https://to-dos-api.softclub.tj/api/to-dos";
  const [search,setSearch]=useState("")
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [openEdit, setOpenEdit] = useState(false);

  async function getData() {
    let newApi=api

    try {
          if(search){
      newApi+=`?query=${search}`
    }
      setLoading(true);
      const { data } = await axios(newApi);
      console.log(data);
      setData(data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
async function deleteImg(id) {
  try {
    await axios.delete(`https://to-dos-api.softclub.tj/api/to-dos/images/${id}`)
    getData()
  } catch (error) {
    console.error(error);
    
  }
}

  const addUser = async (e) => {
    e.preventDefault();

    let newUser = new FormData();
    newUser.append("name", e.target.name.value);
    newUser.append("description", e.target.desc.value);

    for (let el of e.target.image.files) {
      newUser.append("images", el);
    }

    try {
      await axios.post(api, newUser);
      e.target.reset();
      setOpen(false);
      await getData();
    } catch (error) {
      console.log(error.response?.data);
      console.error(error);
    }
  };
  const updateUser = async (e) => {
    e.preventDefault();

    const updatedUser = {
      id: editUser.id,
      name: e.target.name.value,
      description: e.target.desc.value,
      isCompleted: editUser.isCompleted,
    };

    try {
      await axios.put(api + "?id=" + editUser.id, updatedUser);

      setOpenEdit(false);
      setEditUser(null);
      await getData();
    } catch (error) {
      console.log(error.response?.data);
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(api + "?id=" + id);
      await getData();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, [search]);

  if (loading ) {
    return <div>Is loading....</div>;
  }

  return (
    <div> 
      <input type="text" value={search} onChange={(el)=>setSearch(el.target.value)} />
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>Add</DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <form onSubmit={addUser}>
              <DialogTitle>Add new User</DialogTitle>

              <input
                type="text"
                name="name"
                placeholder="Name"
                required
              />

              <input
                type="text"
                name="desc"
                placeholder="Tell about the user"
                required
              />

              <input
                type="file"
                name="image"
                accept="image/*"
                multiple
              />

              <DialogDescription>
                this person will add to your todo list
              </DialogDescription>

              <button type="submit">Add</button>
            </form>
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

                <TableCell>{el.description}</TableCell>

                <TableCell>
                  {el.images?.map((img) => (
                    <div key={img.id}>
                      <img className="w-[200px] h-[200px]"
                        src={`https://to-dos-api.softclub.tj/images/${img.imageName}`}
                        alt=""
                      />
                      <button type="button" onClick={() => deleteImg(img.id)}>
  x
</button> <br />
                    </div>
                  ))}
                  


                </TableCell>

                <TableCell>
                  <button onClick={() => handleDelete(el.id)}>
                    Delete
                  </button>
                </TableCell>

                <TableCell>
                  <Dialog
                    open={openEdit && editUser?.id === el.id}
                    onOpenChange={(value) => {
                      setOpenEdit(value);

                      if (!value) {
                        setEditUser(null);
                      }
                    }}
                  >
                    <DialogTrigger
                      onClick={() => {
                        setEditUser(el);
                        setOpenEdit(true);
                      }}
                    >
                      Edit
                    </DialogTrigger>

                    <DialogContent>
                      <DialogHeader>
                        {editUser && editUser.id === el.id && (
                          <form onSubmit={updateUser}>
                            <DialogTitle>Edit User</DialogTitle>

                            <input
                              defaultValue={editUser.name}
                              type="text"
                              name="name"
                              placeholder="Name"
                              required
                            />

                            <input
                              defaultValue={editUser.description}
                              type="text"
                              name="desc"
                              placeholder="Tell about the user"
                              required
                            />

                            <DialogDescription>
                              Edit the user information
                            </DialogDescription>

                            <button type="submit">Save</button>
                          </form>
                        )}
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
