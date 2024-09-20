import Link from "next/link";
import React from "react";
import SearchBook from "./Search";

const Header = () => {
  return (
    <header className="w-full h-16 p-4 flex justify-center bg-gray-100 shadow-lg shadow-grey-500/50">
      <nav className="flex items-center justify-start w-full">
        <div className="mr-8 border-b-2 border-transparent hover:border-gray-800 p-4">
          <Link href="/" className="text-lg ">
            Home
          </Link>
        </div>
        <div className="flex items-center w-full justify-end">
          <div className="mr-8 ">
            <SearchBook />
          </div>

          <div className="mr-8 border-b-2 border-transparent hover:border-gray-800 p-4">
            <Link href="/catelogue" className="text-lg">
              Catelogue
            </Link>
          </div>

          <div className="mr-8 border-b-2 border-transparent hover:border-gray-800  p-4">
            <Link href="/trending" className="text-lg">
              Trending Books
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
