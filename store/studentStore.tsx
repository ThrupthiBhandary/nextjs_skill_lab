import {create} from "zustand"
import { Student} from "@/types/student"

interface StudentState {
  students: Student[]

  addStudent: (name: string, classroomId: number) => void
  removeStudent: (id: number) => void
  moveStudent: (id: number, classroomId: number) => void

  getTotalStudents: () => number
  getStudentsByClassroom: (id: number) => Student[]
}

export const useStudentStore = create<StudentState>((set, get) => ({
  students: [],

  addStudent: (name, classroomId) =>
    set((state) => ({
      students: [...state.students, { id: Date.now(), name, classroomId }],
    })),

  removeStudent: (id) =>
    set((state) => ({
      students: state.students.filter((s) => s.id !== id),
    })),

  moveStudent: (id, classroomId) =>
    set((state) => ({
      students: state.students.map((s) =>
        s.id === id ? { ...s, classroomId } : s
      ),
    })),

  getTotalStudents: () => get().students.length,

  getStudentsByClassroom: (id) =>
    get().students.filter((s) => s.classroomId === id),
}))