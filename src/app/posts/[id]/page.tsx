import Comments from "@/components/Comments";
import PostDetail from "@/components/PostDetail";
import { Post } from "@/types/Post";
import Link from "next/link";
export default async function Page({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const endpoint = process.env.posts;
  const res = await fetch(endpoint + `/${(await params).id}`);
  const post: Post = await res.json();
  return (
    <div className="p-12 flex items-center justify-center flex-col max-w-screen-xl  m-auto">
      <Link href="/" className="mb-4 flex"> Home</Link>
      
      <PostDetail postId={post.postId} id={post.id} email={post.email} title={post.title}  body={post.body}/>
      <h2 className="text-2xl font-bold mt-4">Comments</h2>
      <Comments />
    </div>
  );
}
