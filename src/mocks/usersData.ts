import { nanoid } from "nanoid";
import type { User } from "../types";

export const currentUser: User = {
  id: nanoid(),
  displayName: "Sara Sondey",
};

export const inactiveUser: User = {
  id: nanoid(),
  displayName: undefined,
};

export const allUsers: User[] = [
  currentUser,
  inactiveUser,
  {
    id: "0001",
    displayName: "John Smith",
  },
  {
    id: "0002",
    displayName: "Mary Doe",
  },
  {
    id: "0003",
    displayName: "Marcos Yung",
  },
];
