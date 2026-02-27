"use client";
import { useState } from "react";
import { useClassroomStore } from "@/store/classRoomStore";

export default function AddStudentForm() {
  const [name, setName] = useState("");
  const selectedId = useClassroomStore((s) => s.selectedClassroomId);
  const add = useClassroomStore((s) => s.addStudent);

  if (!selectedId) return null;

  return (
    <div className="p-4">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Student name"
        className="border p-2"
      />
      <button
        onClick={() => {
          add(name, selectedId);
          setName("");
        }}
        className="ml-2 bg-blue-500 text-white p-2"
      >
        Add
      </button>
    </div>
  );
}