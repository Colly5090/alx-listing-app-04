import Link from "next/link";
import { useState } from "react";
import dayjs from "dayjs";

const BookingSection: React.FC<{ price: number; id?: string }> = ({ price, id }) => {
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");

    const totalNights = checkIn && checkOut
        ? Math.ceil(dayjs(checkOut).diff(dayjs(checkIn), "hour") / 24)
        : 0;

    const totalPrice = totalNights > 0 ? price * totalNights : 0;

    const today = dayjs().format("YYYY-MM-DD");

    return (
        <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold">${price}/night</h3>
            <div className="mt-4">
                <label>Check-in</label>
                <input
                    type="date"
                    value={checkIn}
                    min={today}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="border p-2 w-full mt-2" />
            </div>
            <div className="mt-4">
                <label>Check-out</label>
                <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="border p-2 w-full mt-2" />
            </div>

            {/* Total payment */}
            <div className="mt-4 flex justify-between">
                <p>{totalNights} Nights</p>
                <p>Total payment: <strong>${totalPrice}</strong></p>
            </div>

            {/* Reserve button */}
            <Link href={{
                pathname: "/booking",
                query: { id }
            }}>
                <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md" disabled={totalNights <= 0}>Reserve now</button>
            </Link>
        </div>
    );
};

export default BookingSection;