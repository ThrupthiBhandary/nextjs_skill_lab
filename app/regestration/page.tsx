import ClassRoomList from "@/components/ClassRoomList"
import StudentList from "@/components/StudentLIst"
import AddStudentForm from "@/components/AddStudentForm"
import Navbar from "@/components/Navbar"

export default function RegistrationPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <Navbar />

      <div className="grid grid-cols-3 gap-6">
        <ClassRoomList />
        <StudentList />
        <AddStudentForm />
      </div>
    </main>
  )
}