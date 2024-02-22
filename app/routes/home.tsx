import HomeIcon from "~/images/Home.png"
import { Link, Outlet } from "@remix-run/react";
import Header from "./home.header";

export default function Home(){

    return (
        <div>
            <div>  
                <Header/>
            </div>
            <div className="flex flex-col items-center">
                <span className="mt-10 text-2xl">
                    HOME
                </span>
                <div className="mt-20">
                    <img src={HomeIcon} alt="Homeicon" />
                </div>
                <span className="mt-8 text-zinc-600">まだルームに参加していません</span>
            </div>
            <div className="mt-24 flex flex-col items-center gap-y-6">
                <Link to="/home/create"><button className="cursor-pointer w-48 py-2 border-2 rounded-xl border-cb-start font-bold text-white bg-gradient-to-l from-cb-start to-cb-end" type="button">CREATE ROOM</button></Link>
                <Link to="/home/join"><button className="cursor-pointer w-48 py-2 border-2 rounded-xl border-black font-bold" type="button">JOIN ROOM</button></Link>
            </div>
            <Outlet />
        </div>
    )
}