import { useState } from "react";
import useAuth from "../lib/hooks/useAuth";
import { postNewBlog } from "../lib/actions";
import { toast } from "sonner";

export default function NewBlogForm() {
  const [isHidden, setIsHidden] = useState<boolean>(true);
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const user = useAuth()!;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const res = postNewBlog({ title, author, url }, user.token);

    toast.promise<Awaited<typeof res>>(res, {
      loading: "Loading...",
      error: "Something went wrong. Please try again",
      success: "Blog added succesfully! Reload to see the changes",
    });
    setIsHidden(false);
  }

  if (isHidden) {
    return (
      <button
        onClick={() => setIsHidden(!isHidden)}
        className="rounded bg-blue-300 px-2 py-1 text-sm"
      >
        New blog
      </button>
    );
  }
  return (
    <form onSubmit={handleSubmit} className="flex max-w-xs flex-col space-y-2">
      <label>Title</label>
      <input
        name="Title"
        value={title}
        onChange={({ target }) => setTitle(target.value)}
        className="rounded"
      />

      <label>Author</label>
      <input
        name="Author"
        value={author}
        onChange={({ target }) => setAuthor(target.value)}
        className="rounded"
      />

      <label>Url</label>
      <input
        name="Url"
        value={url}
        onChange={({ target }) => setUrl(target.value)}
        className="rounded"
      />
      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => setIsHidden(!isHidden)}
          className="rounded bg-red-300 px-2 py-1 text-sm"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={!title || !author || !url}
          className="rounded bg-blue-300 px-2 py-1 text-sm disabled:bg-blue-100"
        >
          Create
        </button>
      </div>
    </form>
  );
}
