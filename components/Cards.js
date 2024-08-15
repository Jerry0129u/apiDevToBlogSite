import { useEffect, useState } from "react";
import { ArticleCard } from "@/components/ArticleCard";

const tags = [
    { value: "", name: "All" },
    { value: "webdev", name: "Design" },
    { value: "devchallenge", name: "Travel" },
    { value: "productivity", name: "Fashion" },
    { value: "javascript", name: "Technology" },
    { value: "blockchain", name: "Branding" },
];

const pageSize = 9;

export function Cards() {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [loading, setLoading] = useState(false);
    const [articles, setArticles] = useState([]);
    const [ended, setEnded] = useState(false);
    const [page, setPage] = useState(1);

    async function loadInitialArticles() {
        setLoading(true);
        try {
            const response = await fetch(`https://dev.to/api/articles?top=30&tag=${selectedCategory}&per_page=${pageSize}`);
            const tagArticles = await response.json();
            setArticles(tagArticles);
            setPage(2);
            setEnded(tagArticles.length < pageSize); 
        } catch (error) {
            console.error("Error fetching articles:", error);
        }
        setLoading(false);
    }

    async function loadMore() {
        setLoading(true);
        try {
            const response = await fetch(`https://dev.to/api/articles?top=30&tag=${selectedCategory}&per_page=${pageSize}&page=${page}`);
            const newArticles = await response.json();
            setArticles(prevArticles => [...prevArticles, ...newArticles]);
            setPage(prevPage => prevPage + 1);
            if (newArticles.length < pageSize) {
                setEnded(true);
            }
        } catch (error) {
            console.error("Error fetching more articles:", error);
        }
        setLoading(false);
    }

    useEffect(() => {
        loadInitialArticles();
    }, [selectedCategory]);

    return (
        <div className="bg-white">
            <div className="container mx-auto py-20 max-w-[1216px] w-full">
                <h3 className="font-[700] text-[24px] leading-7 ml-5 mb-8 text-gray-900">All Blog Posts</h3>
                <div className="flex gap-5 ml-5 mb-4">
                    {tags.map((tag) => (
                        <div
                            key={tag.value}
                            className={`cursor-pointer hover:text-orange-300 font-[700] text-[12px] leading-6 text-zinc-600 ${selectedCategory === tag.value ? "text-orange-600" : ""}`}
                            onClick={() => setSelectedCategory(tag.value)}
                        >
                            {tag.name}
                        </div>
                    ))}
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-4">
                    {articles.map((item) => (
                        <ArticleCard key={item.id} article={item} />
                    ))}
                </div>
                {!ended && (
                    <div className="py-16 text-center w-[123px] h-[48px] rounded-md m-auto">
                        <button
                            disabled={loading}
                            className="btn btn-lg btn-accent bg-white border-zinc-300 hover:bg-white"
                            onClick={loadMore}
                        >
                            {loading && <span className="loading loading-spinner"></span>}
                            <p className="font-[500] text-[14px] leading-6 text-zinc-500">Load more</p>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
