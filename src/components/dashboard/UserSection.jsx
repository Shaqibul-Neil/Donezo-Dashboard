import React from "react";
import { easeOut, motion } from "framer-motion";
import Button from "../button/Button";
import { Plus } from "lucide-react";
import SectionHeader from "../headers/SectionHeader";
import StatusBadge from "../miscellaneous/StatusBadge";
import ListHeader from "../headers/ListHeader";
import AddUserForm from "../forms/AddUserForm";

const UserSection = ({ users, openPanel, closePanel }) => {
  return (
    <motion.div
      className="box-style space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      {/* Title Area */}
      <div className="flex justify-between items-center">
        <SectionHeader>Users</SectionHeader>
        <Button
          variant="secondary"
          icon={Plus}
          text="Add User"
          className="w-28 h-6 lg:h-8 px-2"
          onClick={() =>
            openPanel("Add New User", <AddUserForm onClose={closePanel} />)
          }
        />
      </div>

      {/* User table */}
      <div className="space-y-4">
        {users?.map((user) => {
          //generating the image path
          const avatarUrl = `/${user.name}.webp`;
          return (
            <div
              key={user?.id}
              className="flex items-center gap-2 group cursor-pointer"
            >
              {/* Avatar */}
              <div className="w-10 h-10 rounded-full overflow-hidden transition-transform group-hover:scale-105 duration-300 border border-gray-50 shrink-0">
                <img
                  src={avatarUrl}
                  alt={user?.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${user?.name}&background=002B1B&color=fff`;
                  }}
                />
              </div>
              {/* Info Section */}
              <div className="flex-1 min-w-0">
                <ListHeader>{user?.name}</ListHeader>
                <p className="text-[10px] md:text-xs text-gray-400 whitespace-nowrap">
                  {user?.email}
                </p>
              </div>
              {/* Status */}
              <div
                className={`shrink-0 w-2 h-2 rounded-2xl ${user?.status === "active" ? "bg-green-700" : "bg-[#E53935]"}`}
              ></div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default UserSection;
