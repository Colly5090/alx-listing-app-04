import PropertyCard from "@/components/common/Card";
import Pill from "@/components/common/Pill";
import { HERO_BG } from "@/constants";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import Image from "next/image";
import Link from "next/link";


const Home: React.FC = () => {
  const filters = ["All", "Top Villa", "Free Reschedule", "Book Now, Pay later", "Self CheckIn", "Instant Book"]

  return (
    <>
      <section className="relative h-screen w-full mt-6">
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
          <Image
            src={HERO_BG}
            alt="Luxury stays background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-white text-7xl font-extrabold max-w-2xl">
              Find your favorite place here!
            </h1>
            <p className="mt-4 text-white text-lg max-w-lg font-medium">
              The best prices for over 2 million properties worldwide.
            </p>
          </div>
        </div>
      </section>
      <section>
        <nav className="flex justify-between items-center mt-2 p-2">
          <div className="space-x-4">
            {filters.map((filter) => (
              <Pill label={filter} key={filter} />
            ))}
          </div>
          <div className="space-x-4">
            <Pill label="Filter" />
            <Pill label="Sort by: Highest price" />
          </div>
        </nav>
      </section>
      <section className="grid grid-cols-3 gap-6 mt-4 p-4">
        {PROPERTYLISTINGSAMPLE.map((prop, idx) => (
          <Link href={`/property/${prop.name}`} key={idx}>
            <PropertyCard property={prop} />
          </Link>
        ))}
      </section>
    </>
  )
}

export default Home;