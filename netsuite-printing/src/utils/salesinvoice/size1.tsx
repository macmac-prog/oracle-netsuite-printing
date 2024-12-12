"use client";
import { PrintPageProps } from "@/types/types";

const Size1Sales: React.FC<PrintPageProps> = ({ data }) => {
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
    <div className="text-xs h-[774.7px] w-[601px] border">
      <div className="flex mt-[139.8px]">
        <p className="w-[378px] pl-[95px]">Sold to No data</p>
        <p className="w-[223px] pl-[53px]">{data[date]?.[7]}</p>
      </div>
      <div className="flex">
        <p className="w-[378px] pl-[95px]">Tin No data</p>
        <p className="w-[223px] pl-[53px]">Terms</p>
      </div>
      <div className="flex h-[29px]">
        <p className="w-[378px] pl-[95px]">Address</p>
        <p className="w-[223px] pl-[136px]">104</p>
      </div>
      <div className="flex">
        <p className="w-[378px] pl-[129px]">Business style</p>
        <p className="w-[223px] pl-[87px]">Sample sig</p>
      </div>
      <div className="mx-[26.4px] border mt-[23px]">
        <table className="border-collapse w-full">
          <tbody>
            {data.slice(1).map((row, index) => (
              <tr key={index} className="text-xs text-center">
                <td className="w-[72px]">{row[10]}</td>
                <td className="w-[53px]">{row[11]}</td>
                <td className="w-[238.1px]">{row[9]}</td>
                <td className="w-[76px]">{row[13]}</td>
                <td className="w-[98.2px]">{row[15]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Size1Sales;
