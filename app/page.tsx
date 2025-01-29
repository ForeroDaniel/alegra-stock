/**
 * Main Page Component - Items List View
 * 
 * This is the main page of the application that displays a paginated list of items from Alegra.
 * It demonstrates Next.js 13+ features including:
 * - Server Components (async component)
 * - Server-side data fetching
 * - URL-based pagination
 * - Suspense for loading states
 */

import { getItems } from "@/services/alegraItemsApi";
import { PaginatedItemsTable } from "@/app/components/PaginatedItemsTable";
import { Suspense } from "react";

interface HomeProps {
  searchParams: {
    page?: string;  // Optional page number from URL query parameters
  };
}

export default async function Home({
  searchParams,
}: HomeProps) {
  // Extract and validate the current page number from URL query parameters
  // Defaults to page 1 if not specified or invalid
  const currentPage = Number(searchParams.page) || 1;
  
  // Configuration for pagination
  const itemsPerPage = 20;  // Matches the limit in PaginatedItemsTable
  
  // Calculate the starting index for pagination
  // Example: Page 1 starts at 0, Page 2 starts at 20, etc.
  const startIndex = (currentPage - 1) * itemsPerPage;
  
  // Fetch items data from Alegra API with pagination parameters
  // This is executed server-side thanks to Next.js 13+ Server Components
  const { data: items, metadata } = await getItems({
    start: startIndex,
    limit: itemsPerPage,
    order_direction: 'ASC',    // Sort in ascending order
    order_field: 'name',       // Sort by item name
      });

  return (
    // Main container with responsive padding
    <div className="p-8">
      {/* Page header */}
      <h1 className="text-2xl font-bold mb-4">Items List</h1>

      {/* 
        Wrap the PaginatedItemsTable in Suspense for loading states
        This provides a fallback UI while the component is loading
        Particularly useful for slower connections or large datasets
      */}
      <Suspense fallback={<div>Loading...</div>}>
        <PaginatedItemsTable
          items={items}              // Array of items to display
          currentPage={currentPage}  // Current page number for pagination controls
          totalItems={metadata.total} // Total number of items for pagination calculation
        />
      </Suspense>
    </div>
  );
}
