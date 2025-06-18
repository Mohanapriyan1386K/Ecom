import { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import { motion } from "framer-motion"; // ✅ Framer Motion

interface Product {
  id: number;
  title: string;
  images: string;
  description: string;
  price: number;
  inStock?: boolean;
}

function Cart() {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const handleDelete = (id: number) => {
    try {
      const updatedCart = cartItems.filter((item) => item.id !== id);
      setCartItems(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      toast.success("Successfully deleted");
    } catch (error) {
      console.error("Delete error:", error);
      toast.error("Data is not deleted");
    }
  };

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCart);
  }, []);

  return (
    <div className="p-5 mt-20 max-w-[1440px] m-auto">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
      />

      <p className="flex items-center gap-2 text-xs font-semibold">
        <FaHome /> / <span>Carts</span>
      </p>

      {cartItems.length === 0 ? (
        <p className="mt-10 text-center text-gray-600 font-semibold">
          Your cart is empty.
        </p>
      ) : (
        <div className="grid gap-4">
          {cartItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="flex justify-center gap-4 mt-5 p-4 rounded shadow-sm flex-wrap sm:flex-nowrap items-start select-none bg-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 * index }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-25 h-25 object-contain"
              />
              <div className="w-full">
                <h2 className="font-semibold text-lg">{item.title}</h2>
                <p className="text-blue-600 font-bold text-base">
                  ₹{item.price}
                </p>
                {!item.inStock && (
                  <p className="text-red-500 font-semibold mt-1 text-sm">
                    Out Of Stock
                  </p>
                )}
              </div>

              <div className="flex gap-5 w-fit">
                <button
                  onClick={() => {}}
                  className="px-6 py-2 bg-blue-400 text-nowrap text-xs w-fit text-white font-bold rounded-sm border border-blue-400 hover:bg-blue-100 hover:text-blue-400 transition-colors duration-500"
                >
                  Buy Now
                </button>
                <button
                  onClick={() => {
                    handleDelete(item.id);
                  }}
                  className="px-6 py-2 bg-red-400 text-nowrap text-sm w-fit text-white font-bold rounded-sm border border-red-400 hover:bg-red-100 hover:text-red-400 transition-colors duration-500"
                >
                  <MdDelete />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
