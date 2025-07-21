import Image from "next/image";
import VECTOR_LOGO from "@/public/assets/icons/Vector 2.png";

const Footer: React.FC = () => {
    return (
        <footer className="text-white">
            <div className="bg-green-600 h-16 w-full"></div>
            <div className="bg-black px-12 py-20">
                <div className="flex flex-row justify-between items-start gap-16">
                    <div className="flex flex-col max-w-lg">
                        <Image
                            src={VECTOR_LOGO}
                            alt="footer logo"
                            width={60}
                            height={60}
                            className="mb-10"
                        />
                        <p className="text-gray-300 leading-relaxed text-sm">
                            ALX is a platform where travelers can discover and book unique,
                            comfortable, and affordable lodging options worldwide. From cozy
                            city apartments and tranquil countryside retreats to exotic
                            beachside villas, ALX connects you with the perfect place to stay
                            for any trip.
                        </p>
                    </div>
                    {/* Explore */}
                    <div className="flex flex-col min-w-[150px]">
                        <h1 className="text-lg font-bold mb-10">Explore</h1>
                        <nav className="space-y-4 text-gray-300 text-sm">
                            <p>Apartments in Dubai</p>
                            <p>Hotels in New York</p>
                            <p>Villa in Spain</p>
                            <p>Mansion in Indonesia</p>
                        </nav>
                    </div>
                    {/* Company */}
                    <div className="flex flex-col min-w-[150px]">
                        <h1 className="text-lg font-bold mb-10">Company</h1>
                        <ul className="space-y-4 text-gray-300 text-sm">
                            <li>About us</li>
                            <li>Blog</li>
                            <li>Career</li>
                            <li>Customers</li>
                            <li>Brand</li>
                        </ul>
                    </div>
                    {/* Help */}
                    <div className="flex flex-col min-w-[150px]">
                        <h1 className="text-lg font-bold mb-10">Help</h1>
                        <nav>
                            <ul className="space-y-4 text-gray-300 text-sm">
                                <li>Support</li>
                                <li>Cancel booking</li>
                                <li>Refunds Process</li>
                            </ul>
                        </nav>
                    </div>
                </div>
                {/* Bottom Bar */}
                <div className="flex flex-row justify-between items-center border-t rounded-lg border-gray-600 mt-20 pt-6 gap-4">
                    <p className="text-gray-400 text-sm text-left">
                        Some hotels require you to cancel more than 24 hours before check-in.
                        Details <a href="#" className="text-green-500 underline"> here</a>.
                    </p>
                    <nav>
                        <ul className="flex justify-between items-center gap-6 text-gray-400 text-sm">
                            <li>Terms of Service</li>
                            <li>Policy service</li>
                            <li>Cookies Policy</li>
                            <li>Partners</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
