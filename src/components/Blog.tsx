import { useState } from "react";
import type { BlogType } from "../lib/types";
import Heart from "./Heart";

type Props = {
  blog: BlogType;
};

export default function Blog({ blog }: Props) {
  const [isHidden, setIsHidden] = useState<boolean>(true);

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
          <p className="flex items-center gap-1">
            <Heart />
            {blog.likes}
          </p>
        </div>
      )}
    </div>
  );
}
