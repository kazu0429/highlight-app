import UserIcon from "~/images/Usericon.png"
import Header from "./home.header";
import { useState } from "react";
import { json } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";


export async function loader() {
    const rooms = [
        {
            id: 1,
            name: "プログラミング研究会",
            editable: true
        },
        {
            id: 2,
            name: "セブンイレブン〇〇店",
            editable: false
        }
    ]

    return json({ rooms })
}

export default function Setting() {
    const [openRoom, setOpenRoom] = useState<boolean>(false);
    const [openTheme, setOpenTheme] = useState<boolean>(false);

    const { rooms } = useLoaderData<typeof loader>();

    return (
        <div>
            <Header />
            <div className="flex flex-col items-center justify-center gap-y-3">
                <span className="mt-12 text-2xl">SETTING</span>
                <div className="mt-2">
                    <img src={UserIcon} alt="userimg" className="w-24" />
                </div>
                <span className="text-xl">UserName</span>
                <span className="text-zinc-600">XXX@gmail.com</span>
            </div>
            <div className="mt-2 flex flex-col justify-start" >
                <div className="border-b border-black">
                    <div className="m-3">
                        Application Setting
                    </div>
                </div>
                <div className="border-t flex items-center justify-between">
                    <div className="m-3 flex items-center gap-x-3">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 border border-black rounded-full">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                            </svg>
                        </div>
                        <div>
                            Room
                        </div>
                    </div>
                    <button onClick={() => setOpenRoom(!openRoom)}>
                        <div className="mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 transition-transform duration-200 ease-out ${openRoom ? "rotate-180" : "rotate-0"}`}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                    </button>
                </div>
                <div className={`grid overflow-hidden transition-all duration-300 ease-in-out ${openRoom ? "grid-rows-[1fr] mb-3 opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="mx-3 overflow-hidden flex flex-col justify-center gap-y-2">
                        {rooms.map((room) => (
                            <div key={room.id}>
                                <div className="flex justify-between">
                                    <div>
                                        {room.name}
                                    </div>
                                    <div className="flex items-center gap-x-2">
                                        {room.editable &&
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 text-zinc-500">
                                                <path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" clipRule="evenodd" />
                                            </svg>
                                        }
                                        <Link to={`/setting/${room.name}/roomout`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 text-red-600">
                                                <path fillRule="evenodd" d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6ZM5.78 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06l-1.72-1.72H15a.75.75 0 0 0 0-1.5H4.06l1.72-1.72a.75.75 0 0 0 0-1.06Z" clipRule="evenodd" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="border-t flex items-center justify-between">
                    <div className="m-3 flex items-center gap-x-3">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                            </svg>
                        </div>
                        <div className="">
                            Theme
                        </div>
                    </div>
                    <button onClick={() => setOpenTheme(!openTheme)}>
                        <div className="mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 transition-transform duration-200 ease-out ${openTheme ? "rotate-180" : "rotate-0"}`}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                    </button>
                </div>
                <div className={`grid overflow-hidden transition-all duration-300 ease-in-out ${openTheme ? "grid-rows-[1fr] mb-3 opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="mx-3 overflow-hidden flex justify-around">
                        <div>Light</div>
                        <div>Dark</div>
                        <div>System</div>
                    </div>
                </div>
            </div>
            <div className="border-t" />
            <div className="mt-3 flex flex-col justify-start" >
                <span className="m-3">
                    Account Setting
                </span>
                <div className="border-t border-black">
                    <div className="m-3">
                        Profile
                    </div>
                </div>
                <div className="border-t">
                    <div className="m-3">
                        Change Password
                    </div>
                </div>
                <div className="border">
                    <div className="m-3">
                        Logout
                    </div>
                </div>
                <div className="border-b border-black">
                    <div className="m-3 text-red-500 font-semibold">
                        Account Delete
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    )
}