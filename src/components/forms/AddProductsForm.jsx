import React from "react";
import Button from "../button/Button";
import { useForm } from "react-hook-form";

const AddProductsForm = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleProductSubmit = (data) => {
    console.log(data);
    //close panel on submit
    onClose();
  };
  return (
    <form onSubmit={handleSubmit(handleProductSubmit)} className="space-y-4">
      {/* Product Name */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-gray-500 uppercase ml-1">
          Product Name*
        </label>
        <input
          type="text"
          name="name"
          autoComplete="off"
          {...register("name", { required: "Product Name is required" })}
          className="form-input"
          placeholder="e.g. Premium Plan"
        />
        {errors.name && <p className="error-message">{errors.name.message}</p>}
      </div>
      {/* Price & Category Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-500 uppercase ml-1">
            Price* ($)
          </label>
          <input
            type="number"
            name="price"
            autoComplete="off"
            {...register("price", { required: "Product Price is required" })}
            className="form-input"
            placeholder="0.00"
          />
          {errors.price && (
            <p className="error-message">{errors.price.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-500 uppercase ml-1">
            Category*
          </label>
          <select
            className="form-input"
            {...register("category", {
              required: "Product Category is required",
            })}
          >
            <option value="null" disabled>
              Select
            </option>
            <option value="subscription">Subscription</option>
            <option value="add on">Add On</option>
          </select>
          {errors.category && (
            <p className="error-message">{errors.category.message}</p>
          )}
        </div>
      </div>
      {/* Description */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-gray-500 uppercase ml-1">
          Description
        </label>
        <textarea
          rows="4"
          className="form-input"
          placeholder="Describe your product..."
        />
      </div>
      {/* Submit Cancel Button */}
      <div className="pt-6 flex md:flex-row flex-col gap-2 justify-center items-center">
        <Button
          variant="primary"
          text="Create Product"
          type="submit"
          className={"w-40"}
        />{" "}
        <Button
          variant="secondary"
          text={"Cancel"}
          onClick={onClose}
          className={"w-40"}
        />
      </div>
    </form>
  );
};

export default AddProductsForm;
