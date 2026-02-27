// "use client"
// import { useState } from "react"
// import { useClassRoomStore } from "@/store/classRoomStore"

// export default function AddClassroomForm() {
//   const [section, setSection] = useState("")
//   const add = useClassRoomStore((s) => s.addClassroom)

//   return (
//     <div className="bg-white p-4 rounded shadow mb-4">
//       <input
//         value={section}
//         onChange={(e) => setSection(e.target.value)}
//         placeholder="Section name"
//         className="border p-2 mr-2"
//       />

//       <button
//         onClick={() => {
//           add(section)
//           setSection("")
//         }}
//         className="bg-blue-500 text-white px-3 py-2 rounded"
//       >
//         Add Classroom
//       </button>
//     </div>
//   )
// }