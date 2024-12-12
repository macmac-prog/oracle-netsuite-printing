"use client";
import { PrintPageProps } from "@/types/types";

const Size4Collection: React.FC<PrintPageProps> = ({ data }) => {
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
    <div className="text-xs flex justify-evenly w-[813px] h-[435px] pl-[45px] pr-[38px] pt-[27px] border-2">
      <div className="w-[212px] mt-[30px] mr-[11px]">
        <table className="text-xs">
          <tbody>
            {data.slice(1).map((row, index) => (
              <tr key={index}>
                <td className="text-center py-[0.5] w-[106px]">{row[internalIdColumnIndex]}</td>
                <td className="text-center py-[0.5] w-[106px]">{row[amount]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-full mt-[94px]">
        <div className="flex justify-end w-full mb-[9px]">
          <p>{data[1]?.[date]}</p>
        </div>
        <div className="flex justify-between h-[19px]">
          <p className="ml-[68px]">{data[mainLineName]?.[1]}</p>
          <p>TIN NUMBER 0186957</p>
        </div>
        <div className="h-[19px]">
          <p className="ml-[68px]">{data[billingAddress]?.[2]}</p>
        </div>
        <div className="h-[19px]">
          <p className="ml-[68px]">Business style what?</p>
        </div>
        <div className="h-[19px]">
          <p>{data[billingAddress1]?.[11]}</p>
        </div>
        <div className="h-[19px] flex">
          <p className="ml-[19px] mr-[132px]">{data[2]?.[amount]}</p>
          <p>Car distributalrml</p>
        </div>
      </div>
    </div>
  );
};

export default Size4Collection;
