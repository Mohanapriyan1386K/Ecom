import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // You can use any icons or remove if not needed

function MegaMenu() {
  const [active, setActive] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const categories = [
    {
      title: "Electronics",
      sections: [
        {
          heading: "Top Brands",
          items: [
            { name: "Mi", link: "/electronics/mi" },
            { name: "Samsung", link: "/electronics/samsung" },
            { name: "realme", link: "/electronics/realme" },
            { name: "Motorola", link: "/electronics/motorola" },
          ],
        },
        {
          heading: "Shop by Screen Size",
          items: [
            { name: "24 & below", link: "/electronics/size/24" },
            { name: "28 - 32", link: "/electronics/size/28-32" },
          ],
        },
      ],
    },
    {
      title: "TVs & Appliances",
      sections: [
        {
          heading: "Washing Machines",
          items: [
            { name: "Fully Automatic", link: "/tv/washing/automatic" },
            { name: "Top Load", link: "/tv/washing/top-load" },
          ],
        },
        {
          heading: "Refrigerators",
          items: [
            { name: "Single Door", link: "/tv/fridge/single" },
            { name: "Double Door", link: "/tv/fridge/double" },
          ],
        },
      ],
    },
    {
      title: "Mens",
      sections: [
        {
          heading: "Footwear",
          items: [
            { name: "Sports Shoes", link: "/mens/footwear/sports-shoes" },
            { name: "Casual Shoes", link: "/mens/footwear/casual-shoes" },
            { name: "Formal Shoes", link: "/mens/footwear/formal-shoes" },
            {
              name: "Sandals & Floaters",
              link: "/mens/footwear/sandals-floaters",
            },
            { name: "Flip-Flops", link: "/mens/footwear/flip-flops" },
            { name: "Loafers", link: "/mens/footwear/loafers" },
            { name: "Boots", link: "/mens/footwear/boots" },
            { name: "Running Shoes", link: "/mens/footwear/running-shoes" },
            { name: "Sneakers", link: "/mens/footwear/sneakers" },
          ],
        },
        {
          heading: "Men's Grooming",
          items: [
            { name: "Deodorants", link: "/mens/grooming/deodorants" },
            { name: "Perfumes", link: "/mens/grooming/perfumes" },
            {
              name: "Beard Care & Grooming",
              link: "/mens/grooming/beard-care",
            },
            { name: "Shaving & Aftershave", link: "/mens/grooming/shaving" },
            { name: "Sexual Wellness", link: "/mens/grooming/sexual-wellness" },
          ],
        },
        {
          heading: "Clothing - Top wear",
          items: [
            { name: "T-Shirts", link: "/mens/clothing/topwear/tshirts" },
            {
              name: "Formal Shirts",
              link: "/mens/clothing/topwear/formal-shirts",
            },
            {
              name: "Casual Shirts",
              link: "/mens/clothing/topwear/casual-shirts",
            },
          ],
        },
        {
          heading: "Clothing - Bottom wear",
          items: [
            { name: "Jeans", link: "/mens/clothing/bottomwear/jeans" },
            {
              name: "Casual Trousers",
              link: "/mens/clothing/bottomwear/casual-trousers",
            },
            {
              name: "Formal Trousers",
              link: "/mens/clothing/bottomwear/formal-trousers",
            },
            {
              name: "Track Pants",
              link: "/mens/clothing/bottomwear/track-pants",
            },
            { name: "Shorts", link: "/mens/clothing/bottomwear/shorts" },
            { name: "Cargos", link: "/mens/clothing/bottomwear/cargos" },
            {
              name: "Three Fourths",
              link: "/mens/clothing/bottomwear/three-fourths",
            },
          ],
        },
        {
          heading: "Winter Wear",
          items: [
            { name: "Sweatshirts", link: "/mens/winterwear/sweatshirts" },
            { name: "Jackets", link: "/mens/winterwear/jackets" },
            { name: "Sweater", link: "/mens/winterwear/sweater" },
            { name: "Tracksuits", link: "/mens/winterwear/tracksuits" },
          ],
        },
        {
          heading: "Ethnic Wear",
          items: [
            { name: "Kurta", link: "/mens/ethnic/kurta" },
            { name: "Ethnic Sets", link: "/mens/ethnic/sets" },
            { name: "Sherwanis", link: "/mens/ethnic/sherwanis" },
            { name: "Ethnic Pyjama", link: "/mens/ethnic/pyjama" },
            { name: "Dhoti", link: "/mens/ethnic/dhoti" },
            { name: "Lungi", link: "/mens/ethnic/lungi" },
          ],
        },
        {
          heading: "Innerwear & Loungewear",
          items: [
            { name: "Briefs & Trunks", link: "/mens/innerwear/briefs-trunks" },
            { name: "Vests", link: "/mens/innerwear/vests" },
            { name: "Boxers", link: "/mens/innerwear/boxers" },
            {
              name: "Pyjamas and Lounge Pants",
              link: "/mens/innerwear/lounge-pants",
            },
            { name: "Thermals", link: "/mens/innerwear/thermals" },
          ],
        },
        {
          heading: "Watches",
          items: [
            { name: "Fastrack", link: "/mens/watches/fastrack" },
            { name: "Casio", link: "/mens/watches/casio" },
            { name: "Titan", link: "/mens/watches/titan" },
            { name: "Fossil", link: "/mens/watches/fossil" },
            { name: "Sonata", link: "/mens/watches/sonata" },
          ],
        },
        {
          heading: "Accessories",
          items: [
            { name: "Backpacks", link: "/mens/accessories/backpacks" },
            { name: "Wallets", link: "/mens/accessories/wallets" },
            { name: "Belts", link: "/mens/accessories/belts" },
            { name: "Sunglasses", link: "/mens/accessories/sunglasses" },
            {
              name: "Luggage & Travel",
              link: "/mens/accessories/luggage-travel",
            },
            { name: "Frames", link: "/mens/accessories/frames" },
            { name: "Jewellery", link: "/mens/accessories/jewellery" },
          ],
        },
        {
          heading: "Smart Wearables",
          items: [
            { name: "Smart Watches", link: "/mens/smartwear/smart-watches" },
            { name: "Smart Bands", link: "/mens/smartwear/smart-bands" },
          ],
        },
        {
          heading: "Personal Care Appliances",
          items: [
            { name: "Trimmers", link: "/mens/personalcare/trimmers" },
            { name: "Shavers", link: "/mens/personalcare/shavers" },
            { name: "Grooming Kits", link: "/mens/personalcare/grooming-kits" },
          ],
        },
        {
          heading: "Featured",
          items: [
            { name: "Watches Store", link: "/mens/featured/watches-store" },
            { name: "Footwear Club", link: "/mens/featured/footwear-club" },
            { name: "Bags & Wallet", link: "/mens/featured/bags-wallet" },
            { name: "T-Shirt Store", link: "/mens/featured/tshirt-store" },
            { name: "Adidas", link: "/mens/featured/adidas" },
            { name: "Beardo", link: "/mens/featured/beardo" },
            { name: "Reebok", link: "/mens/featured/reebok" },
            { name: "Skechers", link: "/mens/featured/skechers" },
            { name: "Nike", link: "/mens/featured/nike" },
          ],
        },
      ],
    },
    {
      title: "Womens",
      sections: [
        {
          heading: "Footwear",
          items: [
            { name: "Flats", link: "/womens/footwear/flats" },
            { name: "Heels", link: "/womens/footwear/heels" },
            { name: "Casual Shoes", link: "/womens/footwear/casual-shoes" },
            { name: "Boots", link: "/womens/footwear/boots" },
            { name: "Sneakers", link: "/womens/footwear/sneakers" },
            { name: "Sports Shoes", link: "/womens/footwear/sports-shoes" },
            { name: "Sandals", link: "/womens/footwear/sandals" },
            { name: "Flip-Flops", link: "/womens/footwear/flip-flops" },
          ],
        },
        {
          heading: "Women's Grooming",
          items: [
            { name: "Makeup", link: "/womens/grooming/makeup" },
            { name: "Skincare", link: "/womens/grooming/skincare" },
            { name: "Haircare", link: "/womens/grooming/haircare" },
            { name: "Fragrances", link: "/womens/grooming/fragrances" },
            {
              name: "Feminine Hygiene",
              link: "/womens/grooming/feminine-hygiene",
            },
          ],
        },
        {
          heading: "Clothing - Top wear",
          items: [
            { name: "Tops", link: "/womens/clothing/topwear/tops" },
            {
              name: "Kurtas & Kurtis",
              link: "/womens/clothing/topwear/kurtas",
            },
            {
              name: "Shirts & Blouses",
              link: "/womens/clothing/topwear/shirts-blouses",
            },
            { name: "T-Shirts", link: "/womens/clothing/topwear/tshirts" },
          ],
        },
        {
          heading: "Clothing - Bottom wear",
          items: [
            { name: "Jeans", link: "/womens/clothing/bottomwear/jeans" },
            {
              name: "Trousers & Capris",
              link: "/womens/clothing/bottomwear/trousers-capris",
            },
            { name: "Skirts", link: "/womens/clothing/bottomwear/skirts" },
            { name: "Leggings", link: "/womens/clothing/bottomwear/leggings" },
            { name: "Palazzos", link: "/womens/clothing/bottomwear/palazzos" },
            { name: "Shorts", link: "/womens/clothing/bottomwear/shorts" },
          ],
        },
        {
          heading: "Winter Wear",
          items: [
            { name: "Sweaters", link: "/womens/winterwear/sweaters" },
            {
              name: "Jackets & Coats",
              link: "/womens/winterwear/jackets-coats",
            },
            { name: "Sweatshirts", link: "/womens/winterwear/sweatshirts" },
            { name: "Thermals", link: "/womens/winterwear/thermals" },
          ],
        },
        {
          heading: "Ethnic Wear",
          items: [
            { name: "Sarees", link: "/womens/ethnic/sarees" },
            { name: "Salwar Suits", link: "/womens/ethnic/salwar-suits" },
            { name: "Lehengas", link: "/womens/ethnic/lehengas" },
            { name: "Ethnic Sets", link: "/womens/ethnic/sets" },
            { name: "Dupattas", link: "/womens/ethnic/dupattas" },
          ],
        },
        {
          heading: "Lingerie & Sleepwear",
          items: [
            { name: "Bras", link: "/womens/innerwear/bras" },
            { name: "Panties", link: "/womens/innerwear/panties" },
            { name: "Lingerie Sets", link: "/womens/innerwear/lingerie-sets" },
            {
              name: "Sleepwear & Loungewear",
              link: "/womens/innerwear/sleepwear",
            },
            { name: "Shapewear", link: "/womens/innerwear/shapewear" },
          ],
        },
        {
          heading: "Watches",
          items: [
            { name: "Fastrack", link: "/womens/watches/fastrack" },
            { name: "Casio", link: "/womens/watches/casio" },
            { name: "Titan", link: "/womens/watches/titan" },
            { name: "Fossil", link: "/womens/watches/fossil" },
            { name: "Sonata", link: "/womens/watches/sonata" },
          ],
        },
        {
          heading: "Accessories",
          items: [
            { name: "Handbags", link: "/womens/accessories/handbags" },
            { name: "Sunglasses", link: "/womens/accessories/sunglasses" },
            { name: "Jewellery", link: "/womens/accessories/jewellery" },
            { name: "Belts", link: "/womens/accessories/belts" },
            {
              name: "Scarves & Stoles",
              link: "/womens/accessories/scarves-stoles",
            },
            { name: "Wallets", link: "/womens/accessories/wallets" },
            {
              name: "Luggage & Travel",
              link: "/womens/accessories/luggage-travel",
            },
          ],
        },
        {
          heading: "Smart Wearables",
          items: [
            { name: "Smart Watches", link: "/womens/smartwear/smart-watches" },
            { name: "Fitness Bands", link: "/womens/smartwear/fitness-bands" },
          ],
        },
        {
          heading: "Personal Care Appliances",
          items: [
            { name: "Hair Dryers", link: "/womens/personalcare/hair-dryers" },
            {
              name: "Hair Straighteners",
              link: "/womens/personalcare/hair-straighteners",
            },
            { name: "Epilators", link: "/womens/personalcare/epilators" },
          ],
        },
        {
          heading: "Featured",
          items: [
            { name: "Saree Store", link: "/womens/featured/saree-store" },
            {
              name: "Topwear Collection",
              link: "/womens/featured/topwear-collection",
            },
            { name: "Handbag Highlights", link: "/womens/featured/handbags" },
            { name: "Adidas", link: "/womens/featured/adidas" },
            { name: "Maybelline", link: "/womens/featured/maybelline" },
            { name: "Lakme", link: "/womens/featured/lakme" },
            { name: "Biba", link: "/womens/featured/biba" },
            { name: "W", link: "/womens/featured/w" },
          ],
        },
      ],
    },
  ];

  return (
    <div className="bg-white shadow-md p-0">
      <div className="max-w-7xl mx-auto px-4 h-14 flex justify-between items-center lg:gap-6">
        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-6 h-14 items-center">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="relative"
              onMouseEnter={() => setActive(cat.title)}
              onMouseLeave={() => setActive(null)}
            >
              <button className="font-medium text-sm hover:text-blue-600">
                {cat.title}
              </button>

              {active === cat.title && (
                <div className="absolute top-full mt-0 left-0 w-[1000px] bg-white shadow-lg rounded z-20">
                  <div className="grid grid-cols-4 gap-4 p-6">
                    {cat.sections.map((section, i) => (
                      <div key={i}>
                        <p className="font-bold text-gray-700 mb-2 text-[15px] border-b pb-1 w-[200px]">
                          {section.heading}
                        </p>
                        <ul className="space-y-1 text-sm text-gray-600">
                          {section.items.map((item, j) => (
                            <li key={j} className="leading-4">
                              <Link
                                to={item.link}
                                className="hover:text-blue-600 block"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pb-4">
          {categories.map((cat) => (
            <div key={cat.title} className="mb-4">
              <button
                className="w-full text-left font-semibold text-base text-blue-600"
                onClick={() =>
                  setActive(active === cat.title ? null : cat.title)
                }
              >
                {cat.title}
              </button>

              {active === cat.title && (
                <div className="pl-4 mt-2 space-y-3">
                  {cat.sections.map((section, i) => (
                    <div key={i}>
                      <p className="text-gray-700 font-medium text-sm mb-1">
                        {section.heading}
                      </p>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {section.items.map((item, j) => (
                          <li key={j}>
                            <Link
                              to={item.link}
                              className="block hover:text-blue-600"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MegaMenu;
