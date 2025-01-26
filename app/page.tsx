// Import Shadcn UI table components for creating a structured table
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getItems } from "@/services/alegra";

// Main page component - async for server-side data fetching
export default async function Home() {
  // Fetch items data from API
  const items = await getItems();

  console.log(items);

  return (
    // Main container with padding
    <div className="p-8">
      {/* Page title */}
      <h1 className="text-2xl font-bold mb-4">Items List</h1>
      {/* Table container with border and rounded corners */}
      <div className="rounded-md border">
        {/* Shadcn Table component */}
        <Table>
          {/* Table header section */}
          <TableHeader>
            <TableRow>
              {/* Column headers */}
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Available Quantity</TableHead>
            </TableRow>
          </TableHeader>
          {/* Table body section */}
          <TableBody>
            {/* Map through items to create table rows */}
            {items.map((item) => (
              <TableRow key={item.id}>
                {/* Display item data in cells */}
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.inventory?.availableQuantity || 0}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
