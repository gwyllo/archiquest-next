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
            To address the challenges posed by drought and low water levels,
            the Panama Canal Authority has implemented several strategies:
          </p>
          <ol className="list-decimal list-inside mt-4">
            <li>
            Another idea we have thought to develop is the idea of an airship ferrying system, where the boats have their cargo ferried over the land to the other side of panama and reloaded into boats on the other side. this requires heavy research to see if its a viable opition. first we looked at how many airships would be necessary in order to keep up with the boats that use the canal now. through ai we can see that:
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
          <button className="bg-gray-200 p-4 rounded-full shadow-md hover:bg-gray-300 w-40 h-16">Drawings</button>
        </Link>
        <Link href="/agents/timeline">
          <button className="bg-gray-200 p-4 rounded-full shadow-md hover:bg-gray-300 w-40 h-16">World Engine</button>
        </Link>
      </div>
    </main>
  );
}
