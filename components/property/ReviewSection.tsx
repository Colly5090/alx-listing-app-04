

const ReviewSection: React.FC<{ reviews: any[] }> = ({ reviews }) => {
    return (
        <div className="mt-8 p-20">
            <h3 className="text-2xl font-semibold mb-4">Reviews</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {reviews.map((review, index) => (
                    <div key={index} className="border-b pb-4 mb-4">
                        <div className="flex items-center">
                            <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full mr-4" />
                            <div>
                                <p className="font-bold">{review.name}</p>
                                <p className="text-yellow-500">{review.rating} stars</p>
                            </div>
                        </div>
                        <p>{review.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewSection;