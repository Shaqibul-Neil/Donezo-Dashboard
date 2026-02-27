import React from "react";
import Button from "../button/Button";
import { useForm } from "react-hook-form";

const AddUserForm = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleUserSubmit = (data) => {
    console.log("Creating User:", data);
    //close panel on submit
    onClose();
  };
  return (
    <form onSubmit={handleSubmit(handleUserSubmit)} className="space-y-4">
      {/* Product Name */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-gray-500 uppercase ml-1">
          User Name
        </label>
        <input
          type="text"
          {...register("name", { required: "Name is required" })}
          placeholder="User Name"
          autoComplete="off"
          className="form-input"
        />
        {errors.name && <p className="error-message">{errors.name.message}</p>}
      </div>
      {/* email */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-gray-500 uppercase ml-1">
          User Email
        </label>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          placeholder="user@email.com"
          autoComplete="off"
          className="form-input"
        />
        {errors.email && (
          <p className="error-message">{errors.email.message}</p>
        )}
      </div>
      {/* Submit Cancel Button */}
      <div className="pt-6 flex md:flex-row flex-col gap-2 justify-center items-center">
        <Button
          variant="primary"
          text="Create User"
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

export default AddUserForm;
