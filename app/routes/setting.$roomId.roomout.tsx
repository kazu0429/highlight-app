import { LoaderFunctionArgs } from "@remix-run/node";
import { useNavigate, useLoaderData } from "@remix-run/react";
import { useEffect, useRef } from "react";
import invariant from "tiny-invariant";

export async function loader({ params }: LoaderFunctionArgs) {
    invariant(params.roomId, "Missing contactId param");
    const roomId = params.roomId;
    return roomId
}

export default function RoomOut() {

    const roomId = useLoaderData<typeof loader>();
    const navigate = useNavigate();

    const outRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ref = outRef.current;
        if (!ref) return;

        const handleClick = (event: MouseEvent) => {
            if (!ref.contains(event.target as Node)) {
                navigate(-1)
            }
        }

        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };

    }, [])

    return (
        <div className="fixed top-0 right-0 h-screen w-full flex items-center justify-center bg-gray-500/30">
            <div ref={outRef} className="p-4 bg-white border border-black rounded-lg">
                <div>
                    <div className="mb-4">
                        {roomId}
                    </div>
                    <div className="mb-4 text-center text-sm font-bold">
                        本当に退会しますか？
                    </div>
                    <div className="flex justify-between gap-x-2">
                        <button className="w-full border-2 rounded-xl border-black cursor-pointer bg-gradient-to-l from-[#DD2222] to-[#F52E2E] text-white font-bold" type="button">OK</button>
                        <button onClick={() => navigate(-1)} className="w-full cursor-pointer  py-1 border-2 rounded-xl border-black font-bold" type="button">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}