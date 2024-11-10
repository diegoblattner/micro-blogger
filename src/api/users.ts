import { USERS_ME_URL } from "../constants";
import type { User } from "../types";

export async function fetchCurrentUser(): Promise<User> {
  const response = await fetch(USERS_ME_URL);
  const user: User = await response.json();
  return user;
}
