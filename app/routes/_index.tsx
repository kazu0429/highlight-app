import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Highlight App" },
    { name: "description", content: "Welcome to Highlight! This web app is for reflecting on and sharing your day" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "josefin-sans", lineHeight: "1.8" }}>
      <h1 className="font-bold text-xl">Welcome to Highlight</h1>
    </div>
  );
}
