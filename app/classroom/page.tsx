import Navbar from "@/components/Navbar";
import ClassroomList from "@/components/ClassRoomList";
import StudentList from "@/components/StudentLIst";
import AddStudentForm from "@/components/AddStudentForm";

export default function ClassroomPage() {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-2">
        <ClassroomList />
        <div>
          <AddStudentForm />
          <StudentList />
        </div>
      </div>
    </div>
  );
}