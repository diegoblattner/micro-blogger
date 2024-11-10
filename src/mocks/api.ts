import { setupWorker } from "msw/browser";
import { postsHandlers } from "./postsHandler";
import { usersHandlers } from "./usersHandler";

export function startMockAPI() {
  const worker = setupWorker(...postsHandlers, ...usersHandlers);

  return worker.start();
}
