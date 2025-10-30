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

export const products: Product[] = [
    {
        id: "dfgdf-dsgdfgh-dfh",
        name: "Wireless Headphones",
        description: "High-quality wireless headphones with noise cancellation. All-day comfort and superior sound. With long-lasting battery life. Perfect for music lovers and professionals. Experience immersive sound without the hassle of wires.",
        originalprice: 150,
        offerprice: 120,
        rating: 4.5,
        category: "Gadgets",
        imageUrl1: "/product-images/headphones1.jpg",
        imageUrl2: "/product-images/headphones2.jpg",
        imageUrl3: "/product-images/headphones3.jpg",
        imageUrl4: "/product-images/headphones4.jpg",
    },
    {
        id: "sdgsdfgh-sdgsgh-sdg",
        name: "Smartwatch",
        description: "Stylish smartwatch with fitness tracking features. Stay connected on the go with notifications and apps. Monitor your health with heart rate and sleep tracking. Compatible with both iOS and Android devices. Perfect for fitness enthusiasts and tech-savvy individuals. ",
        originalprice: 200,
        offerprice: 180,    
        rating: 4.0,
        category: "Wearables",
        imageUrl1: "/product-images/smartwatch1.jpg",
        imageUrl2: "/product-images/smartwatch2.jpg",
        imageUrl3: "/product-images/smartwatch3.jpg",
        imageUrl4: "/product-images/smartwatch4.jpg",   
    },
    {
        id: "ryery-sdgsdg-xccb",
        name: "Gaming Laptop",
        description: "Powerful gaming laptop with high-end graphics card. Experience smooth gameplay and stunning visuals. Equipped with fast processor and ample RAM for multitasking. Perfect for gamers and content creators. Sleek design with customizable RGB keyboard.",
        originalprice: 1200,
        offerprice: 1100,   
        rating: 4.8,
        category: "Computers",
        imageUrl1: "/product-images/laptop1.jpg",
        imageUrl2: "/product-images/laptop2.jpg",
        imageUrl3: "/product-images/laptop3.jpg",
        imageUrl4: "/product-images/laptop4.jpg",   
    },
    {
        id: "asdasd-asdasd-asdas",
        name: "4K Monitor",
        description: "Ultra HD 4K monitor with vibrant colors and sharp details. Perfect for gaming, design, and productivity. Features multiple connectivity options including HDMI and DisplayPort. Sleek and modern design with adjustable stand for ergonomic viewing.",
        originalprice: 400,
        offerprice: 350,
        rating: 4.3,
        category: "Accessories",
        imageUrl1: "/product-images/monitor1.jpg",
        imageUrl2: "/product-images/monitor2.jpg",
        imageUrl3: "/product-images/monitor3.jpg",
        imageUrl4: "/product-images/monitor4.jpg",   
    },
    {
        id: "qweqwe-qweqwe-qwe",
        name: "Bluetooth Speaker",
        description: "Portable Bluetooth speaker with deep bass and clear sound. Compact design for on-the-go music. Long battery life for extended playtime. Water-resistant for outdoor use. Perfect for parties, picnics, and travel.",
        originalprice: 80,
        offerprice: 65,
        rating: 4.1,
        category: "Gadgets",
        imageUrl1: "/product-images/speaker1.jpg",
        imageUrl2: "/product-images/speaker2.jpg",
        imageUrl3: "/product-images/speaker3.jpg",
        imageUrl4: "/product-images/speaker4.jpg",
    },
    {
        id: "zxcvbn-zxcvbn-zxcv",
        name: "Fitness Tracker",
        description: "Lightweight fitness tracker with heart rate monitoring. Track your steps, calories, and sleep patterns. Water-resistant design for all-day wear. Compatible with iOS and Android devices. Perfect for fitness enthusiasts looking to monitor their health and activity levels.",
        originalprice: 100,
        offerprice: 85,
        rating: 4.2,
        category: "Wearables",
        imageUrl1: "/product-images/fitnesstracker1.jpg",
        imageUrl2: "/product-images/fitnesstracker2.jpg",
        imageUrl3: "/product-images/fitnesstracker3.jpg",
        imageUrl4: "/product-images/fitnesstracker4.jpg",
    },
    {
        id: "plmokn-plmokn-plmok",
        name: "Digital Camera",
        description: "Compact digital camera with high-resolution image capture. Features optical zoom and image stabilization. Ideal for photography enthusiasts and travelers. Easy-to-use interface with various shooting modes. Capture stunning photos and videos on the go.",
        originalprice: 500,
        offerprice: 450,
        rating: 4.6,
        category: "Gadgets",
        imageUrl1: "/product-images/camera1.jpg",
        imageUrl2: "/product-images/camera2.jpg",
        imageUrl3: "/product-images/camera3.jpg",
        imageUrl4: "/product-images/camera4.jpg",
    },
    {
        id: "iuytre-iuytre-iuyt",  
        name: "E-Reader",
        description: "Lightweight e-reader with a glare-free display for reading. Store thousands of books and access a vast library. Long battery life for weeks of reading. Adjustable font sizes and built-in light for comfortable reading anytime, anywhere.",
        originalprice: 120, 
        offerprice: 100,
        rating: 4.4,
        category: "Gadgets",
        imageUrl1: "/product-images/ereader1.jpg",
        imageUrl2: "/product-images/ereader2.jpg",
        imageUrl3: "/product-images/ereader3.jpg",
        imageUrl4: "/product-images/ereader4.jpg",
    },
    {
        id: "bnmtyu-bnmtyu-bnmty",
        name: "Smart Home Hub",
        description: "Central hub for controlling smart home devices. Compatible with various smart lights, thermostats, and security systems. Easy setup and user-friendly app for remote control. Voice assistant integration for hands-free operation. Enhance your home automation experience.",
        originalprice: 180,
        offerprice: 150,
        rating: 4.0,
        category: "Gadgets",
        imageUrl1: "/product-images/smarthomehub1.jpg",
        imageUrl2: "/product-images/smarthomehub2.jpg",
        imageUrl3: "/product-images/smarthomehub3.jpg",
        imageUrl4: "/product-images/smarthomehub4.jpg",
    },
    {
        id: "qazwsx-qazwsx-qazw",
        name: "VR Headset",
        description: "Immersive VR headset for gaming and virtual experiences. High-resolution display and wide field of view. Comfortable design for extended use. Compatible with various VR platforms and games. Step into new worlds and experience gaming like never before.",
        originalprice: 300,
        offerprice: 250,
        rating: 4.7,
        category: "Gadgets",
        imageUrl1: "/product-images/vrheadset1.jpg",
        imageUrl2: "/product-images/vrheadset2.jpg",
        imageUrl3: "/product-images/vrheadset3.jpg",
        imageUrl4: "/product-images/vrheadset4.jpg",
    }
];