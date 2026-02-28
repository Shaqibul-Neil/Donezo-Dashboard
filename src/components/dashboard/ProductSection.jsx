import React, { memo } from "react";
import { motion } from "framer-motion";
import SectionHeader from "../headers/SectionHeader";
import Button from "../button/Button";
import { Plus, Crown, Rocket, BotMessageSquare, ChartLine } from "lucide-react";
import ListHeader from "../headers/ListHeader";
import AddProductsForm from "../forms/AddProductsForm";

const ProductSection = memo(({ products = [], openPanel, closePanel }) => {
  const iconConfig = [
    { icon: Crown, color: "text-blue-500" },
    { icon: Rocket, color: "text-teal-500" },
    { icon: ChartLine, color: "text-orange-500" },
    { icon: BotMessageSquare, color: "text-yellow-600" },
  ];

  return (
    <motion.div
      className="box-style space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.5 }}
    >
      {/* Title Area */}
      <div className="flex justify-between items-center">
        <SectionHeader>Products</SectionHeader>
        <Button
          variant="secondary"
          icon={Plus}
          text="Add Product"
          className="w-32 h-6 lg:h-8 px-2"
          onClick={() =>
            openPanel(
              "Add New Product",
              <AddProductsForm onClose={closePanel} />,
            )
          }
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
              className="flex items-center gap-2 group cursor-pointer"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
                <Icon size={24} className={config.color} />
              </div>
              {/* Text */}
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <ListHeader> {product.name}</ListHeader>

                  {/* Status Badge */}
                  <div
                    className={`shrink-0 px-2 rounded-2xl text-xs capitalize ${product?.category === "addon" ? "bg-green-100 text-[#002B1B] border-green-100" : "bg-blue-100 text-blue-800"}`}
                  >
                    {product?.category}
                  </div>
                </div>
                <div className="text-xs text-gray-400 font-semibold flex items-center gap-1">
                  Sales: <span className="text-gray-500">{product.sales}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
});

export default ProductSection;
