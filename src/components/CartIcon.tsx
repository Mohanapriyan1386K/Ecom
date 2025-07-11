import { FaShoppingCart } from 'react-icons/fa';


const CartIcon = () => {
  const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
  return (
    <div className="relative">
      <FaShoppingCart className="text-[15px] text-black sm:text-white" />
      {cartItems.length > 0 && (
        <span className="absolute -top-1 -right-2 bg-gray-900 sm:bg-red-600 text-white text-[9px] font-bold rounded-full w-3 h-3 flex items-center justify-center">
          {cartItems.length}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
