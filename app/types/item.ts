export type Item = {
  id: number;
  name: string;
  inventory?: {
    availableQuantity: number;
  };
}; 