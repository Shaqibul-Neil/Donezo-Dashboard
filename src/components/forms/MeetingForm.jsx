import React from "react";
import { useForm } from "react-hook-form";

const MeetingForm = ({ onClose }) => {
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
  return <div></div>;
};

export default MeetingForm;
