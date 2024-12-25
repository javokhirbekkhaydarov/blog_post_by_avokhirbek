import PostDetail from "@/components/PostDetail";
import { Post } from "@/types/Post";
export default async function Page({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const endpoint = process.env.posts;
  const res = await fetch(endpoint + `/${(await params).id}`);
  const post: Post = await res.json();
  return (
    <div>
      <PostDetail title={post.title}  body={post.body}/>
    </div>
  );
}
