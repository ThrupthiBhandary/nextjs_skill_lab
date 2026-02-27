"use client";
import { useClassroomStore } from "@/store/classRoomStore";

export default function ClassroomList() {
  const classrooms = useClassroomStore((s) => s.classrooms);
  const selected = useClassroomStore((s) => s.selectedClassroomId);
  const setSelected = useClassroomStore((s) => s.setSelectedClassroom);

  return (
    <div className="p-4">
      <h2>Classrooms</h2>
      {classrooms.map((c) => (
        <button
          key={c.id}
          onClick={() => setSelected(c.id)}
          className={`block p-2 m-1 border ${
            selected === c.id ? "bg-green-200" : ""
          }`}
        >
          {c.name}
        </button>
      ))}
    </div>
  );
}