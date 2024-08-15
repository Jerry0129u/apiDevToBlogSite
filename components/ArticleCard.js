import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";

export function ArticleCard({ article }) {

  const tags = Array.isArray(article.tag_list) ? article.tag_list.slice(0, 1) : [];

  return (
    <div
      key={article.id}
      className="card bg-white w-[392px] h-[488px] border-zinc-300 border-[1px]"
    >
      <div className="card-body p-4">
    
        <Image
          src={article.social_image}
          alt="Social Image"
          width={360}
          height={240}
          className="aspect-video object-cover bg-slate-400 rounded-md"
        />

    
        <div className="mt-6 mb-4 flex gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="bg-indigo-100 text-indigo-500 px-2 py-1 rounded-md">
              {tag}
            </span>
          ))}
        </div>

  
        <Link
          href={article.path}
          target="_blank"
          className="font-[600] text-[24px] leading-7 text-gray-900"
        >
          {article.title}
        </Link>

      
        <div className="flex items-center gap-3 mt-4">
          <Image
            src={article.user.profile_image_90} 
            alt={article.user.name}
            width={50}
            height={50}
            className="w-9 h-9 rounded-full" 
          />
          <div className="flex gap-5">
            <div className="font-[500] text-[14px] leading-5 text-zinc-500">{article.user.name}</div>
            <div className="font-[400] text-[14px] leading-5 text-zinc-500">
              {dayjs(article.published_at).format("MMMM D, YYYY")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
