import React, { memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { Video, X } from "lucide-react";
import Button from "../button/Button";

const MeetingForm = memo(({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleStartMeeting = (data) => {
    const meetId = data.meetId.trim();
    //redirect to google meet
    window.open(`https://meet.google.com/${meetId}`, "_blank");
    //close modal after link opening
    onClose();
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/20 backdrop-blur-[6px] z-150 cursor-pointer"
          />
          {/* Center Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 m-auto w-[90%] md:w-112.5 h-fit bg-white rounded-2xl shadow-2xl z-160 p-8 border border-gray-100"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-50 rounded-2xl flex items-center justify-center text-[#006442]">
                  <Video size={20} />
                </div>
                <h2 className="text-xl font-bold text-gray-800">
                  Start Meeting
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full text-gray-400 cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>
            {/* Form */}
            <form
              onSubmit={handleSubmit(handleStartMeeting)}
              className="space-y-6"
            >
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">
                  Google Meet ID
                </label>
                <input
                  type="text"
                  placeholder="abc-defg-hij"
                  {...register("meetId", {
                    required: "Meeting ID is required",
                    pattern: {
                      value: /^[a-z]{3}-[a-z]{4}-[a-z]{3}$/,
                      message: "Invalid format (e.g., abc-defg-hij)",
                    },
                  })}
                  className="form-input"
                />
                {errors.meetId && (
                  <p className="error-message">{errors.meetId.message}</p>
                )}
              </div>
              <div className="flex flex-col md:flex-row gap-3 pt-2 justify-center items-center">
                <Button
                  variant="primary"
                  text="Start Meeting Now"
                  type="submit"
                />
                <Button
                  type="button"
                  variant="secondary"
                  text="Maybe Later"
                  onClick={onClose}
                ></Button>
              </div>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
});

export default MeetingForm;
