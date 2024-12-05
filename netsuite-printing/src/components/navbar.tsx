"use client";
import Image from "next/image";
import smct from "../../public/smct_branch.png";
import dsm from "../../public/dsm.png";
import hd from "../../public/hd.png";
import kia from "../../public/kia_bohol_black.png";
import suzuki_bohol from "../../public/suzuki_auto_bohol.png";
import suzuki_ozamiz from "../../public/suzuki_auto_ozamiz.png";
import { useAuth } from "@/context/authcontext";
import { FaAngleDown, FaHome, FaRedo } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const { branch, user, logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

    const refreshPage = () => {
        window.location.reload();
    }

  return (
    <>
      <div className="py-2 pl-2 pr-4 flex items-center justify-between">
        <div>
          {branch?.branch === "SMCT" ? (
            <Image src={smct} alt="SMCT, Inc." width={200} />
          ) : branch?.branch === "DSM" ? (
            <Image src={dsm} alt="DES Strong Motors" width={200} />
          ) : branch?.branch === "HD" ? (
            <Image src={hd} alt="Honda DES" width={200} />
          ) : (
            <div>Branch not found...</div>
          )}
        </div>
        <div>
          <button
            onClick={toggleDropdown}
            className="font-semibold uppercase flex items-center gap-2 text-[#333]"
          >
            {user?.branchName}
            <FaAngleDown />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-5 mt-2 py-1 px-5 bg-white border rounded shadow-lg">
              <button
                onClick={logout}
                className="w-full text-left text-sm font-medium text-[#333]"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="w-full flex py-2 pl-5 gap-5 bg-[#607799]">
        <button className="text-white">
          <FaHome size={25} color="white" />
        </button>
        <button onClick={refreshPage} className="text-white">
          <FaRedo size={20} color="white" />
        </button>
      </div>
    </>
  );
}
