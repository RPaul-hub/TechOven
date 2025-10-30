import Image from "next/image";
import Link from "next/link";

function NotFoundPage(){
    return (
        <div>
            <h4>Sorry! page not found</h4>
            <Image src="/no-results.png" alt="not-found" width={500} height={500}></Image>
            <Link href="/products" className="underline hover:cursor-pointer">
                <p>Return to Home</p>
            </Link>
        </div>
    )
}

export default NotFoundPage;