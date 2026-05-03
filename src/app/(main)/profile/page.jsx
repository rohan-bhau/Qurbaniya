"use client";

import Image from "next/image";
import cover from "@/assets/cover.png";

import { Avatar, Skeleton, Spinner } from "@heroui/react";
import { authClient } from "@/lib/auth-clinet";

export default function ProfilePage() {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  if (isPending)
    return (
      <div className="min-h-screen bg-gray-50 p-4 md:p-8">

        <div className="bg-gray-200 animate-pulse rounded-2xl p-6 mb-6 shadow-sm h-40 flex items-center gap-4">
          <Skeleton className="w-24 h-24 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-6 w-48 rounded-lg" />
            <Skeleton className="h-4 w-32 rounded-lg" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Skeleton className="h-32 rounded-2xl" />
          <div className="md:col-span-3 space-y-6">
            <Skeleton className="h-64 rounded-2xl" />
            <Skeleton className="h-40 rounded-2xl" />
          </div>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div
        className="bg-cover bg-center bg-no-repeat rounded-2xl p-6 mb-6 shadow-sm"
        style={{ backgroundImage: `url(${cover.src})` }}
      >
        <div className="flex items-center gap-4">
          <div className="w-24 h-24 rounded-full flex items-center justify-center">

            {user.image ? (
              <Image
                src={user.image}
                alt="profile"
                width={80}
                height={80}
                className="rounded-full border-4 border-white shadow-md object-cover"

              />
            ) : (
              <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-br from-pink-500 to-purple-500 text-white text-xl font-bold border-4 border-white shadow-md">
                {user?.name.slice(0,2).toUpperCase()}
              </div>
            )}
          </div>

          {/* info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{user?.name}</h2>
            <p className="text-gray-500">{user?.email}</p>
          </div>
        </div>
      </div>

      {/* main Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/*  Sidebar */}
        <div className="bg-white p-5 rounded-2xl shadow-md h-fit">
          <ul className="space-y-3">
            <li className="text-green-600 font-semibold cursor-pointer">
              My Profile
            </li>
            <li className="text-gray-600 hover:text-green-600 cursor-pointer transition">
              Update Info
            </li>
          </ul>
        </div>

        {/*  Right side */}
        <div className="md:col-span-3 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Profile Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Full Name</p>
                <h4 className="font-semibold text-gray-800">
                  {user?.name || "N/A"}
                </h4>
              </div>

              <div>
                <p className="text-sm text-gray-500">Email</p>
                <h4 className="font-semibold text-gray-800">
                  {user?.email || "N/A"}
                </h4>
              </div>

              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <h4 className="font-semibold text-gray-800">

                  {user?.phone || "Not Updated"}
                </h4>
              </div>

              <div>
                <p className="text-sm text-gray-500">Location</p>
                <h4 className="font-semibold text-gray-800">
                  
                  {user?.location || "Not Updated"}
                </h4>
              </div>
            </div>

            <button className="mt-6 px-5 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 cursor-pointer">
              Update Profile
            </button>
          </div>

          {/*  account Details */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Account Details
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Member Since</p>
                <h4 className="font-semibold text-gray-800">
                  {user?.createdAt
                    ? new Date(user.createdAt).toLocaleDateString()
                    : "May 05, 2026"}
                </h4>
              </div>
              <div>
                <p className="text-sm text-gray-500">Account Status</p>
                <span className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full">
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
