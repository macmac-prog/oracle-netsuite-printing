import CashSalesInvoice from "@/constants/CashSalesInvoice";
import CollectionReceipt from "@/constants/CollectionReceipt";
import OfficialReceipt from "@/constants/OfficialReceipt";
import { PrintPageProps } from "@/types/types";
import React, { useEffect } from "react";



const PrintPage: React.FC<PrintPageProps> = ({ data, componentType }) => {
  useEffect(() => {
    window.print();
  }, []);

    const renderReceiptComponent = () => {
        switch (componentType) {
          case "Collection Receipt":
            return <CollectionReceipt data={data} />;
          case "Official Receipt":
            return <OfficialReceipt data={data} />;
          case "Cash Sales Invoice":
            return <CashSalesInvoice data={data} />;
          default:
            return null;
        }
      };
    
      return <div>{renderReceiptComponent()}</div>;
};

export default PrintPage;
