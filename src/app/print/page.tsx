'use client'
import CashSalesInvoice from "@/constants/CashSalesInvoice";
import CollectionReceipt from "@/constants/CollectionReceipt";
import { AuthProvider } from "@/context/authcontext";
import { PrintPageProps } from "@/types/types";



const PrintPage: React.FC<PrintPageProps> = ({ data, componentType }) => {

    const renderReceiptComponent = () => {
        switch (componentType) {
          case "Collection Receipt":
            return <CollectionReceipt data={data} />;
          case "Cash Sales Invoice":
            return <CashSalesInvoice data={data} />;
          default:
            return null;
        }
      };
    
      return <div><AuthProvider>{renderReceiptComponent()}</AuthProvider></div>;
};

export default PrintPage;
