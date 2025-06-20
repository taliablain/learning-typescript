//type alias

type status = "pending" | "approved";
type coordinates = [number, number];

type Product = {
    id: number;
    name: string;
    price: number;
}

//interface
interface Products {
    id: number;
    name: string;
    price: number;
}


interface User {
  id: number;
  name: string;
  email?: string;         // Optional
  readonly createdAt: Date; // Readonly
}


const usernames: string[] = ["Alice", "Bob"];

const pair: [string, number] = ["Age", 30];





function createUser(id: number, name: string) {
  return {
    id,
    name,
    active: true,
  };
}

type Status = "pending" | "approved" | "rejected";
let currentStatus: Status = "pending";
let finalStatus: Status = "done";


enum Role {
  Admin = "admin",
  User = "user",
  Guest = "guest"
}

let currentRole: Role = Role.User;






