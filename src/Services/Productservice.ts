import axiosInstance from "./Axoisintence";
export const getallproduct=()=>axiosInstance.get("/products?limit")
export const deleteproduct=(id:number)=>axiosInstance.delete(`/products/${id}`)
export const addproduct = (data: {
  title: string;
  price: number;
  description: string;
  categoryId: number;
  images: string[];
}) => axiosInstance.post("/products", data);
