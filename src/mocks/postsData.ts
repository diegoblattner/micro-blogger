import type { Post } from "../types";
import { allUsers } from "./usersData";

export const allPosts: Post[] = [
  {
    id: "1",
    authorId: allUsers[3].id,
    author: allUsers[3].displayName,
    text: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    likes: 54,
    liked: false,
  },
  {
    id: "2",
    authorId: allUsers[2].id,
    author: allUsers[2].displayName,
    text: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    likes: 38,
    liked: false,
  },
  {
    id: "3",
    authorId: allUsers[0].id,
    author: allUsers[0].displayName,
    text: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    likes: 153,
    liked: true,
  },
  {
    id: "4",
    authorId: allUsers[1].id,
    author: allUsers[1].displayName,
    text: "reprehenderit molestiae ut ut quas totam\nnostrum rerum est autem occaecati omnis eligendi",
    likes: 12,
    liked: false,
  },
  {
    id: "5",
    authorId: allUsers[4].id,
    author: allUsers[4].displayName,
    text: "reprehenderit molestiae ut ut quas totam\nnostrum rerum est autem occaecati omnis eligendi",
    likes: 87,
    liked: true,
  },
];
