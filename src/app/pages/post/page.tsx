import Link from "next/link";
import { Post } from "@/types/Post";
async function Posts() {
  const endpoint = process.env.posts;
    const res = await fetch(`${endpoint}`);
  const posts = await res.json();

  return (
    <div className="all_posts p-4  lg:p-12">
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Our Blog
            </h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              We use an agile approach to test assumptions and connect with the
              needs of your audience early and often.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {posts.map((post: Post) => (
              <Link href={`/posts/${encodeURIComponent(post.id)}`}>
                <article
                  key={post.id}
                  className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
                >
                  <div className="flex justify-between items-center mb-5 text-gray-500">
                    <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                      <svg
                        className="mr-1 w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                      </svg>
                      Tutorial
                    </span>
                    <span className="text-sm"> {post.id  + 1} days ago</span>
                  </div>
                  <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <p>{post.title}</p>
                  </h2>
                  <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                  {post.body}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <img
                        className="w-7 h-7 rounded-full"
                        src="https://avatars.githubusercontent.com/u/79502483?v=4"
                        alt="Jese Leos avatar"
                      />
                      <span className="font-medium dark:text-white">
                        Javokhirbek Khaydarov
                      </span>
                    </div>
                    <p
                     
                      className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                    >
                      Read more
                     
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Posts;
