'use client'; // Mark as client component for client-side interactivity

import { Item } from "@/app/types/item";
import { useCallback } from "react";
import { useRouter, useSearchParams } from 'next/navigation';
import { ItemsTable } from "./ItemsTable";
import { PaginationControls } from "./PaginationControls";

// Props interface for the PaginatedItemsTable component
interface PaginatedItemsTableProps {
  items: Item[];           // Array of items to display
  currentPage: number;     // Current active page number
  totalItems: number;      // Total number of items across all pages
}

/**
 * PaginatedItemsTable Component
 * 
 * This component combines the ItemsTable for display and PaginationControls for navigation.
 * It manages the pagination state and URL updates while delegating the actual rendering
 * to its child components.
 */
export function PaginatedItemsTable({ 
  items, 
  currentPage, 
  totalItems
}: PaginatedItemsTableProps) {
  // Next.js hooks for client-side navigation
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Pagination configuration
  const ITEMS_PER_PAGE = 20;  // Fixed number of items per page
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);  // Calculate total pages

  // Handler for page changes - memoized to prevent unnecessary re-renders
  const handlePageChange = useCallback((page: number) => {
    // Ensure page number stays within valid range
    const newPage = Math.max(1, Math.min(page, totalPages));
    
    // Update URL with new page number while preserving other query parameters
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', newPage.toString());
    router.push(`?${params.toString()}`);
  }, [totalPages, router, searchParams]);

  return (
    <div className="space-y-4">
      {/* Table section */}
      <ItemsTable items={items} />

      {/* Pagination controls section */}
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
