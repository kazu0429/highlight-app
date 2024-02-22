import LogoImage from "~/images/Sun-Cloud.png"
import UserIcon from "~/images/Usericon.png"
import { Link } from "@remix-run/react"
import { useEffect, useRef, useState } from "react";

export default function Header() {

    const userRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false)

    useEffect(() => {
        const ref = userRef.current;
        if (!ref) return;

        const handleClick = (event: MouseEvent) => {
            if (!ref.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };

    }, [])

    return (
        <div ref={userRef} className="mt-3 flex items-center justify-between gap-x-3">
            <div className="ml-4 flex flex-row items-center gap-x-2">
                <Link to="/">
                    <img src={LogoImage} alt="Highlight logo" />
                </Link>
                <span className="mt-1 text-2xl font-">Highlight</span>
            </div>
            <div className="mr-4">
                <button onClick={() => setIsOpen(!isOpen)}>
                    <img src={UserIcon} alt="usericon" />
                </button>
            </div>
            <div className={`${!isOpen &&  "hidden"} absolute top-2 right-20`}>
                <div className="mt-1 py-1 px-3 bg-white border border-black rounded-lg flex flex-col items-center justify-center gap-y-2">
                    <div className="my-1 mr-auto flex items-center gap-x-2">
                        <div>
                            <img src={UserIcon} className="w-10" alt="usericon" />
                        </div>
                        <div>
                            UserName
                        </div>
                    </div>
                    <div className="my-1 mr-auto flex items-center  gap-x-2">
                            <div>
                                <img src={LogoImage} className="mx-1 w-8" alt="usericon" />
                            </div>
                            <div className="mt-1">
                                Home
                            </div>
                        </div>
                    <Link to="/setting" className="my-1 mr-auto flex items-center gap-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10">
                            <path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" clipRule="evenodd" />
                        </svg>
                        <div>
                            Setting
                        </div>
                    </Link>
                    <div className="my-1 mr-auto flex items-center gap-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10">
                            <path fillRule="evenodd" d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6ZM5.78 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06l-1.72-1.72H15a.75.75 0 0 0 0-1.5H4.06l1.72-1.72a.75.75 0 0 0 0-1.06Z" clipRule="evenodd" />
                        </svg>
                        <div>
                            Logout
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}