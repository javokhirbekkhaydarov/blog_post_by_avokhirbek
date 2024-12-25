import { Post } from "@/types/Post";
import localFont from "next/font/local";

const nunito = localFont({
  src: "../app/fonts/Nunito-Medium.ttf",
  variable: "--font-nunito",
  weight: "100 900",
});
const geistSans = localFont({
  src:"../app/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
export default function PostDetail(post: Post) {
  return (
      <div        className={`${geistSans.variable} ${nunito.variable} antialiased `}>
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
                    <span className="text-sm"> 1 days ago</span>
                  </div>
                  <h2 className=" font-nunito mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <p className="font-nunito">{post.title}</p>
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
                  
                  </div>
                </article>
      </div>
  );
}
