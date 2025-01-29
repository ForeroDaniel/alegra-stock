'use client';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Item } from "@/app/types/item";

// Props interface for the ItemsTable component
interface ItemsTableProps {
  items: Item[];           // Array of items to display
}

/**
 * ItemsTable Component
 * 
 * This component renders a table of items with the following columns:
 * - Name: The item's name
 * - FAMILIA: Value from customFields where name is 'FAMILIA'
 * - PROVEEDOR: Value from customFields where name is 'PROVEEDOR'
 * - Available Quantity: The available quantity from the item's inventory
 */

export function ItemsTable({ items }: ItemsTableProps) {
  /**
   * Helper function to get custom field value
   * Returns the value of a custom field by its name, or '-' if not found
   */
  const getCustomFieldValue = (item: Item, fieldName: string): string => {
    return item.customFields?.find(field => field.name === fieldName)?.value || '-';
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>FAMILIA</TableHead>
            <TableHead>PROVEEDOR</TableHead>
            <TableHead>Available Quantity</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Map through items to create table rows */}
          {items.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{getCustomFieldValue(item, 'FAMILIA')}</TableCell>
              <TableCell>{getCustomFieldValue(item, 'PROVEEDOR')}</TableCell>
              <TableCell>{item.inventory?.availableQuantity || 0}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
} 