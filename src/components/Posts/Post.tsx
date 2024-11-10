import type { Post as PostType, User } from "../../types";
type PostProps = PostType & {
  user?: User;
  onToggleLike: (postId: string) => void;
  onDeletePost: (postId: string) => void;
};

function getAuthor(post: PostType, user?: User): string {
  if (post.authorId === user?.id) {
    return "You";
  }
  if (!post.author) {
    return "Inactive user";
  }
  return post.author;
}

export function Post({
  user,
  onDeletePost,
  onToggleLike,
  ...props
}: PostProps) {
  return (
    <article className="flex flex-col gap-2">
      <h3 className="font-medium">{getAuthor(props, user)} wrote:</h3>
      <p>{props.text}</p>
      <div className="flex gap-2 my-2">
        <button
          className="flex gap-2 border border-solid px-2 py-1 cursor-pointer rounded hover:shadow"
          onClick={() => onToggleLike(props.id)}
          aria-label={props.liked ? "Remove like" : "Like this post"}
          title={props.liked ? "Remove like" : "Like this post"}
        >
          <span className={props.liked ? "scale-125" : "grayscale"}>👍</span>
          <span>
            {props.likes ?? 0} <span className="sr-only"> likes</span>
          </span>
        </button>
        {props.authorId === user?.id && (
          <button
            className="border border-solid px-2 py-1 cursor-pointer rounded hover:shadow"
            onClick={() => onDeletePost(props.id)}
            aria-label="Delete post"
            title="Delete post"
          >
            🗑️
          </button>
        )}
      </div>
    </article>
  );
}
