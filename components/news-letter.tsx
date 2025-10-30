import { newsletters } from "@/lib/product-data";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Image from "next/image";

const NewsLetterComp = () => {
    return(
        <Carousel className="relative w-full border rounded-lg p-5" opts={{align: "start",loop: true,}}>
            <CarouselContent>
                {
                    newsletters.map(news => (
                        <CarouselItem key={news.id} className="basis-1/1">
                            <div className="p-1 grid grid-cols-2 gap-2 items-center">
                                <div className="flex flex-col ml-15">
                                    <p className="text-xs text-yellow-500">{news.caption}</p>
                                    <h3 className="text-3xl font-bold mt-2">{news.content}</h3>
                                </div>
                                <div className='relative w-[300px] h-[300px] overflow-hidden ml-auto mr-auto'>
                                    <Image src={news.imageUrl} alt={`news letter image id : ${news.id}`} fill={true}/>
                                </div>
                            </div>
                        </CarouselItem>
                    ))
                }
            </CarouselContent>
            <CarouselPrevious className="absolute left-4"/>
            <CarouselNext className="absolute right-4"/>
        </Carousel>
    )
}

export default NewsLetterComp;