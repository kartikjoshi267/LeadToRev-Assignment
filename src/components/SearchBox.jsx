import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const SearchBox = ({ countries, country, setCountry }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className=" relative flex gap-2 items-center bg-white px-3 rounded-full w-full">
            <FaSearch className="w-4 h-4" />
            <input
                type="text"
                placeholder={country}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsDropdownOpen(true)}
                className="rounded-md p-2 w-full focus-within:outline-none"
            />
            {isDropdownOpen ? (
                <IoIosArrowUp
                    className="w-6 h-6 cursor-pointer"
                    onClick={toggleDropdown}
                />
            ) : (
                <IoIosArrowDown
                    className="w-6 h-6 cursor-pointer"
                    onClick={toggleDropdown}
                />
            )}
            {isDropdownOpen && countries && (
                <ul className="absolute w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg overflow-y-auto z-10 top-10 max-h-60">
                    {countries
                        .sort((a, b) =>
                            a.name.common.localeCompare(b.name.common)
                        )
                        .filter((country) =>
                            country.name.common
                                .toLowerCase()
                                .includes(searchQuery.toLowerCase())
                        )
                        .map((country) => (
                            <li
                                key={country.name.common}
                                onClick={() => {
                                    setCountry(country.name.common);
                                    setSearchQuery("");
                                    setIsDropdownOpen(false);
                                }}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0"
                            >
                                {country.name.common}
                            </li>
                        ))}

                    {/* {!searchQuery && countries.map((country) => (
                        <li
                            key={country.name.common}
                            onClick={() => {
                                setSearchQuery(country.name.common);
                                setIsDropdownOpen(false);
                            }}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0"
                        >
                            {country.name.common}
                        </li>
                    ))} */}
                </ul>
            )}
        </div>
    );
};

export default SearchBox;
