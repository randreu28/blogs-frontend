import { useState } from "react";
import type { BlogType } from "../lib/types";
import Heart from "./Heart";
import { updateBlog } from "../lib/actions";
import useAuth from "../lib/hooks/useAuth";
import { toast } from "sonner";

type Props = {
  blog: BlogType;
};

export default function Blog({ blog }: Props) {
  const [isHidden, setIsHidden] = useState<boolean>(true);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const user = useAuth()!;
  function handleLike() {
    setIsLiked(!isLiked);
    const res = updateBlog(
      {
        id: blog.id,
        author: blog.author,
        likes: isLiked ? blog.likes : blog.likes + 1,
        title: blog.title,
        url: blog.url,
      },
      user.token,
    );

    toast.promise<Awaited<typeof res>>(res, {
      error: "Something went wrong. Please try again later",
      loading: "Loading...",
      success: "Blog updated succesfully!",
    });
  }

  return (
    <div className="space-y-4 py-3">
      <div className="flex items-center gap-3">
        <h2 className="text-xl">{blog.title}</h2>
        <button
          onClick={() => setIsHidden(!isHidden)}
          className="text-xs text-blue-500 underline"
        >
          See {isHidden ? "more" : "less"}
        </button>
      </div>
      {!isHidden && (
        <div className="space-y-2 text-sm text-gray-500">
          <p>
            <b>Author: </b>
            {blog.author}
          </p>
          <p>
            <b>Url: </b>
            {blog.url}
          </p>
          <button onClick={handleLike} className="flex items-center gap-1">
            <Heart isActive={isLiked} />
            {isLiked ? blog.likes + 1 : blog.likes}
          </button>
        </div>
      )}
    </div>
  );
}
