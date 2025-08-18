const CancellationPolicy = () => (
    <div className="mt-6">
        <h2 className="text-xl font-semibold">Cancellation policy</h2>
        <p className="mt-2 text-gray-600">
            <span className="text-black font-medium">Free cancellation before Aug 23.</span> Cancel before check-in on Aug 24 for a partial refund.
        </p>

        <h2 className="text-xl font-semibold mt-6">Ground Rules</h2>
        <p>
            We ask every guest to remember a few simple things about what makes a great guest.
        </p>
        <ul className="mt-2 text-gray-600 list-disc list-inside p-2">
            <li>Follow the house rules</li>
            <li>Treat your Host’s home like your own</li>
        </ul>
    </div>
);

export default CancellationPolicy;