import { User } from "../../types";
import { CreatePost } from "./CreatePost";
import { Post } from "./Post";
import { usePosts } from "./usePosts";

type PostsListProps = {
  user?: User;
};

export function PostsList({ user }: PostsListProps) {
  const { posts, addPost, toggleLike, deletePost } = usePosts();

  return (
    <div className="flex flex-col gap-6">
      <CreatePost addPost={addPost} />
      <hr />
      {posts.map((p) => (
        <Post
          key={p.id}
          {...p}
          user={user}
          onToggleLike={toggleLike}
          onDeletePost={deletePost}
        />
      ))}
    </div>
  );
}
