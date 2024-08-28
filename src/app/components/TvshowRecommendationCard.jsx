import Link from "next/link";
import Image from "next/image";

export default function TvshowRecommendationsCard({ recommendations, limit = 12 }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-5">


            {recommendations &&
                recommendations.slice(0, limit).map(recommendation => (
                    <div key={recommendation.id} className="w-72 h-40">
                        <Link href={`/tvshowlist/${recommendation.id}`}>
                            <Image
                                src={`https://image.tmdb.org/t/p/w500${recommendation.poster_path}`}
                                alt={recommendation.name}
                                priority={false}
                                width={500}
                                height={500}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </Link>
                        <div className="text-black whitespace-nowrap overflow-hidden text-ellipsis">
                            {recommendation.name}
                        </div>
                    </div>
                ))
            }
        </div>
    );
}