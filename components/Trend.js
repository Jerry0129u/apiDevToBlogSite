import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const pageSize = 4;

export function Trend() {
    const [selectedCategory] = useState("");
    const [loading, setLoading] = useState(false);
    const [articles, setArticles] = useState([]);
    const [ended, setEnded] = useState(false);
    const [page, setPage] = useState(1);

    async function loadInitialArticles() {
        setLoading(true);
        try {
            const response = await fetch(`https://dev.to/api/articles?top=20&tag=${selectedCategory}&per_page=${pageSize}`);
            if (!response.ok) throw new Error('Network response was not ok');
            const tagArticles = await response.json();
            setArticles(tagArticles);
            setPage(2);
            setEnded(tagArticles.length < pageSize);
        } catch (error) {
            console.error("Error fetching articles:", error);
            setArticles([]);
        }
        setLoading(false);
    }

    useEffect(() => {
        loadInitialArticles();
    }, [selectedCategory]);

    return (
        <div className="bg-white">
            <div className="container mx-auto py-20 max-w-[1216px] w-full">
                <h3 className="font-[700] text-[24px] leading-7 mb-7 text-gray-900">Trending</h3>

                <div className="flex gap-5 ml-5 mb-4">
                </div>

                <div className="grid grid-cols-4 gap-6">
                    {articles.map((article) => (
                        <div key={article.id} className="card border border-zinc-300  rounded-[12px] overflow-hidden w-[289px] h-[320px]">
                            <div>
                                <Image
                                    src={article.social_image || "/placeholder-image.png"}
                                    alt={article.title || "Social Image"}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-t-[12px]"
                                />
                            </div>
                            <div className="p-4 flex flex-col z-10 mt-[190px]">
                                <Link
                                    href={article.path}
                                    target="_blank"
                                    className="font-[600] text-[18px] leading-7 text-white"
                                >
                                    {article.title}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
