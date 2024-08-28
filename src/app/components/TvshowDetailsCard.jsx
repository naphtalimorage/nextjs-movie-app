import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";


export default function TvshowDetailsCard({tvshowpath,tvshowname,tvshowfirstonair,tvshowoverview}) {
  
  return (
      <div className="flex justify-center items-center min-h-screen">
        <Card className="shadow-2xl h-[32rem] w-[73rem] flex-row">
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-2/5 shrink-0 rounded-r-none"
          >
            <Image src={`https://image.tmdb.org/t/p/w500${tvshowpath}`}
              width={500} height={500} alt={`${tvshowname} Poster`}
              priority
              className="h-full w-full object-cover"
            />

          </CardHeader>
          <CardBody>
            <Typography variant="h4" color="black" className="mb-4 uppercase">
              {tvshowname}
            </Typography>
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Release Date: {tvshowfirstonair}
            </Typography>
            <Typography color="gray" className="mb-8 font-normal w-[580px]">
              {tvshowoverview}
            </Typography>
            <a href="#" className="inline-block">
              <Button variant="text" className="flex items-center gap-2">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </a>
          </CardBody>
        </Card>
      </div>

  );
}