import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getallproduct } from "../Services/Productservice";
import { ToastContainer, toast } from "react-toastify";
import { FaHome } from "react-icons/fa";
import { OrbitProgress } from "react-loading-indicators";
import { motion } from "framer-motion"; // ✅ Import motion

interface Product {
  id: number;
  title: string;
  images: string[];
  description: string;
  price: number;
}

function Productdeatils() {
  const Navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [viewImage, setVIewImage] = useState<number>(0);

  const Navigtesback = () => {
    Navigate(-1);
  };

  useEffect(() => {
    setLoading(true);
    getallproduct()
      .then((res) => {
        const found = res.data.find((p: Product) => p.id === Number(id));
        setProduct(found || null);
      })
      .catch((error) => {
        console.log("ERROR DATA IS NOT FOUND", error);
        setProduct(null);
      })
      .finally(() => setLoading(false));
  }, [id]);

  useEffect(() => {
    const timeout = setTimeout(() => {}, 500);
    return () => clearTimeout(timeout);
  }, [viewImage]);

  const handleAddToCart = () => {
    const getemail = localStorage.getItem("userEmail");
    if (getemail) {
      if (product) {
        const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
        const existingIndex = existingCart.findIndex(
          (item: any) => item.id === product.id
        );

        if (existingIndex !== -1) {
          existingCart[existingIndex].quantity += 1;
        } else {
          existingCart.push({ ...product, quantity: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(existingCart));
        toast.success("Product added to cart!", {
          autoClose: 1500,
        });
      }
    } else {
      toast.error("Please Login First", {
        position: "top-center",
        autoClose: 1500,
        onClose: () => Navigate("/Login"),
      });
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[300px] mt-16">
        <OrbitProgress
          color="#2855e6"
          size="medium"
          text="loading"
          textColor="#2855e6"
        />
      </div>
    );
  }

  if (!product) {
    return <div className="text-center mt-10">Product not found</div>;
  }

  return (
    <div className="mt-16 p-5 max-w-[1440px] mx-auto">
      <div className="cursor-pointer mb-4" onClick={Navigtesback}>
        <p className="flex items-center gap-2 text-xs font-semibold">
          <FaHome /> / <span>Products</span> /{" "}
          <span className="text-gray-600">{product.title}</span>
        </p>
      </div>

      <ToastContainer />

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Side - Images */}
        <div className="flex flex-col-reverse md:flex-row gap-4">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible max-w-full md:max-w-none">
            {product.images.map((item, index) => (
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                key={index}
                src={item}
                onClick={() => setVIewImage(index)}
                alt={`product-${index}`}
                className={`w-20 h-20 object-cover border rounded cursor-pointer ${
                  viewImage === index ? "border-blue-500" : "border-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Main Image */}
          <motion.div
            className="w-full max-w-[400px]"
            key={viewImage}
            initial={{ opacity: 0, scale: 0.80 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={product.images[viewImage]}
              alt={product.title}
              className="w-full object-cover shadow-2xl rounded"
            />
          </motion.div>
        </div>

        {/* Right Side - Details */}
        <motion.div
          className="flex flex-col gap-4 max-w-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            {product.title}
          </h2>
          <p className="text-sm text-gray-600">{product.description}</p>
          <p className="text-green-600 font-bold text-2xl">
            ₹{product.price}.00/-{" "}
            <span className="text-base text-gray-800 font-normal">Only</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <button
              onClick={handleAddToCart}
              className="px-6 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition-all"
            >
              ADD TO CART
            </button>
            <button
              onClick={handleAddToCart}
              className="px-6 py-2 bg-yellow-500 text-white font-bold rounded hover:bg-yellow-600 transition-all"
            >
              BUY NOW
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Productdeatils;
