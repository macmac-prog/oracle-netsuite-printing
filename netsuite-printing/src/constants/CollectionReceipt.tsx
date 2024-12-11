"use client";
import { useAuth } from "@/context/authcontext";
import { PrintPageProps } from "@/types/types";
import Size1 from "@/utils/collectionreceipt/size1";

const CollectionReceipt: React.FC<PrintPageProps> = ({ data }) => {
  const { user } = useAuth();

  return (
    <div>
      {(() => {
        const size1 = ["SMCT Carmen", "SMCT Loay"];
        const size2 = ["SMCT Tanza 2", "SMCT Aurora"];

        if (size1.some((branch) => branch === user?.branchName)) {
          return <Size1 data={data} />;
        } else if (size2.some((branch) => branch === user?.branchName)) {
          return <Size1 data={data} />;
        } else {
          return <>None</>;
        }
      })()}
    </div>

    // <div>
    //   {(() => {
    //     switch (user?.branchName) {
    //       case "SMCT Carmen":
    //         return <Size1 data={data} />;
    //       case "SMCT Tanza 2":
    //         return <Size1 data={data} />;
    //       default:
    //         return <>None</>;
    //     }
    //   })()}
    // </div>
  );
};

export default CollectionReceipt;
