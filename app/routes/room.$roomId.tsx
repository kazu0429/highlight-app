import { LoaderFunctionArgs, json } from "@remix-run/node";
import invariant from 'tiny-invariant';
import { Form, Link, useLoaderData } from "@remix-run/react";
import UserIcon from "~/images/Usericon.png"
import ImageUpload from "~/images/Imageupload.png"
import Header from "./home.header";

export async function loader({ params }: LoaderFunctionArgs) {

    invariant(params.roomId, "Missing contactId param");

    const posts = [
        {
            id: 1,
            username: "user01",
            comment: "今日の仕事は流石に疲れた、、",
            posted_at: "2024-02-11 20:20"
        },
        {
            id: 2,
            username: "user02",
            comment: "明日は推しの誕生日！！！",
            posted_at: "2024-02-11 20:21"
        }
    ]
    return json({ posts })
}

export default function Room() {
    const { posts } = useLoaderData<typeof loader>();

    return (
        <div>
            <Header />
            <div>
                <Link to="/home">
                    <div className="ml-3 text-2xl flex items-center gap-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 rotate-90">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                        HOME
                    </div>
                </Link>
                <div
                    className="
                        mt-1 mx-3
                        flex items-center
                        before:content-[''] before:h-[1px] before:flex-grow before:bg-black before:mr-2 
                        after:content-[''] after:h-[1px] after:flex-grow after:bg-black after:ml-2
                    "
                >2024/02/11</div>
                <div className="m-3">
                    {posts.map((post) => (
                        <div key={post.id} className="mb-6 w-full flex justify-start gap-x-3">
                            <div>
                                <img src={UserIcon} className="w-10" alt="usericon" />
                            </div>
                            <div className="w-full mr-auto">
                                <div className="flex justify-between">
                                    <div className="font-bold text-lg">
                                        {post.username}
                                    </div>
                                    <div className="font-bold text-zinc-600">
                                        {post.posted_at.split(" ")[1]}
                                    </div>
                                </div>
                                <div>
                                    {post.comment}
                                </div>
                                <button className="mt-1">
                                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" className=" rounded-full">
                                        <rect x="0" y="0" width="20" height="20" rx="20" ry="20" fill="lightblue" />
                                        <path d="M18.2106 9.60544C18.2106 7.87875 17.6912 6.19198 16.7198 4.76441C15.7485 3.33684 14.3702 2.2345 12.764 1.60069C11.1578 0.966883 9.39814 0.830923 7.71368 1.21048C6.02922 1.59005 4.4979 2.46757 3.31879 3.72899C2.13969 4.99041 1.36733 6.57737 1.10212 8.28357C0.836907 9.98978 1.09112 11.7363 1.8317 13.2961C2.57228 14.8559 3.76498 16.1569 5.25475 17.0298C6.74452 17.9028 8.46245 18.3074 10.1852 18.191" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M5.23694 10.9296C5.89901 13.3117 8.5473 14.7689 10.9294 14.1069C12.385 13.5762 13.5777 12.3851 13.9737 10.9296" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M6.09613 6.98999V7.95599" stroke="black" strokeLinecap="round" />
                                        <path d="M13.1128 6.98999V7.95599" stroke="black" strokeLinecap="round" />
                                        <path d="M18.1679 14.1036V22.3179M14.0607 18.2107H22.275" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    )
                    )}
                </div>
            </div>
            <div className="fixed bottom-0 left-0 w-full border border-t">
                <Form>
                    <div className="p-2 flex items-center justify-between gap-x-2">
                        <label htmlFor="icon" className="shrink-0">
                            <img src={ImageUpload} alt="ImageUpload"/>
                        </label>
                            <input id="icon" type="file" className="hidden"/>
                        <input className="mx-4 w-full p-2 border border-zinc-500 rounded-3xl" placeholder="今日のハイライトは？"></input>
                        <div>0/300</div>
                        <button className="px-2 border-2 rounded-xl border-cb-start font-bold text-white bg-gradient-to-l from-cb-start to-cb-end" type="submit">POST</button>
                    </div>
                </Form>
            </div>
        </div>
    )
}