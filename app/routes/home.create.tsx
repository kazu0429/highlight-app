import ImageUpload from "~/images/Imageupload.png"
import { Form, useNavigate, useMatches } from "@remix-run/react";
import { useEffect, useRef } from "react";

export default function CreateRoomModal(){
    const navigate = useNavigate();
    const matches = useMatches();
    const { pathname } = matches[2];

    const popupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ref = popupRef.current;
        if (!ref) return;

        const handleClick = (event:MouseEvent) => {
            if(!ref.contains(event.target as Node)){
                document.body.style.overflow = '';
                navigate(-1);
            }
        }

        document.addEventListener("click", handleClick);
        
        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, [navigate]);

    return (
        <div className={`${pathname !== '/home/create' && "hidden"} overscroll-contain  fixed top-0 right-0 z-50 flex items-center justify-center h-screen w-full bg-gray-500/50`}>
            <div className="relative p-4 w-full max-w-2xl max-h-full">
                <div ref={popupRef} className="relative bg-white border border-black rounded-lg shadow">
                    <div className="p-5 text-center text-2xl">CREATE ROOM</div>
                    <Form>
                        <div className="flex flex-col items-center justify-center">
                        <div className="w-[calc(100%-20%)] flex flex-col gap-y-2">
                            <label htmlFor="name">Room Name</label>
                            <input id="name" name="name" type="text" className="p-1 border border-zinc-600 rounded-lg"></input>
                            <label htmlFor="suumary">Room Summary</label>
                            <textarea id="summary" name="summary" className="p-1 border border-zinc-600 rounded-lg"></textarea>
                            <label htmlFor="password">Room Password</label>
                            <input id="password" name="password" type="password" className="p-1 border border-zinc-600 rounded-lg"></input>
                            <label htmlFor="icon">Room Icon</label>
                            <label htmlFor="icon" className="w-fit cursor-pointer">
                                <img src={ImageUpload} alt="ImageUpload" />
                            </label>
                                <input id="icon" className="hidden" alt="icon" type="file" accept="image/*" />
                            <label htmlFor="delete">Highlight Delete Span</label>
                            <select className="w-28 px-2 py-1 border border-black rounded-xl">
                                <option value={"1day"}>1 day</option>
                                <option value={"3days"}>3 days</option>
                                <option value={"1week"}>1 week</option>
                            </select>
                        </div>
                            <div className="w-[calc(100%-20%)] m-6 flex justify-between">
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