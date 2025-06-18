import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getallproduct, deleteproduct } from "../Services/Productservice";
import { OrbitProgress } from "react-loading-indicators";
import { toast, ToastContainer } from "react-toastify";
import MegaMenu from "../components/MegaMenu";
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
}

function Home() {
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const handlenav = (id: number) => {
    navigate(`productdeatils/${id}`);
  };
  useEffect(() => {
    const fetchDataWithDelay = async () => {
      setLoading(true);
      const timeout = new Promise((resolve) => setTimeout(resolve, 1000));
      const fetch = getallproduct()
        .then((res) => {
          setProduct(res.data);
        })
        .catch((error) => console.error("Error fetching products:", error));

      await Promise.all([timeout, fetch]);
      setLoading(false);
    };
    fetchDataWithDelay();
  }, []);

  const deletedata = async (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await deleteproduct(id); // Axios call
      setProduct((prev) => prev.filter((item) => item.id !== id));
      toast.success("Product successfully deleted!");
    } catch (error) {
      console.error("Failed to delete product:", error);
      toast.error("Failed to delete product!");
    }
  };

  useEffect(() => {
    deletedata;
  }, []);

  return (
    <div className="mt-16 max-w-[1500px] mx-auto px-4 py-6 bg-gray-100 min-h-screen">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
      />
      <div className="hidden  lg:block">
        <MegaMenu />
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-[80vh]">
          <OrbitProgress
            color="#2855e6"
            size="medium"
            text="loading"
            textColor="#2855e6"
          />
        </div>
      ) : (
        <div className="mt-8">
          {product.length === 0 ? (
            <p className="text-center text-gray-600 font-semibold">
              PRODUCT IS NOT FOUND
            </p>
          ) : (
            <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              {product.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handlenav(item.id)}
                  className="bg-white p-3 rounded-lg shadow hover:shadow-xl transition duration-300 cursor-pointer"
                >
                  <img
                    src={item?.images[0] || item?.images[0]}
                    alt={item.title}
                    className="w-full h-32 sm:h-36 md:h-40 object-cover rounded"
                  />
                  <div className="mt-2 space-y-1">
                    <p className="text-sm font-semibold line-clamp-1">
                      {item.title}
                    </p>
                    <p className="text-[10px] text-gray-500 line-clamp-2">
                      {item.description}
                    </p>
                    <p className="text-green-600 font-bold text-sm">
                      ₹{item.price}.00
                    </p>
                    <button
                      onClick={(e) => {
                        deletedata(item.id, e);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
