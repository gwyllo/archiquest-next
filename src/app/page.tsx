import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24" style={{ 
      backgroundImage: "url('/finalstageScreenshot 2024-06-11 182308.png')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}>
      <div className="z-10 max-w-5xl w-full flex justify-middle">
        <div className="bg-white p-8 bg-opacity-60 rounded-lg shadow-lg max-w-lg mr-24">
          <h1 className="text-4xl font-bold">Panama Canal Airship Ferrying System</h1>
          <p className="mt-4">
          Lake Gutan is experiencing severe impacts from climate change and is drying up, which is creating significant strain on the global transport industry, as it handles nearly one million tons of cargo daily. This environmental crisis disrupts transportation and impacts local communities dependent on the lake. To address this, we must find a solution to revitalize Lake Gutan while maintaining its critical role in global logistics. One potential answer is the use of airships, which can transport large volumes of goods efficiently and with minimal environmental impact. 
          </p>
          <ol className="list-decimal list-inside mt-4">
            <li>
            Could airships be the innovative solution to preserving Lake Gutan and sustaining global trade?
            </li>
          </ol>
        </div>
      </div>
      <div className="flex w-full justify-around mt-16">
        <Link href="/scenario">
          <button className="bg-gray-200 p-4 rounded-full shadow-md hover:bg-gray-300 w-40 h-16">Scenario</button>
        </Link>
        <Link href="/Recording">
          <button className="bg-gray-200 p-4 rounded-full shadow-md hover:bg-gray-300 w-40 h-16">Recording</button>
        </Link>
        <Link href="/Drawings">
          <button className="bg-gray-200 p-4 rounded-full shadow-md hover:bg-gray-300 w-40 h-16">Gallery</button>
        </Link>
        <Link href="/agents/timeline">
          <button className="bg-gray-200 p-4 rounded-full shadow-md hover:bg-gray-300 w-40 h-16">World Engine</button>
        </Link>
      </div>
    </main>
  );
}
