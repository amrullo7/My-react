import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React, { useReducer, useState } from "react";
const inittalState = {
  userToEdit: null,
  editOpen: false,
  count: 0,
  value: 0,
  data: [
    { id: 1, name: "Amrullo" },
    { id: 2, name: "Abdullo" },
  ],
};

const countReducer = (state, action) => {
  if (action.type == "increment") {
    return { ...state, count: state.count + 1 };
  }
  if (action.type == "decrement") {
    return { ...state, count: state.count - 1 };
  }
  if (action.type == "delete") {
    return { ...state, data: state.data.filter((e) => e.id != action.value) };
  }
  if (action.type == "clear") {
    return { ...state, count: (state.count = 0) };
  }
  if (action.type == "add") {
    return { ...state, data: [...state.data, action.value] };
  }
  if (action.type == "open_edit") {
    return { ...state, editOpen: true, userToEdit: { ...action.value } };
  }

  if (action.type == "change_input") {
    return {
      ...state,
      userToEdit: { ...state.userToEdit, ...action.value },
    };
  }

  // EDIT USER
  if (action.type == "edit") {
    const e = action.event;
    e.preventDefault();

    const updatedData = state.data.map((el) => {
      if (el.id === state.userToEdit.id) {
        return {
          ...el,
          name: state.userToEdit.name,
          age: state.userToEdit.age,
          city: state.userToEdit.city,
        };
      }
      return el;
    });

    return { ...state, data: updatedData, editOpen: false, userToEdit: null };
  }

  if (action.type == "close_dialog") {
    return { ...state, dialogOpen: action.value };
  }

  if (action.type == "close_edit") {
    return { ...state, editOpen: action.value };
  }

  return state;
};

const Home = () => {
  const [state, dispatch] = useReducer(countReducer, inittalState);
  console.log(state);

  function addUser(e) {
    e.preventDefault();
    let newUser = {
      name: e.target.name.value,
      id: Date.now(),
    };
    dispatch({ type: "add", value: newUser });
  }
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button className="bg-blue-700">Add</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader></DialogHeader>
          <form action="" onSubmit={addUser}>
            <label className="block text-sm font-semibold text-slate-600 mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name..."
              required
              name="name"
              className="w-full border-2 border-slate-400 rounded-xl px-4 py-3 outline-none "
            />
            <Button type="submit">Add</Button>
          </form>
        </DialogContent>
      </Dialog>
      <Table className="w-[100%]">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>NAME</TableHead>
            <TableHead>ACTIONS</TableHead>
          </TableRow>
        </TableHeader>
        {state.data.map((e) => {
          return (
            <TableRow>
              <TableCell>{e.id}</TableCell>
              <TableCell>{e.name}</TableCell>
              <TableCell>
                {" "}
                <Button
                  className="bg-red-700"
                  onClick={() => dispatch({ type: "delete", value: e.id })}
                >
                  Delete
                </Button>
                <Button
                  onClick={() => dispatch({ type: "open_edit", value: e })}
                  className="bg-green-800"
                >
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          );
        })}

        <TableBody></TableBody>
      </Table>
      <div className="">
        <Dialog
          open={state.editOpen}
          onOpenChange={(open) => dispatch({ type: "close_edit", value: open })}
        >
          <DialogContent className="sm:max-w-[450px] rounded-2xl p-6">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-slate-800">
                Edit User
              </DialogTitle>
            </DialogHeader>

            <form
              onSubmit={(e) => dispatch({ type: "edit", event: e })}
              className="flex flex-col gap-4 mt-4"
            >
              <div>
                <label className="block text-sm font-semibold text-slate-600 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name..."
                  required
                  name="name"
                  value={state.userToEdit?.name}
                  onChange={(e) =>
                    dispatch({
                      type: "change_input",
                      value: { name: e.target.value },
                    })
                  }
                  className="w-full border-2 border-slate-400 rounded-xl px-4 py-3 outline-none "
                />
              </div>

              <Button type="submit">Save Changes</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Home;
