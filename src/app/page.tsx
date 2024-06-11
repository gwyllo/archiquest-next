import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-cover bg-center">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex flex-wrap gap-4">
        <h1 className="text-4xl font-bold">Panama Canal Airship Ferrying System</h1>
        <p className="mt-4">
          To address the challenges posed by drought and low water levels,
          the Panama Canal Authority has implemented several strategies:
        </p>
        <ol className="list-decimal list-inside mt-4">
          <li>
            Water Conservation Measures: These include the use of water-saving basins in the Neopanamax Locks and cross-filling techniques in the Panamax Locks to optimize water usage and reduce waste (Home).
          </li>
          <li>
            Freshwater Surcharge: A freshwater surcharge was introduced in 2020, involving a fixed fee and a variable fee based on the Gatun Lake water levels. This is aimed at managing water demand and usage more effectively (Clyde & Co).
          </li>
          <li>
            Limiting Vessel Transits: To manage the limited water resources, the Canal Authority has reduced the number of daily transits. For example, in late 2023, the number of daily transits was adjusted to 22 vessels per day, reflecting the water scarcity situation (Riviera Maritime Media).
          </li>
          <li>
            Long-term Infrastructure Projects: The Authority is working on projects to develop new water sources and expand existing ones. This includes exploring additional rivers and constructing new reservoirs to improve water storage capacity for future resilience against droughts (BusinessToday).
          </li>
        </ol>
      </div>
      <div className="flex w-full justify-around mt-16">
        <Link href="/scenario">
          <button className="bg-gray-200 p-4 rounded-full shadow-md hover:bg-gray-300 w-40 h-16">Scenario</button>
        </Link>
        <Link href="/recording">
          <button className="bg-gray-200 p-4 rounded-full shadow-md hover:bg-gray-300 w-40 h-16">Recording</button>
        </Link>
        <Link href="/drawings">
          <button className="bg-gray-200 p-4 rounded-full shadow-md hover:bg-gray-300 w-40 h-16">Drawings</button>
        </Link>
        <Link href="/agents/timeline">
          <button className="bg-gray-200 p-4 rounded-full shadow-md hover:bg-gray-300 w-40 h-16">World Engine</button>
        </Link>
      </div>
    </main>
  );
}
