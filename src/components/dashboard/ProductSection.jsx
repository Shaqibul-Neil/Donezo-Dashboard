import React from "react";
import SectionHeader from "../headers/SectionHeader";
import Button from "../button/Button";
import { Plus, Zap, Layers, Building2, BarChart } from "lucide-react";

const ProductSection = ({ products }) => {
  const iconConfig = [
    { icon: Zap, color: "text-blue-500" },
    { icon: Layers, color: "text-teal-500" },
    { icon: Building2, color: "text-orange-500" },
    { icon: BarChart, color: "text-yellow-600" },
  ];

  return (
    <div className="box-style space-y-4">
      {/* Title Area */}
      <div className="flex justify-between items-center">
        <SectionHeader>Products</SectionHeader>
        <Button
          variant="secondary"
          icon={Plus}
          text="New"
          className="w-18 h-6 lg:h-8 px-2"
          onClick={() => console.log("New Product")}
        />
      </div>

      {/* Product List */}

      <div className="space-y-3">
        {products?.map((product, index) => {
          const config = iconConfig[index] || iconConfig[0];
          const Icon = config.icon;
          return (
            <div
              key={product.id}
              className="flex items-center gap-3 group cursor-pointer"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
                <Icon size={24} className={config.color} />
              </div>
              {/* Text */}
              <div className="flex-1">
                <h4 className="text-lg text-gray-800 leading-tight mb-1 group-hover:text-[#002B1B] transition-colors">
                  {product.name}
                </h4>
                <div className="text-xs text-gray-400 font-semibold flex items-center gap-1">
                  Price: ${product.price}{" "}
                  <div className="w-1 h-1 rounded-full bg-green-700"></div>{" "}
                  Sales: <span className="text-gray-500">{product.sales}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductSection;
