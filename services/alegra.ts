// Define the interface where it's used
interface Item {
  id: number;
  name: string;
  inventory: {
    availableQuantity: number;
  };
}

export async function getItems(): Promise<Item[]> {
  const email = process.env.ALEGRA_EMAIL;
  const apiKey = process.env.ALEGRA_API_KEY;
  const auth = Buffer.from(`${email}:${apiKey}`).toString('base64');

  const options = {
    method: 'GET',
    headers: {
      'accept': 'application/json',
      'authorization': `Basic ${auth}`
    }
  };

  try {
    const res = await fetch('https://api.alegra.com/api/v1/items', options);
    if (!res.ok) {
      throw new Error(`API responded with status: ${res.status}`);
    }
    return res.json();
  } catch (error) {
    console.error('Error fetching items:', error);
    throw error;
  }
} 