import { Post } from "@/types/Post";

export default function PostDetail(post: Post) {
  return (
    <main className="pt-8 pb-16 lg:pt-16 lg:pb-24  antialiased">
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
        <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header className="mb-4 lg:mb-6 not-format">
            <address className="flex items-center mb-6 not-italic">
              <div className="inline-flex items-center mr-3 text-sm text-gray-900 ">
                <div>
                  <a
                    href="#"
                    rel="author"
                    className="text-xl font-bold text-gray-900"
                  >
                    {post.title}
                  </a>
                </div>
              </div>
            </address>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl">
              {post.body}
            </h1>
          </header>
        </article>
      </div>
    </main>
  );
}
