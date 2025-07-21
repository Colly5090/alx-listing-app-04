import Image from "next/image"
import VECTOR_LOGO from "@/public/assets/images/Vector.png"
import ROOM from "@/public/assets/icons/Layer 48.png"
import MASION from "@/public/assets/icons/mansion 1.png"
import COUNTRYSIDE from "@/public/assets/icons/farm 1.png"
import VILA from "@/public/assets/icons/villa 1.png"
import TROPICAL from "@/public/assets/icons/palm-tree 1.png"
import SEARCH from "@/public/assets/icons/Frame 22.png"
import SCHOOL from "@/public/assets/icons/Case Minimalistic.svg"

const Header: React.FC = () => {
    return (
        <>
            <aside className="bg-green-500 flex items-center justify-center space-x-4 py-2">
                <Image src={SCHOOL} height={30} width={30} alt="annoucement" />
                <p className="text-white text-center font-bold">Overseas trip? Get the latest information on travel guides</p>
                <button type="button" className="rounded-full bg-black text-white p-2 text-center">More Info</button>
            </aside>
            <header className="bg-white shadow-md py-4 w-full">
                <div className="flex items-center justify-between p-4">
                    {/* Logo */}
                    <Image src={VECTOR_LOGO} alt="page logo" height={70} width={70} />
                    <div className="flex items-center rounded-full border px-4 py-2 shadow-md mx-auto max-w-auto">
                        <div className="flex flex-col flex-[3] pr-4">
                            <label htmlFor="location" className="text-sm font-semibold">Location</label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                placeholder="Search for destination"
                                className="w-full focus:outline-none bg-transparent"
                            />
                        </div>
                        <div className="flex flex-col flex-1 px-4 border-l">
                            <label htmlFor="checkin" className="text-sm font-semibold">Check in</label>
                            <input
                                type="date"
                                id="checkin"
                                name="checkin"
                                placeholder="Add date"
                                className="w-full focus:outline-none bg-transparent"
                            />
                        </div>
                        <div className="flex flex-col flex-1 px-4 border-l">
                            <label htmlFor="checkout" className="text-sm font-semibold">Check out</label>
                            <input
                                type="date"
                                id="checkout"
                                name="checkout"
                                placeholder="Add date"
                                className="w-full focus:outline-none bg-transparent"
                            />
                        </div>
                        <div className="flex flex-col flex-1 px-4 border-l">
                            <label htmlFor="people" className="text-sm font-semibold">People</label>
                            <input
                                type="text"
                                id="people"
                                name="people"
                                placeholder="Add guest"
                                className="w-full focus:outline-none bg-transparent"
                            />
                        </div>
                        <button type="submit" className="flex-1">
                            <Image src={SEARCH} alt="search icom" height={10} width={50} />
                        </button>
                    </div>
                    <div className="flex gap-2">
                        <button className="bg-green-700 text-white border rounded-full p-4">Sign in</button>
                        <button className="border rounded-full p-4">Sign up</button>
                    </div>
                </div>
                <hr className="w-full" />
                <div className="flex justify-start items-start p-2">
                    <nav className="overflow-x-auto no-scrollbar">
                        <ul className="flex justify-between space-x-10">
                            <li className="flex flex-col items-center text-center">
                                <Image src={ROOM} alt="masion type" height={40} width={40} />
                                <span className="mt-2 text-sm font-medium text-gray-700">Room</span>
                            </li>
                            <li className="flex flex-col items-center text-center">
                                <Image src={MASION} alt="masion type" height={40} width={40} />
                                <span className="mt-2 text-sm font-medium text-gray-700">Mansion</span>
                            </li>
                            <li className="flex flex-col items-center text-center">
                                <Image src={COUNTRYSIDE} alt="countryside type" height={40} width={40} />
                                <span className="mt-2 text-sm font-medium text-gray-700">Countryside</span>
                            </li>
                            <li className="flex flex-col items-center text-center">
                                <Image src={VILA} alt="vila type" height={40} width={40} />
                                <span className="mt-2 text-sm font-medium text-gray-700">Villa</span>
                            </li>
                            <li className="flex flex-col items-center text-center">
                                <Image src={TROPICAL} alt="tropical type" height={40} width={40} />
                                <span className="mt-2 text-sm font-medium text-gray-700">Tropical</span>
                            </li>
                            <li className="flex flex-col items-center text-center">
                                <Image src="/assets/icons/key-chain 1.png" alt="masion type" height={40} width={40} />
                                <span className="mt-2 text-sm font-medium text-gray-700">New</span>
                            </li>
                            <li className="flex flex-col items-center text-center">
                                <Image src="/assets/icons/swimming-pool 1.png" alt="masion type" height={40} width={40} />
                                <span className="mt-2 text-sm font-medium text-gray-700">Amazing pool</span>
                            </li>
                            <li className="flex flex-col items-center text-center">
                                <Image src="/assets/icons/vacations 1.png" alt="countryside type" height={40} width={40} />
                                <span className="mt-2 text-sm font-medium text-gray-700">Beach house</span>
                            </li>
                            <li className="flex flex-col items-center text-center">
                                <Image src="/assets/icons/island (1) 1.png" alt="vila type" height={40} width={40} />
                                <span className="mt-2 text-sm font-medium text-gray-700">Island</span>
                            </li>
                            <li className="flex flex-col items-center text-center">
                                <Image src="/assets/icons/tent 1.png" alt="tropical type" height={40} width={40} />
                                <span className="mt-2 text-sm font-medium text-gray-700">Camping</span>
                            </li>
                            <li className="flex flex-col items-center text-center">
                                <Image src="/assets/icons/apartment 1.png" alt="vila type" height={40} width={40} />
                                <span className="mt-2 text-sm font-medium text-gray-700">Apartment</span>
                            </li>
                            <li className="flex flex-col items-center text-center">
                                <Image src="/assets/icons/home 1.png" alt="tropical type" height={40} width={40} />
                                <span className="mt-2 text-sm font-medium text-gray-700">House</span>
                            </li>
                            <li className="flex flex-col items-center text-center">
                                <Image src="/assets/icons/cottage 1.png" alt="masion type" height={40} width={40} />
                                <span className="mt-2 text-sm font-medium text-gray-700">Lakefront</span>
                            </li>
                            <li className="flex flex-col items-center text-center">
                                <Image src="/assets/icons/barn 1.png" alt="masion type" height={40} width={40} />
                                <span className="mt-2 text-sm font-medium text-gray-700">Farm house</span>
                            </li>
                            <li className="flex flex-col items-center text-center">
                                <Image src="/assets/icons/treehouse (1) 1.png" alt="countryside type" height={40} width={40} />
                                <span className="mt-2 text-sm font-medium text-gray-700">Treehouse</span>
                            </li>
                            <li className="flex flex-col items-center text-center">
                                <Image src="/assets/icons/cabin 1.png" alt="vila type" height={40} width={40} />
                                <span className="mt-2 text-sm font-medium text-gray-700">Cabins</span>
                            </li>
                            <li className="flex flex-col items-center text-center">
                                <Image src="/assets/icons/castle-tower 1.png" alt="tropical type" height={40} width={40} />
                                <span className="mt-2 text-sm font-medium text-gray-700">Castle</span>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;