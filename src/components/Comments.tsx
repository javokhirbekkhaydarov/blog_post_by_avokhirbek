import Link from "next/link";
import { Post } from "@/types/Post";
async function Comments() {
  const endpoint = process.env.comments;
    const res = await fetch(`${endpoint}`);
  const comments = await res.json();

  return (
    <div>

  {comments.slice(0, 6).map((comment: Post) => (
             <article className="p-6 pl-0  mb-1 lg:ml-12 text-base bg-white rounded-lg dark:bg-gray-900">
        <footer className="flex justify-between items-center mb-2">
            <div className="flex items-center">
                <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold"><img
                        className="mr-2 w-6 h-6 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                        alt="Jese Leos" />{comment.name}  </p>
           
            </div>
          
        </footer>
        <p className="text-gray-500 dark:text-gray-400">{comment.body}</p>
        <hr className="mt-3"/>  
    </article>
            ))}
     
                    
    </div>
  );
}

export default Comments;
