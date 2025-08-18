import CancellationPolicy from "./CancellationPolicy";

const BookingForm: React.FC = () => (
    <div className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold mb-6">Contact Detail</h2>
        <form>
            {/* Contact Information */}
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label>First Name</label>
                    <input type="text" className="border p-2 w-full mt-2" />
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" className="border p-2 w-full mt-2" />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                    <label>Email</label>
                    <input type="email" className="border p-2 w-full mt-2" />
                </div>
                <div>
                    <label>Phone Number</label>
                    <input type="text" className="border p-2 w-full mt-2" />
                </div>
            </div>
            <div className="flex items-center space-x-2 mt-2">
                <input type="checkbox" name="messages" id="messages" className="w-4 h-4 accent-green-500" />
                <p className="text-sm">Receive text message update about your booking. Messages rates may apply.</p>
            </div>

            {/* Payment Information */}
            <h2 className="text-xl font-semibold mt-6">Pay with</h2>
            <div className="mt-4">
                <label>Card Number</label>
                <input type="text" className="border p-2 w-full mt-2" />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                    <label>Expiration Date</label>
                    <input type="text" className="border p-2 w-full mt-2" />
                </div>
                <div>
                    <label>CVV</label>
                    <input type="text" className="border p-2 w-full mt-2" />
                </div>
            </div>

            {/* Billing Address */}
            <h2 className="text-xl font-semibold mt-6">Billing Address</h2>
            <div className="mt-4">
                <label>Street Address</label>
                <input type="text" className="border p-2 w-full mt-2" />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                    <label>City</label>
                    <input type="text" className="border p-2 w-full mt-2" />
                </div>
                <div>
                    <label>State</label>
                    <input type="text" className="border p-2 w-full mt-2" />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                    <label>Zip Code</label>
                    <input type="text" className="border p-2 w-full mt-2" />
                </div>
                <div>
                    <label>Country</label>
                    <input type="text" className="border p-2 w-full mt-2" />
                </div>
            </div>
            {/* Cancellation Policy and Ground Rules */}
            <div>
                <CancellationPolicy />
            </div>

            {/* Submit Button */}
            <button className="mt-6 bg-green-500 text-white py-2 px-4 rounded-md w-full">
                Confirm & Pay
            </button>
        </form>
    </div>
);

export default BookingForm;