"use client"
import { useContext } from "react";
import { DataContext } from "../layout";
import { AddSVG, AutomationSVG, CalendarSVG, FilterSVG, ShareSVG } from "./SVG";
import SearchButton from "./SearchButton";

function Functionality() {
  const { setAddTaskbarToggle } = useContext(DataContext);
  return (
    <div className="flex justify-between">
      <SearchButton />
      <div className="flex items-center space-x-6">
        <div className="flex items-center gap-2">
          <span className=" text-gray-500">Calendar view</span>
          <CalendarSVG />
        </div>
        <div className="flex items-center gap-2">
          <span className=" text-gray-500">Automation</span>
          <AutomationSVG />
        </div>
        <div className="flex items-center gap-2">
          <span className=" text-gray-500">Filter</span>
          <FilterSVG />
        </div>
        <div className="flex items-center gap-2">
          <span className=" text-gray-500">Share</span>
          <ShareSVG />
        </div>
        <div 
          onClick={() => setAddTaskbarToggle(true)}
          className="flex px-2 justify-center space-x-1  py-2 rounded-md bg-gradient-to-t from-violet-600 to bg-violet-500 text-white cursor-pointer">
          <span>Create new </span>
          <AddSVG />
        </div>
      </div>
    </div>
  );
}

export default Functionality;
