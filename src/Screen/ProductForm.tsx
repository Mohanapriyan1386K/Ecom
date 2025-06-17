import React, { useState } from "react";
import { addproduct } from "../Services/Productservice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductForm: React.FC = () => {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    categoryId: "",
    images: [""],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index?: number) => {
    const { name, value } = e.target;
    if (name === "images" && typeof index === "number") {
      const newImages = [...formData.images];
      newImages[index] = value;
      setFormData({ ...formData, images: newImages });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleAddImage = () => {
    setFormData({ ...formData, images: [...formData.images, ""] });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      title: formData.title,
      price: Number(formData.price),
      description: formData.description,
      categoryId: Number(formData.categoryId),
      images: formData.images.filter((img) => img.trim() !== ""),
    };

    try {
      await addproduct(payload);
      toast.success("Product added successfully!");
      setFormData({
        title: "",
        price: "",
        description: "",
        categoryId: "",
        images: [""],
      });
    } catch (error) {
      toast.error("Failed to add product");
      console.error("Error posting product:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-18 p-4 shadow-lg border rounded space-y-4">
      <h2 className="text-xl font-bold text-center">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="number"
          name="categoryId"
          value={formData.categoryId}
          onChange={handleChange}
          placeholder="Category ID"
          className="w-full border p-2 rounded"
          required
        />
        {formData.images.map((img, index) => (
          <input
            key={index}
            type="text"
            name="images"
            value={img}
            onChange={(e) => handleChange(e, index)}
            placeholder={`Image URL ${index + 1}`}
            className="w-full border p-2 rounded"
          />
        ))}
        <button
          type="button"
          onClick={handleAddImage}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          + Add Image
        </button>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded font-semibold"
        >
          Submit Product
        </button>
      </form>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default ProductForm;
