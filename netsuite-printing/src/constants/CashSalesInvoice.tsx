import { useAuth } from "@/context/authcontext";
import { PrintPageProps } from "@/types/types";
import Size1 from "@/utils/collectionreceipt/size1";

const CashSalesInvoice: React.FC<PrintPageProps> = ({ data }) => {
  const { user } = useAuth();

  return (
  <div>
    {["SMCT Carmen", "SMCT Tanza 2"].some(branch => branch === user?.branchName) ? (
      <Size1 data={data} />
    ) : (
      <>None</>
    )}
  </div>
  );
};

export default CashSalesInvoice;
