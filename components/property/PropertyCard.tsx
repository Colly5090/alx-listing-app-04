import Image from "next/image"
import STAR_IMAGE from "@/public/assets/images/star.png"
import Pill from "@/components/common/Pill"
import { PropertyCardProps } from "@/interfaces"

const PropertyCard: React.FC<{ property: PropertyCardProps }> = ({ property }) => {
    return (
        <div className="h-[422px] w-[378.56px] cursor-pointer hover:shadow-md hover:rounded-lg">
            <Image src={property.image ?? "/placeholder.png"} alt={property.name ?? "Property"} width={378.56} height={299.37} className="rounded-lg" />
            <div className="p-2 flex gap-2 mt-2">
                {property.category?.map((cat, idx) => (
                    <Pill label={cat} key={idx} />
                ))}
            </div>
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="font-semibold text-[22px]">{property.name ?? "Unnamed Property"}</h3>
                    <p className="font-medium text=[17px] text-[#929292]">{property.address?.state}, {property.address?.city}, {property.address?.country}</p>
                </div>
                <div className="flex items-center">
                    <Image src={STAR_IMAGE} alt="Rating star" />
                    <p className="font-medium text=[17px] ml-2">{property.rating}</p>
                </div>
            </div>
            <div className="flex justify-between mt-4">
                <p className="text-[22px] font-semibold">{property.price}<span className="text-[14px] text-[#787878]">/n</span></p>
            </div>
        </div>
    )
}

export default PropertyCard;