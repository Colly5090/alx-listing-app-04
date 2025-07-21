import { Button } from "@/interfaces"

const Pill: React.FC<Button> = ({ label }) => {
    return (
        <button className="px-4 py-2 rounded-full bg-white text-gray-700 border border-gray-300">
            {label}
        </button>
    )
}

export default Pill;