import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import Image from "next/image";

export default function TvshowCastCard({ casts, limit=8 }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {casts &&
                casts.slice(0, limit).map((cast) => (
                    <Card key={cast.id} className="w-72 ">
                        <CardHeader floated={false} className="lg:h-72">
                            <Image
                                src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                                alt={cast.name}
                                width={500}
                                height={500}
                                className="w-full h-full object-cover rounded-t-lg"
                            />
                        </CardHeader>
                        <CardBody className="text-center">
                            <Typography color="gray" className="font-medium">
                                {cast.character}
                            </Typography>
                        </CardBody>
                        
                    </Card>
                ))}
        </div>
    );
}
