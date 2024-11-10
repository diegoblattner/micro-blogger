import { useState } from "react";

type CreatePostProps = {
  addPost: (text: string) => Promise<boolean>;
};

export function CreatePost({ addPost }: CreatePostProps) {
  const [text, setText] = useState("");

  const onSubmitHandler: React.FormEventHandler = (ev) => {
    ev.preventDefault();

    addPost(text).then((success) => {
      if (success) {
        setText("");
      }
    });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <fieldset className="space-y-2">
        <legend>What do you want to share today?</legend>

        <textarea
          name="text"
          value={text}
          onChange={(ev) => setText(ev.target.value)}
          placeholder="Enter your thoughts..."
          className="w-full border border-solid rounded py-1 px-2"
          rows={3}
        ></textarea>

        <input
          type="submit"
          value="Post"
          className="block mx-auto border border-solid rounded py-1 px-2 cursor-pointer w-48 hover:shadow"
        />
      </fieldset>
    </form>
  );
}
