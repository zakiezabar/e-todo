"use client";

import Input from "@/components/input";
import TodoList from "@/components/todo-list";
import Image from "next/image";
import { useCallback, useState } from "react";

const Dashboard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [itemToEdit, setItemToEdit] = useState({ title: "", id: "" });

  const handleEdit = useCallback(
    ({ title, id }: { title: string; id: string }) => {
      setIsEditing(true);
      setItemToEdit({ title, id });
    },
    []
  );

  return (
    <div>
      <div className="flex flex-col gap-2 justify-center items-center">
        <Image src="/images/logo-full-primary.svg" width={300} height={200} alt="Exploracy logo" />
        <h1 className="flex justify-center font-bold text-4xl mt-2 pb-2">
          Todo List
        </h1>
      </div>
      <div className="bg-slate-100/50 p-6 rounded-3xl shadow-md shadow-slate-50">
        <Input isEditing={isEditing} itemToEdit={itemToEdit} />
        <TodoList handleEdit={handleEdit} />
      </div>
    </div>
  );
};

export default Dashboard;
