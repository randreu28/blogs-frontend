import type { BlogType } from "../lib/types";

type Props = {
  blog: BlogType;
};

export default function Blog({ blog }: Props) {
  return (
    <div className="space-y-1 p-5">
      <h2 className="text-xl">{blog.title}</h2>
      <p className="text-sm text-gray-500">
        <b>Author: </b>
        {blog.author}
      </p>
    </div>
  );
}
