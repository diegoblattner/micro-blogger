import { http, HttpResponse, RequestHandler } from "msw";
import { USERS_ME_URL } from "../constants";
import { currentUser } from "./usersData";

const getCurrentUser = http.get(USERS_ME_URL, () => {
  return HttpResponse.json(currentUser);
});

const usersHandlers: RequestHandler[] = [getCurrentUser];

export { usersHandlers };
