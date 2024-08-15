import { useEffect, useState } from "react";
import parse from "html-react-parser";
import { useRouter } from "next/router";
import dayjs from "dayjs";
import Image from "react-bootstrap/Image"; 

export default function Page() {
  const [article, setArticle] = useState(null); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); 
  const router = useRouter();
  const { author, slug } = router.query;

  useEffect(() => {
    if (router.isReady) {
      getArticle();
    }
  }, [router.isReady]);

  async function getArticle() {
    setLoading(true);
    try {
      const response = await fetch(`https://dev.to/api/articles/${author}/${slug}`);
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const detail = await response.json();
      setArticle(detail);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>; 
  }

  if (!article) {
    return <div>No article found</div>; 
  }

  return (
    <div className="mt-[100px] mb-[80px] max-w-[796px] w-full mx-auto container">
      <h1 className="font-[600] text-[36px] leading-10 text-gray-900 mb-6">{article.title}</h1>
      <div className="flex mt-6 mb-8 items-center gap-6">
        <Image 
          src={article.user.profile_image_90} 
          alt={article.user.name} 
          width={50} 
          height={50} 
          roundedCircle
        className="w-7 h-7 rounded-3xl"/>
        <div className="font-[500] text-[14px] leading-5 text-zinc-500">{article.user.name}</div>
        <div className="font-[400] text-[14px] leading-5 text-zinc-500">{dayjs(article.published_at).format("MMMM D, YYYY")}</div>
      </div>
      <div className="font-[400] text-[20px] leading-8 text-zinc-700">
        {parse(article.body_html)}
      </div>
    </div>
  );
}
