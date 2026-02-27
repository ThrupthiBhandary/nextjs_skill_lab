"use client";
import { useClassroomStore } from "@/store/classRoomStore";

export default function Navbar() {
  const total = useClassroomStore((s) => s.getTotalStudents());

  return (
    <div className="p-4 bg-blue-600 text-white flex justify-between">
      <h1>Classroom Manager</h1>
      <p>Total Students: {total}</p>
    </div>
  );
}