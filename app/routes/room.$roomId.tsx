import { LoaderFunctionArgs, json } from "@remix-run/node";
import invariant from 'tiny-invariant';
import { Link, useLoaderData } from "@remix-run/react";
import UserIcon from "~/images/Usericon.png"
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
                                        <rect x="0" y="0" width="20" height="20" rx="20" ry="20" fill="lightblue"/>
                                        <path d="M18.2106 9.60544C18.2106 7.87875 17.6912 6.19198 16.7198 4.76441C15.7485 3.33684 14.3702 2.2345 12.764 1.60069C11.1578 0.966883 9.39814 0.830923 7.71368 1.21048C6.02922 1.59005 4.4979 2.46757 3.31879 3.72899C2.13969 4.99041 1.36733 6.57737 1.10212 8.28357C0.836907 9.98978 1.09112 11.7363 1.8317 13.2961C2.57228 14.8559 3.76498 16.1569 5.25475 17.0298C6.74452 17.9028 8.46245 18.3074 10.1852 18.191" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
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
            <div className="fixed right-8 bottom-10">
                <div className="p-4 text-white border border-cb-start rounded-full bg-gradient-to-l from-cb-start to-cb-end">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                </div>
            </div>
        </div>
    )
}