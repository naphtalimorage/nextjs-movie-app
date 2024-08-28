import Image from "next/image";
import Link from "next/link";

export default function MovieRecommendationsCard({ recommendations, limit = 12 }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-5">
            {recommendations &&
                recommendations.slice(0, limit).map(recommendation => (
                    <div key={recommendation.id} className="w-72 h-40">
                        <Link href={`/moviedetails/${recommendation.id}/`}>
                            <Image
                                src={`https://image.tmdb.org/t/p/w500${recommendation.poster_path}`}
                                alt={recommendation.original_title}
                                priority={false}
                                width={500}
                                height={500}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </Link>
                        <div className="text-black whitespace-nowrap overflow-hidden text-ellipsis">
                            {recommendation.original_title}
                        </div>
                    </div>
                ))
            }
        </div>
    );
}