"use client";
import { useClassroomStore } from "@/store/classRoomStore";

export default function StudentList() {
  const selectedId = useClassroomStore((s) => s.selectedClassroomId);
  const allStudents = useClassroomStore((s) => s.students);

  const remove = useClassroomStore((s) => s.removeStudent);
  const move = useClassroomStore((s) => s.moveStudent);
  const toggle = useClassroomStore((s) => s.toggleAttendance);
  const classrooms = useClassroomStore((s) => s.classrooms);

  if (!selectedId) return null;

  const students = allStudents.filter((s) => s.classroomId === selectedId);

  return (
    <div className="p-4">
      <h2>Students</h2>
      {students.map((s) => (
        <div key={s.id} className="flex gap-2 p-2 border">
          <span>{s.name}</span>
          <span>{s.present ? "✅" : "❌"}</span>

          <button onClick={() => toggle(s.id)}>Attendance</button>
          <button onClick={() => remove(s.id)}>Remove</button>

          <select
            value={s.classroomId}
            onChange={(e) => move(s.id, e.target.value)}
          >
            {classrooms.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
}