export type Post = {
  id: string;
  authorId: string;
  author?: string;
  text: string;
  liked: boolean;
  likes: number;
};

export type User = {
  id: string;
  displayName?: string;
};
