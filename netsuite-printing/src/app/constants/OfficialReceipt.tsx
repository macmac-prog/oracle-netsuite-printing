import { useAuth } from "@/context/authcontext";
import { PrintPageProps } from "@/types/types";
import CR_TypeA from "@/utils/SMCT_Carmen/collectionreceipt";
import React, { useEffect } from "react";

const OfficialReceipt: React.FC<PrintPageProps> = ({ data }) => {
  const { user } = useAuth();

  useEffect(() => {
    window.print();
  }, []);

  return (
    <div>
      {user?.branchName === "SMCT Carmen" || "SMCT Tanza 2" ? (
        <CR_TypeA data={data} />
      ) : (
        <>None</>
      )}
    </div>
  );
};

export default OfficialReceipt;
