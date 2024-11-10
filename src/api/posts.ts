import {
  POSTS_SINGLE_URL,
  POSTS_TOGGLE_LIKE_URL,
  POSTS_URL,
} from "../constants";
import type { Post } from "../types";

export async function fetchPosts(): Promise<Post[]> {
  const response = await fetch(POSTS_URL);
  const data: Post[] = await response.json();
  return data;
}

export async function createNewPost(post: { text: string }): Promise<boolean> {
  const response = await fetch(POSTS_URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(post),
  });
  return response.ok;
}

export async function toggleLike(postId: string): Promise<boolean> {
  const response = await fetch(
    POSTS_TOGGLE_LIKE_URL.replace(":postId", postId),
    {
      method: "POST",
    },
  );
  return response.ok;
}

export async function deletePost(postId: string): Promise<boolean> {
  const response = await fetch(POSTS_SINGLE_URL.replace(":postId", postId), {
    method: "DELETE",
  });
  return response.ok;
}
