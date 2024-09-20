import Card from "./_ui/components/Card";
import Subscribe from "./_ui/components/Subscribe";

export default function Home() {
  return (
    <div className="p-4 text-center overflow-scroll">
      <h1 className="text-6xl font-bold slide-in-bounce my-20 ">
        A World of Stories Awaits
      </h1>
      <h2 className="text-3xl">
        Stay Ahead of the Shelves! Subscribe for the Latest Book Releases!.
      </h2>
      <Subscribe />
    </div>
  );
}
