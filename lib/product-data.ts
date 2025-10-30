export interface Product {
    id: string;
    name: string;
    description: string;
    originalprice: number;
    offerprice: number;
    rating: number;
    category: string;
    imageUrl1: string;
    imageUrl2: string;
    imageUrl3: string;
    imageUrl4: string;
}

export interface NewsLetter {
    id: string;
    caption: string;
    content: string;
    imageUrl: string;
}

export const newsletters: NewsLetter[] = [
    {
        id: "xddfgh-vsdvs-sdv",
        caption: "Exclusive Deal 40% off",
        content: "Power Meets Elegance - Apple MacBook pro is Here for you!",
        imageUrl: "/newsletter-images/news1.jpg"
    },
    {
        id: "jhgjhf-byhfut-bk",
        caption: "Limited Time Offer 30% off",
        content: "Experience Pure Sound - Your Perfect Headphones Awaits!",
        imageUrl: "/newsletter-images/news2.jpg"
    }
]
