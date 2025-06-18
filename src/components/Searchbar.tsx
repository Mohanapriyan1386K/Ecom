import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const sampleSuggestions = [
  "Samsung TV",
  "Mi Phone",
  "Realme Watch",
  "Motorola Mobile",
  "Refrigerator",
  "Washing Machine",
  "Air Conditioner",
];

function Searchbar() {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState<string[]>([]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setFiltered([]);
    } else {
      const matches = sampleSuggestions.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFiltered(matches);
    }
  };

  return (
    <div className="relative">
      {/* Input and Icon */}
      <div className="flex justify-center items-center gap-2.5 border py-[2px] px-[5px] bg-[#F3F4F6] rounded-sm">
        <input
          type="text"
          value={query}
          onChange={handleInput}
          className="sm:w-[150px] md:w-[300px] lg:w-[500px] outline-none text-black ml-2 bg-[#F3F4F6]"
          placeholder="Search products..."
        />
        <div className="text-black">|</div>
        <FaSearch className="text-black cursor-pointer" />
      </div>

      {/* Dropdown */}
      {filtered.length > 0 && (
        <ul className="absolute w-full bg-white shadow-md mt-1 rounded-sm max-h-48 overflow-y-auto z-50 text-black">
          {filtered.map((item, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
              onClick={() => {
                setQuery(item);
                setFiltered([]);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Searchbar;
