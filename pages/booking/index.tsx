import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { useRouter } from "next/router";
import Link from "next/link";

export default function BookingPage() {
    const router = useRouter();
    const { id } = router.query;
    const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);

    if (!property) {
        return <p>Property not found</p>;
    }

    const totalNights = 3;
    const bookingDetails = {
        propertyName: property.name,
        propertyImage: property.image,
        price: property.price * totalNights,
        bookingFee: 0.1 * property.price * totalNights,
        totalNights: 3,
        startDate: "24 August 2024",
    };

    return (
        <div className="container mx-auto p-6">
            <div className="bg-gray-100 p-2">
                <Link href={"/"} className="inline-block">
                    <div className="flex flex-col items-start">
                        <span className="flex items-center text-green-500 font-medium mb-1">
                            ← Booking
                        </span>
                        <div className="w-full border-b-2 border-green-500"></div>
                    </div>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                <div className="order-2 md:order-1">
                    <BookingForm />
                </div>
                <div className="order-1 md:order-2">
                    <OrderSummary bookingDetails={bookingDetails} />
                </div>
            </div>
        </div>
    );
}