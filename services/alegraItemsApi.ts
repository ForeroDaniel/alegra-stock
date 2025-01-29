import { Item } from "@/app/types/item";
/**
 * Alegra Items API Service
 * 
 * This service module provides functionality to interact with the Alegra API's items endpoint.
 * It handles authentication, request formatting, and response parsing for item-related operations.
 * 
 * The module supports:
 * - Fetching paginated items with sorting and filtering
 * - Proper error handling and type safety
 * - Environment-based configuration
 * 
 * Used by the main application to retrieve inventory items for display.
 */

// Parameters that can be passed to the getItems function
// These match the Alegra API's query parameters for pagination and filtering
interface GetItemsParams {
  start?: number;      // Starting index for pagination
  limit?: number;      // Number of items per page
  order_direction?: 'ASC' | 'DESC';  // Sort direction
  order_field?: 'name' | 'id' | 'reference' | 'description';  // Field to sort by
  query?: string;      // Search query for filtering items
}

// The structure of the API response
// Contains both the items array and metadata with total count
interface ItemsResponse {
  data: Item[];
  metadata: {
    total: number;  // Total number of items (used for pagination)
  };
}

// Main function to fetch items from the Alegra API
export async function getItems(params: GetItemsParams = {}): Promise<ItemsResponse> {
  // Get authentication credentials from environment variables
  const email = process.env.ALEGRA_EMAIL;
  const apiKey = process.env.ALEGRA_API_KEY;
  // Create base64 encoded auth string for Basic Authentication
  const auth = Buffer.from(`${email}:${apiKey}`).toString('base64');

  // Build query parameters for the API request
    const queryParams = new URLSearchParams();
  // Only add parameters that are defined
    if (params.start !== undefined) queryParams.append('start', params.start.toString());
    if (params.limit !== undefined) queryParams.append('limit', params.limit.toString());
    if (params.order_direction) queryParams.append('order_direction', params.order_direction);
    if (params.order_field) queryParams.append('order_field', params.order_field);
    if (params.query) queryParams.append('query', params.query);
  // Always request metadata for pagination information
    queryParams.append('metadata', 'true');

  // Configure the request options
  const options = {
    method: 'GET',
    headers: {
      'accept': 'application/json',
      'authorization': `Basic ${auth}`
    }
  };
    
  try {
    // Construct the full URL with query parameters
    const url = `https://api.alegra.com/api/v1/items?${queryParams.toString()}`;
    // Make the API request
    const res = await fetch(url, options);
    
    // Check if the request was successful
    if (!res.ok) {
      throw new Error(`API responded with status: ${res.status}`);
    }
    return res.json();
  } catch (error) {
    // Log and re-throw any errors that occur
    console.error('Error fetching items:', error);
    throw error;
  }
} 