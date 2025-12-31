export interface Student {
    id: number;
    name: string;
    age: number;
}

export type StudentList = Array<Student>;

// export type StudentList = Student[];