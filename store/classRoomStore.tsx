"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Student {
  id: string;
  name: string;
  classroomId: string;
  present?: boolean;
}

export interface Classroom {
  id: string;
  name: string;
  capacity: number;
}

interface ClassroomState {
  students: Student[];
  classrooms: Classroom[];
  selectedClassroomId: string | null;

  addStudent: (name: string, classroomId: string) => void;
  removeStudent: (id: string) => void;
  moveStudent: (studentId: string, classroomId: string) => void;
  toggleAttendance: (id: string) => void;

  setSelectedClassroom: (id: string) => void;

  getTotalStudents: () => number;
  getStudentsByClassroom: (id: string) => Student[];
}

export const useClassroomStore = create<ClassroomState>()(
  persist(
    (set, get) => ({
      students: [],
      classrooms: [
        { id: "1", name: "A Section", capacity: 5 },
        { id: "2", name: "B Section", capacity: 5 },
      ],
      selectedClassroomId: "1",

      addStudent: (name, classroomId) => {
        const classroom = get().classrooms.find((c) => c.id === classroomId);
        const count = get().students.filter((s) => s.classroomId === classroomId).length;

        if (classroom && count >= classroom.capacity) {
          alert("Classroom full");
          return;
        }

        set((state) => ({
          students: [
            ...state.students,
            {
              id: crypto.randomUUID(),
              name,
              classroomId,
              present: true,
            },
          ],
        }));
      },

      removeStudent: (id) =>
        set((state) => ({
          students: state.students.filter((s) => s.id !== id),
        })),

      moveStudent: (studentId, classroomId) =>
        set((state) => ({
          students: state.students.map((s) =>
            s.id === studentId ? { ...s, classroomId } : s
          ),
        })),

      toggleAttendance: (id) =>
        set((state) => ({
          students: state.students.map((s) =>
            s.id === id ? { ...s, present: !s.present } : s
          ),
        })),

      setSelectedClassroom: (id) => set({ selectedClassroomId: id }),

      getTotalStudents: () => get().students.length,

      getStudentsByClassroom: (id) =>
        get().students.filter((s) => s.classroomId === id),
    }),
    { name: "classroom-storage" }
  )
);