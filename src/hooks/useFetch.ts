import axios from "axios";

export type Product = {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  quantity: number;
  price: string;
  createdAt: string;
  updatedAt: string;
};

export interface Products {
  products: Product[] | null;
}

export const useFetch = async (url: string) => {
  const res = await axios.get(url);
  const data: Products = await res.data;
  return data;
};
