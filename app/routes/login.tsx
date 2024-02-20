import LogoImage from "../images/Sun-Cloud.png"

import { Form, Link } from "@remix-run/react"

export default function Login() {
    return (
        <div>
            <header className="ml-3 mt-3 flex items-center gap-x-3">
                <Link to="/">
                    <img src={LogoImage} alt="Highlight logo" />
                </Link>
                <span className="mt-1 text-2xl font-">Highlight</span>
            </header>
            <div className="flex justify-center">
                <span className="mt-20 text-3xl">LOGIN</span>
            </div>
            <div className="mt-20 flex justify-center">
                <Form>
                    <div className="flex flex-col gap-y-2">
                        <label htmlFor="email">Email</label>
                        <input name="email" type="text" className="p-1 border border-zinc-600 rounded-lg"></input>
                        <label htmlFor="password">Password</label>
                        <input name="password" type="password" className="p-1 border border-zinc-600 rounded-lg"></input>
                    </div>
                    <div className="mt-12">
                        <button className="w-48 text-lg border-2 rounded-xl border-black font-bold tracking-widest">LOGIN</button>
                    </div>
                </Form>
            </div>
            <div className="mt-8 text-center">
                <span className="text-zinc-600">Forgot Password?</span>
            </div>
            <div
                className="
                    mt-10 mx-8
                    flex items-center
                    before:content-[''] before:h-[1px] before:flex-grow before:bg-black before:mr-2 
                    after:content-[''] after:h-[1px] after:flex-grow after:bg-black after:ml-2
                "
            >or</div>
            <div className="mt-4 flex flex-col items-center gap-y-4">
                <span>Social Media</span>
                <div className="flex justify-center gap-x-5">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                        <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 24 24">
                        <path d="M 16.125 1 C 14.972 1.067 13.648328 1.7093438 12.861328 2.5273438 C 12.150328 3.2713438 11.589359 4.3763125 11.818359 5.4453125 C 13.071359 5.4783125 14.329031 4.8193281 15.082031 3.9863281 C 15.785031 3.2073281 16.318 2.12 16.125 1 z M 16.193359 5.4433594 C 14.384359 5.4433594 13.628 6.5546875 12.375 6.5546875 C 11.086 6.5546875 9.9076562 5.5136719 8.3476562 5.5136719 C 6.2256562 5.5146719 3 7.4803281 3 12.111328 C 3 16.324328 6.8176563 21 8.9726562 21 C 10.281656 21.013 10.599 20.176969 12.375 20.167969 C 14.153 20.154969 14.536656 21.011 15.847656 21 C 17.323656 20.989 18.476359 19.367031 19.318359 18.082031 C 19.922359 17.162031 20.170672 16.692344 20.638672 15.652344 C 17.165672 14.772344 16.474672 9.1716719 20.638672 8.0136719 C 19.852672 6.6726719 17.558359 5.4433594 16.193359 5.4433594 z"></path>
                    </svg>
                </div>
                <div>
                    Don&apos;t have an account?
                    <Link to="/signup"><span className="ml-1 underline decoration-sky-500/[.33] bg-gradient-to-l from-cb-start to-cb-end bg-clip-text text-transparent">Signup</span></Link>
                </div>
            </div>
        </div>
    )
}