import { useNavigate } from "react-router";

import { Button } from "@material-tailwind/react";

function SearchBar() {
  const navigate = useNavigate()

  function navigateServices(){
    navigate("/Services")
  }

  return (
    <div>
      <div className="relative mt-2 rounded-md flex">
        <input type="text"
          className="block w-80 rounded-md border-0 py-1.5 pl-3 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="¿En qué podemos ayudarte?"/>
        <Button className="flex items-center justify-center ml-2" style={{ backgroundColor:`#ab47bc`, width: `40px`, height: `40px` }} onClick={navigateServices}>
          <span className="sm:text-sm" style={{ color: `white` }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
            <path d="M21 21l-6 -6"></path></svg>
          </span>
        </Button>
      </div>
    </div>
  );
}

export default SearchBar;
