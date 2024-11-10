import { useCurrentUser } from "./useCurrentUser";
import { PostsList } from "./components/Posts/PostsList";

function App() {
  const user = useCurrentUser();

  return (
    <main className="flex flex-col max-w-[70ch] p-8 gap-8">
      <h1 className="text-3xl">micro bloggler</h1>
      <h2 className="text-xl">
        {user ? `Welcome back, ${user.displayName}` : ""}!
      </h2>
      <PostsList user={user} />
    </main>
  );
}

export default App;
