import { useEffect, useState } from "react";
import parse from 'html-react-parser';

export default function Page() {

  const [article, setArticle] = useState();
  const [loading, setLoading] = useState(false);  
  
    useEffect(() => {
      getArticle();
    },[]);
  
    function getArticle () {
      setLoading(true);
      fetch(`https://dev.to/api/article/paul_freeman/mobile-app-landing-page-3cac`)
      .then(response =>  {
        return response.json();
      })
     .then((detail) => {
        setArticle(detail);
        setLoading(false);
      });
    }

    if (!article) return <div>Loading...</div>

  return  (
  <div className="container mx-auto">
    <div>{article.title}</div>
    <div className="prose">{parse(article.body_html)}</div>
  </div>
  );
}
