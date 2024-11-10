import { http, HttpResponse, RequestHandler } from "msw";
import { nanoid } from "nanoid";
import {
  POSTS_SINGLE_URL,
  POSTS_TOGGLE_LIKE_URL,
  POSTS_URL,
} from "../constants";
import { allPosts } from "./postsData";
import { currentUser } from "./usersData";
import type { Post } from "../types";

const postsHandler = http.get(POSTS_URL, () => {
  return HttpResponse.json(allPosts);
});

const newPostsHandler = http.post(POSTS_URL, async ({ request }) => {
  // Read the intercepted request body as JSON.
  const { text } = (await request.json()) as { text: string };

  // Push the new post to the array of all posts.
  const newPost: Post = {
    id: nanoid(),
    author: currentUser.displayName,
    authorId: currentUser.id,
    likes: 0,
    liked: false,
    text,
  };

  allPosts.unshift(newPost);

  // Don't forget to declare a semantic "201 Created"
  // response and send back the newly created post!
  return HttpResponse.json(newPost, { status: 201 });
});

const toggleLikeHandler = http.post(
  POSTS_TOGGLE_LIKE_URL,
  async ({ params }) => {
    const post = allPosts.find((p) => p.id === params.postId);
    if (post) {
      post.liked = !post.liked; // toggle like
      post.likes = (post.likes ?? 0) + (post.liked ? 1 : -1); // update counter
    }

    return HttpResponse.json(post);
  },
);

const deleteHandler = http.delete(POSTS_SINGLE_URL, async ({ params }) => {
  const postIndex = allPosts.findIndex((p) => p.id === params.postId);

  if (postIndex > -1) {
    if (allPosts[postIndex].authorId !== currentUser.id) {
      return HttpResponse.json({ error: "Not Authorized" }, { status: 401 });
    }

    allPosts.splice(postIndex, 1);
  }

  return HttpResponse.json();
});

const postsHandlers: RequestHandler[] = [
  postsHandler,
  newPostsHandler,
  toggleLikeHandler,
  deleteHandler,
];

export { postsHandlers };
