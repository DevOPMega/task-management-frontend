import { SearchSVG } from "./SVG";

export default function SearchButton() {
    return (
        <div className="bg-white px-2 py-2 flex items-center gap-2 rounded-md">
            <input 
                type="text" 
                className="text-gray-500 w-44 bg-transparent outline-none " 
                placeholder="search.."
            />
            <SearchSVG />
        </div>
    )
}