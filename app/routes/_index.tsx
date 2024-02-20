import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import LogoImage from "~/images/Sun-Cloud.png"
import IconImage from "~/images/icon.png"

export const meta: MetaFunction = () => {
  return [
    { title: "Highlight App" },
    { name: "description", content: "Welcome to Highlight! This web app is for reflecting on and sharing your day" },
  ];
};

export default function Index() {
  return (
    <div className="font-Josefin">
      <header className="ml-3 mt-3 flex items-center gap-x-3">
        <Link to="/">
          <img src={LogoImage} alt="Highlight logo"/>
        </Link>
        <span className="mt-1 text-2xl font-">Highlight</span>
      </header>
      <div className="mt-28 flex flex-col items-center gap-y-4">
        <img src={IconImage} className="w-40" alt="Highlight icon"/>
        <h1 className="font-bold text-2xl">Welcome to Highlight</h1>
        <div className="text-center text-zinc-500">
          <span>友達、サークル、職場</span><br />
          <span>身近な人の日常を</span>
        </div>
      </div>
      <div className="mt-32 mb-14 flex flex-col items-center gap-y-3">
        <button className="w-48 py-2 border rounded-md font-bold text-white bg-gradient-to-l from-cb-start to-cb-end">SIGNUP</button>
        <button className="w-48 py-2 border-2 rounded-md border-black font-bold tracking-widest">LOGIN</button>
      </div>
    </div>
  );
}
