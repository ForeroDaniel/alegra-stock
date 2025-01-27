import { getItems } from "@/services/alegra";
import { ItemsTable } from "@/app/components/ItemsTable";

// Main page component - async for server-side data fetching
export default async function Home() {
  // Fetch items data from API
  const items = await getItems();

  return (
    // Main container with padding
    <div className="p-8">
      {/* Page title */}
      <h1 className="text-2xl font-bold mb-4">Items List</h1>
      <ItemsTable items={items} />
    </div>
  );
}
