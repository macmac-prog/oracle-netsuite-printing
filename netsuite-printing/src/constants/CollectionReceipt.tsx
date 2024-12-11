"use client";
import { useAuth } from "@/context/authcontext";
import { PrintPageProps } from "@/types/types";
import Size1Collection from "@/utils/collectionreceipt/size1";
import Size2Collection from "@/utils/collectionreceipt/size2";

const CollectionReceipt: React.FC<PrintPageProps> = ({ data }) => {
  const { user } = useAuth();

  return (
    <div>
      {(() => {
        const size1 = ["JIME", "MADRI"];
        const size2 = ["GENT", "INIT2"];

        if (size1.some((branch) => branch === user?.branchCode)) {
          return <Size1Collection data={data} />;
        } else if (size2.some((branch) => branch === user?.branchCode)) {
          return <Size2Collection data={data} />;
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
