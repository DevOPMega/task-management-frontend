"use client";

import { useContext } from "react";
import Features from "./components/Features";
import Functionality from "./components/Functionality";
import TaskGrid from "./components/TaskGrid";
import { DataContext } from "./Context/Context";


export default function DashboardPage() {
    const { user } = useContext(DataContext);
    
    return (
        <div className="max-h-screen flex flex-col space-y-4 overflow-y-scroll no-scrollbar">
            <h1 className="font-semibold text-4xl">
                Good morning, {user}!
            </h1>
            <Features />
            <Functionality />
            <TaskGrid />
        </div>
    )
}