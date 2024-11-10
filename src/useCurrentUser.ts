import { useEffect, useState } from "react";
import { fetchCurrentUser } from "./api/users";
import type { User } from "./types";

export function useCurrentUser() {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    fetchCurrentUser().then(setUser).catch(console.error);
  }, []);

  return user;
}
