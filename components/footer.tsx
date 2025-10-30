import { TbAirBalloon } from "react-icons/tb";

const FooterComp = () => {
    return(
        <div className="flex mb-5 justify-between">
            <div className="w-[60%]">
                <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-rose-500 rounded-full flex flex-col items-center justify-center">
                        <TbAirBalloon />
                    </div>
                    <h1 className="text-md md:text-xl text-blue-950 uppercase font-bold">
                        TechOven
                    </h1>
                </div>
                <p className="mt-4 text-xs text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, metus sit amet dictum accumsan, lacus arcu viverra justo, 
                    at finibus nulla purus in risus. Integer vel purus non enim malesuada ultricies. Maecenas mattis eros vel justo aliquam, id ultrices nisi tincidunt. 
                    Donec congue libero sed ligula posuere, non tincidunt neque tempor. Nulla facilisi. Vestibulum viverra justo sit amet suscipit sodales. 
                    Aenean vel urna ac nisl condimentum tincidunt in vel nisl. Suspendisse ac sodales nunc</p>
            </div>
            <div>
                <h2 className="text-sm font-bold mb-5">Company</h2>
                <div className="flex flex-col text-xs font-regular">
                    <p>Home</p>
                    <p>About Us</p>
                    <p>Contact Us</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
            <div>
                <h2 className="text-sm font-bold mb-5">Get In Touch</h2>
                <div className="flex flex-col text-xs font-regular">
                    <p>+1-2564-856963</p>
                    <p>contact@techocensupport.com</p>
                </div>
            </div>
        </div>
    )
}

export default FooterComp;