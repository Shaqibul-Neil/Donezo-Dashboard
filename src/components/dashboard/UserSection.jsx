import React from "react";
import Button from "../button/Button";
import { Plus } from "lucide-react";
import SectionHeader from "../headers/SectionHeader";
import StatusBadge from "../miscellaneous/StatusBadge";

const UserSection = ({ users }) => {
  return (
    <div className="box-style space-y-4">
      {/* Title Area */}
      <div className="flex justify-between items-center">
        <SectionHeader>Users</SectionHeader>
        <Button
          variant="secondary"
          icon={Plus}
          text="Add User"
          className="w-28 h-6 lg:h-8 px-2"
          onClick={() => console.log("New user")}
        />
      </div>

      {/* User table */}
      <div className="space-y-4">
        {users?.map((user) => {
          //generating the image path
          const avatarUrl = `/src/assets/${user.name}.webp`;
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
                <h4 className="text-gray-800 leading-tight mb-0.5 truncate group-hover:text-[#002B1B] transition-colors">
                  {user?.name}
                </h4>
                <p className="text-xs text-gray-400 whitespace-nowrap">
                  Joined on{" "}
                  <span className="text-gray-600">
                    {new Date(user?.joinDate).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </p>
              </div>
              {/* Status Badge */}
              <div className="shrink-0">
                <StatusBadge status={user?.status} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserSection;
