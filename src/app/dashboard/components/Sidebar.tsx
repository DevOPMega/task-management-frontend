"use client";

import { useContext } from "react";
import { DataContext } from "../Context/Context";
import { AddSVG, 
    AnalyticsSVG, 
    BoardsSVG, 
    HomeSVG,
    ModeSVG, 
    NotifcationSVG, 
    RightArrowSVG, 
    SettingsSVG, 
    TeamsSVG
} from "./SVG"
import Link from "next/link"

export default function Sidebar() {
    const { username, setAddTaskbarToggle } = useContext(DataContext);
    return (
        <div className="hidden w-60 h-screen bg-white px-4 py-6 md:block">
            <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-800"></div>
                <p className="text-lg font-semibold">{username}</p>
            </div>
            <div className="flex justify-between items-center mt-4">
                <div className="flex space-x-3">
                    <NotifcationSVG />
                    <ModeSVG />
                    <RightArrowSVG />
                </div>
                <button className="bg-slate-200 text-gray-500 text-sm px-2 py-1 rounded-sm">
                    Logout
                </button>
            </div>
            <div className="mt-6 flex flex-col space-y-1">
                <Link
                    href="/dashboard"
                    className="px-2 py-1 rounded-md flex space-x-2 items-center text-base text-gray-500">
                    <HomeSVG />
                    <span>Home</span>
                </Link>
                <Link
                    href="/dashboard/boards"
                    className="px-2 py-1 rounded-md flex space-x-2 items-center text-base text-gray-500">
                    <BoardsSVG />
                    <span>Boards</span>
                </Link>
                <Link
                    href="/dashboard/settings"
                    className="px-2 py-1 rounded-md flex space-x-2 items-center text-base text-gray-500">
                    <SettingsSVG />
                    <span>Settings</span>
                </Link>
                <Link
                    href="/dashboard/analytics"
                    className="px-2 py-1 rounded-md flex space-x-2 items-center text-base text-gray-500">
                    <AnalyticsSVG />
                    <span>Analytics</span>
                </Link>
                <Link
                    href="/dashboard/teams"
                    className="px-2 py-1 rounded-md flex space-x-2 items-center text-base text-gray-500">
                    <TeamsSVG />
                    <span>Teams</span>
                </Link>
            </div>
            <div 
                onClick={() => setAddTaskbarToggle(true)}
                className="flex justify-center space-x-1  py-2 mt-6 rounded-md bg-gradient-to-t from-violet-600 to bg-violet-500 text-white cursor-pointer">
                <span>
                    Create new task
                </span>
                <AddSVG />
            </div>
        </div>
    )
}