import { useAuth } from "@/context/authcontext";
import { PrintPageProps } from "@/types/types";
import Size1Sales from "@/utils/salesinvoice/size1";

const CashSalesInvoice: React.FC<PrintPageProps> = ({ data }) => {
  const { user } = useAuth();

  return (
  <div>
    {(() => {
      const size1 = ["DSMC", "INAB"];
      
      if (size1.some((branch) => branch === user?.branchCode)) {
        return <Size1Sales data={data} />;
      } else {
        return <>None</>;
      }
    })()}
  </div>
  
  );
};

export default CashSalesInvoice;
