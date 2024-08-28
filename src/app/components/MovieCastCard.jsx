import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import Image from "next/image";

export default function MovieCastCard({ casts, limit = 8 }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {casts &&
                casts.slice(0, limit).map((cast) => (
                    <Card key={cast.cast_id} className="w-72">
                        <CardHeader floated={false} className="h-72">
                            <Image
                                src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                                alt={cast.name}
                                width={500}
                                height={500}
                                className="w-full h-full object-cover rounded-t-lg"
                            />
                        </CardHeader>
                        <CardBody className="text-center">
                            <Typography variant="h6" color="blue-gray" className="mb-2">
                                {cast.name}
                            </Typography>
                            <Typography color="gray" className="font-medium">
                                {cast.department}
                            </Typography>
                        </CardBody>   
                    </Card>
                ))}
        </div>
    );
}
