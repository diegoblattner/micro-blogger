import { useCallback, useEffect, useState } from "react";
import {
  createNewPost,
  fetchPosts,
  toggleLike as toggleLikeApi,
  deletePost as deletePostApi,
} from "../../api/posts";
import type { Post } from "../../types";

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [refetchTrigger, setRefetchTrigger] = useState(new Date());

  useEffect(() => {
    fetchPosts().then(setPosts).catch(console.error);
  }, [refetchTrigger]);

  const addPost = useCallback(async (text: string): Promise<boolean> => {
    if (!text) {
      return false;
    }

    const success = await createNewPost({ text });

    if (success) {
      setRefetchTrigger(new Date());
    }

    return success;
  }, []);

  const toggleLike = useCallback(async (postId: string) => {
    const success = await toggleLikeApi(postId);

    if (success) {
      setRefetchTrigger(new Date());
    }
  }, []);

  const deletePost = useCallback(async (postId: string) => {
    const success = await deletePostApi(postId);

    if (success) {
      setRefetchTrigger(new Date());
    }
  }, []);

  return {
    posts,
    addPost,
    toggleLike,
    deletePost,
  };
}
