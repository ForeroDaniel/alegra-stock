export type Item = {
  id: number;
  name: string;
  inventory?: {
    availableQuantity: number;
  };
  customFields?: {
    name: string;
    value: string;
  }[];
}; 