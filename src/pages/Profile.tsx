"use client";

import { UserRound } from "lucide-react";
import { useState } from "react";

export default function ProfilePage() {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 234 567 890",
    address: "123 Main St, City, Country",
  });

  const [editMode, setEditMode] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setEditMode(false);
    // TODO: send user data to backend
    console.log("Saved user info:", user);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">My Profile</h1>

      <div className="bg-white shadow-md rounded-2xl p-6 md:p-10">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
            <button>
              <UserRound size={80} className="text-gray-400 m-auto " />
            </button>
          </div>
          <div className="flex-1">
            {editMode ? (
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                className="border rounded-lg w-full px-3 py-2"
              />
            ) : (
              <h2 className="text-2xl font-semibold">{user.name}</h2>
            )}
            <p className="text-gray-500">{user.email}</p>
          </div>

          <button
            onClick={() => setEditMode(!editMode)}
            className="px-4 py-2 bg-black text-white rounded-lg"
          >
            {editMode ? "Cancel" : "Edit"}
          </button>
        </div>

        {/* Profile Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProfileField
            label="Email"
            name="email"
            value={user.email}
            editMode={editMode}
            onChange={handleChange}
          />
          <ProfileField
            label="Phone"
            name="phone"
            value={user.phone}
            editMode={editMode}
            onChange={handleChange}
          />
          <ProfileField
            label="Address"
            name="address"
            value={user.address}
            editMode={editMode}
            onChange={handleChange}
          />
        </div>

        {/* Save Button */}
        {editMode && (
          <div className="mt-6 text-right">
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-black text-white rounded-lg hover:bg-black/90"
            >
              Save Changes
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------- Profile Field Component ---------- */
function ProfileField({
  label,
  value,
  name,
  editMode,
  onChange,
}: {
  label: string;
  value: string;
  name: string;
  editMode: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label className="text-gray-500 text-sm">{label}</label>
      {editMode ? (
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          className="border rounded-lg w-full px-3 py-2 mt-1"
        />
      ) : (
        <p className="mt-1">{value}</p>
      )}
    </div>
  );
}
