export interface Alumns {
  id: number;
  name: string;
  lastname: string;
  status: boolean;
  registro: Date;
  courses_fk?: number[];
}

export interface EditAlumnData {
  id: number;
  registro: Date;
  status: boolean;
}

export interface CreateAlumnsData {
  name: string;
  lastname: string;
  status: boolean;
  registro: Date;
  courses_fk: number[];
}

export interface PayloadAlumns {
  name: string;
  lastname: string;
  registro: Date;
}
export interface PayloadCourse {
  name: string;
  schedules: string;
}

export interface Course {
  id: number;
  name: string;
  schedules: string;
}

export interface CreateCourseData {
  name: string;
  schedules: string;
}

export interface User {
  id: number,
  name: string,
  lastname: string,
  email: string,
  password: string,
  token: string,
  role: string
}

export interface LoginFormValue {
  email: string;
  password: string;
}
