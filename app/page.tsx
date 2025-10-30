import FooterComp from "@/components/footer";
import NewsLetterComp from "@/components/news-letter";
import ProductListCard from "@/components/product-list-card";
import SectionHeading from "@/components/section-heading";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { products } from "@/lib/product-data";
import InputCb from "@/components/base-components/input";

export default function Home() {
  return (
    <div>
      <main >
        {/* latest news */}
        <NewsLetterComp />

        {/* latest products */}
        <div className="mt-4">
          <SectionHeading heading="Latest Products" subheading="" />
          <Carousel className="w-full pt-5" opts={{loop: true,}}>
            <CarouselContent>
              {
                products.map(product => (
                  <CarouselItem className="basis-1/5">
                    <ProductListCard product={product} />
                  </CarouselItem>
                ))
              }
            </CarouselContent>
            <CarouselNext className="absolute right-4"/>
            <CarouselPrevious className="absolute left-4"/>
          </Carousel>
        </div>

        {/* subscribe to news letter */}
        <div className="flex flex-col items-center my-40">
            <h1 className="text-3xl font-semibold">Subscribe to our News Letter</h1>
            <p className="text-sm font-regular mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, metus sit amet dictum accumsan</p>
            <div className="mt-6 flex justify-center items-center w-full">
              <InputCb classname="rounded-none w-[30%]" placeholder="Enter your email id"/>
              <button className="w-fit p-2 px-6 text-white hover:cursor-pointer text-sm font-medium bg-rose-500">Subscribe</button>
            </div>
        </div>

        {/* footer */}
        <div className="mt-10">
          <FooterComp />
        </div>
      </main>
    </div>
  );
}
