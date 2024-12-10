"use client";
import { useAuth } from "@/context/authcontext";
import { PrintPageProps } from "@/types/types";
import CollectionSmctCarmen from "@/utils/SMCT_Carmen/collectionreceipt";
import CollectionSmctTanza2 from "@/utils/SMCT_Tanza2/collectionreceipt";

const CollectionReceipt: React.FC<PrintPageProps> = ({ data }) => {
  const { user } = useAuth();

  return (
    // <div>
    //   {user?.branchName === "SMCT Carmen" ? (
    //     <CollectionSmctCarmen data={data} />
    //   ) : user?.branchName === "SMCT Tanza 2" ? (
    //     <CollectionSmctTanza2 data={data} />
    //   ) : (
    //     <>None</>
    //   )}
    // </div>

    <div>
      {(() => {
        switch (user?.branchName) {
          case "SMCT Carmen":
            return <CollectionSmctCarmen data={data} />;
          case "SMCT Tanza 2":
            return <CollectionSmctTanza2 data={data} />;
          default:
            return <>None</>;
        }
      })()}
    </div>


    // <CollectionSmctCarmen data={data} />
  );
};

export default CollectionReceipt;
