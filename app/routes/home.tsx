import HomeIcon from "~/images/Home.png";
import RoomIcon from "~/images/Roomicon.png";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import Header from "./home.header";
import { json } from "@remix-run/node";

export async function loader() {
    const rooms = [
        {
            id:1,
            name:"プログラミング研究会",
            summary:"鹿児島大学情報生体工学PGに所属する学生専用の部屋"
        },
        {
            id:2,
            name:"セブンイレブン〇〇店",
            summary:"楽しく仲良く頑張りましょう。"
        }
    ]

    return json({rooms})
}

export default function Home(){

    const { rooms } = useLoaderData<typeof loader>()

    return (
        <div>
            <div>  
                <Header/>
            </div>
            <div className="flex flex-col items-center">
                <span className="mt-10 text-2xl">
                    HOME
                </span>
                {rooms.length  
                ?  
                    <div className="m-3">
                        {rooms.map((room) => 
                        (
                            <div key={room.id} className="mt-4 w-full border border-black rounded-lg shadow-md">
                                <Link to={`/room/${room.name}`}>
                                <div className="p-3 flex justify-start gap-x-2">
                                    <div className="shrink-0">
                                        <img src={RoomIcon} alt="roomcion"/>
                                    </div>
                                    <div>
                                        <p className="font-bold">{room.name}</p>
                                        <p className="text-sm text-zinc-600">{room.summary}</p>          
                                    </div>
                                </div>
                                </Link>
                            </div>
                        )                        
                        )}
                    </div>
                : 
                    <div>
                        <div className="mt-20">
                            <img src={HomeIcon} alt="Homeicon" />
                        </div>
                        <span className="mt-8 text-zinc-600">まだルームに参加していません</span>
                    </div>
                }
            </div>
            <div className="mt-24 flex flex-col items-center gap-y-6">
                <Link to="/home/create"><button className="cursor-pointer w-48 py-2 border-2 rounded-xl border-cb-start font-bold text-white bg-gradient-to-l from-cb-start to-cb-end" type="button">CREATE ROOM</button></Link>
                <Link to="/home/join"><button className="cursor-pointer w-48 py-2 border-2 rounded-xl border-black font-bold" type="button">JOIN ROOM</button></Link>
            </div>
            <Outlet />
        </div>
    )
}