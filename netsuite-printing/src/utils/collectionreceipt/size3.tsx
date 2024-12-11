'use client'
import { PrintPageProps } from "@/types/types";



const Size3Collection: React.FC<PrintPageProps> = ({ data }) => {
  
  const internalIdColumnIndex = 0;
  const mainLineName = 1;
  const billingAddress = 2;
  const billingAddress1 = 3;
  const billingAddress2 = 4;
  const billingAddress3 = 5;
  const taxNumber = 6;
  const date = 7;
  const terms = 8;
  const item = 9;
  const quantity = 10;
  const units = 11;
  const units1 = 12;
  const itemRate = 13;
  const itemRate1 = 14;
  const amount = 15;
  const totalSales = 16;
  const amountTax = 17;
  const netTax = 18;
  const transactionTotal = 19;

  return (
    <div className="text-xs">
        <p>TANZA 2</p>
        <div className="w-full flex">
            <div className="flex w-full">
                <p>Sold to No data</p>
                <p>Tin No data</p>
                <p>{data[billingAddress]?.[2]}</p>
            </div>
            <div className="w-full">
                <p>{data[date]?.[7]}</p>
            </div>
        </div>
      <table className="border-collapse w-full">
        <tbody>
          {data.slice(1).map((row, index) => (
            <tr key={index}>
              <td>{row[10]}</td>
              <td>{row[11]}</td>
              <td>{row[9]}</td>
              <td>{row[13]}</td>
              <td>{row[15]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Size3Collection;