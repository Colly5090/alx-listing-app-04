import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import ReviewSection from "@/components/property/ReviewSection";
import { DEFAULTREVIEWS } from "@/constants/index";

export default function PropertyPage() {
    const router = useRouter();
    const { id } = router.query;
    const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);
    const reviews = DEFAULTREVIEWS;


    if (!property) return <p>Property not found</p>;

    return (
        <>
            <PropertyDetail property={property} />
            <ReviewSection reviews={reviews} />
        </>
    );
}