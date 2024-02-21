import LogoImage from "~/images/Sun-Cloud.png"
import UserIcon from "~/images/Usericon.png"
import HomeIcon from "~/images/Home.png"
import { Link, Outlet } from "@remix-run/react";


export default function Home(){

    return (
        <div>
            <header className="mt-3 flex items-center justify-between gap-x-3">
                <div className="ml-4 flex flex-row items-center gap-x-2">
                    <Link to="/">
                        <img src={LogoImage} alt="Highlight logo" />
                    </Link>
                    <span className="mt-1 text-2xl font-">Highlight</span>
                </div>
                <div className="mr-4">
                    <img src={UserIcon} alt="usericon" />
                </div>
            </header>
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