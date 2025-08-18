import { PropertyProps } from "@/interfaces/index";
import BookingSection from "@/components/property/BookingSection";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold">{property.name}</h1>
            <div className="flex items-center space-x-2 mt-2">
                <span className="text-yellow-500">{property.rating} stars</span>
                <span>{property.address.city}, {property.address.country}</span>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 md:grid-flow-col md:grid-rows-2 gap-4 mt-4">
                <img src={property.image} alt={property.name} className="md:col-span-2 row-span-2 w-full h-60 md:h-full object-cover rounded-lg" />
                {/* Add more images */}
                <img src={property.image} alt={property.name} className="hidden md:block md:col-span-2 w-full h-48 object-cover rounded-lg" />
                <img src={property.image} alt={property.name} className="hidden md:block md:col-span-1 w-full h-48 object-cover rounded-lg" />
                <div className="relative hidden md:block">
                    <img src={property.image} alt={property.name} className="col-span-1 w-full h-48 object-cover rounded-lg" />
                    <div className="absolute inset-0 flex items-end justify-center p-2">
                        <button className="bg-gray-300 text-sm px-4 py-1.5 rounded-full shadow">Show all photos</button>
                    </div>
                </div>
            </div>

            {/* Description */}
            <div className="flex flex-col md:flex-row justify-between space-x-5 mt-8">
                <div className="md:w-2/3">
                    <h2 className="text-2xl font-semibold">Description</h2>
                    <p className="leading-relaxed">{property.description}</p>
                </div>
                <div className="md:w-1/3">
                    <BookingSection price={property.price} id={property.name} />
                </div>
            </div>

            {/* Amenities */}
            <div className="mt-4">
                <h2 className="text-2xl font-semibold">What this place offers</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {property.category.map((amenity, index) => (
                        <li key={index} className="bg-gray-200 p-2 rounded-md">
                            {amenity}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PropertyDetail;