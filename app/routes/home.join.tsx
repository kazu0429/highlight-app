import { Form, useNavigate, useMatches } from "@remix-run/react";
import { useEffect, useRef } from "react";

export default function JoinRoomModal(){
    const navigate = useNavigate();
    const matches = useMatches();
    const { pathname } = matches[2];

    const popupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ref = popupRef.current;
        if (!ref) return;

        const handleClick = (event:MouseEvent) => {
            if(!ref.contains(event.target as Node)){
                navigate(-1);
            }
        }

        document.addEventListener("click", handleClick);
        
        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, [navigate]);

    return (
        <div className={`${pathname !== '/home/join' && "hidden"} fixed top-0 right-0 z-50 flex items-center justify-center min-h-screen w-full bg-gray-500/50`}>
            <div className="relative p-4 w-full max-w-2xl max-h-full">
                <div ref={popupRef} className="relative bg-white border border-black rounded-lg shadow">
                    <div className="p-5 text-center text-2xl">JOIN ROOM</div>
                    <Form>
                        <div className="flex flex-col items-center justify-center">
                        <div className="w-[calc(100%-20%)] flex flex-col gap-y-2">
                            <label htmlFor="name">Room Name</label>
                            <input id="name" name="name" type="text" className="p-1 border border-zinc-600 rounded-lg"></input>
                            <label htmlFor="password">Room Password</label>
                            <input id="password" name="password" type="password" className="p-1 border border-zinc-600 rounded-lg"></input>
                            
                        </div>
                        <div className="m-6 w-[calc(100%-20%)] flex flex-row justify-between">
                            <button className="cursor-pointer px-4 py-1 border-2 rounded-xl border-cb-start font-bold text-white bg-gradient-to-l from-cb-start to-cb-end" type="button">CREATE</button>
                            <button
                                onClick={() => {
                                    navigate(-1)
                                }}
                                className="cursor-pointer px-4 py-1 border-2 rounded-xl border-black font-bold" type="button"
                            >
                                CANCEL
                            </button>
                        </div>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}