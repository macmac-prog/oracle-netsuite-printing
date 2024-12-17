"use client";
import { PrintPageProps } from "@/types/types";

const Size7Sales: React.FC<PrintPageProps> = ({ data }) => {
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
    <div className="text-xs h-[793.70px] w-[604.72px] border">
      <div className="flex mt-[128px]">
        <p className="w-[321.25px] ml-[83.14px]">
          Silvestre Lumapas Allan Justine Mascarinas
        </p>
        <p className="w-[151.18px] pl-[37.79px] h-[19px]">{data[date]?.[7]}</p>
      </div>
      <div className="flex">
        <p className="w-[321.25px] ml-[83.14px] h-[19px]">Tin No data</p>
      </div>
      <div className="flex h-[32px]">
        <p className="w-[321.25px] ml-[83.14px]">Address</p>
      </div>
      <div className="flex">
        <p className="w-[290px] ml-[113.38px]">Business style</p>
      </div>
      <div className="mx-[26.4px] mt-[20px] h-[302.3px] border">
        <table className="border-collapse w-full mt-[10px]">
          <tbody>
            {data.slice(1, 11).map((row, index) => (
              <tr key={index} className="text-[10px] text-center">
                <td className="w-[49.13px] h-[18px]">{row[10]}</td>
                <td className="w-[45.35px] h-[18px]">{row[11]}</td>
                <td
                  className={`w-[283.46px] h-[18px] ${
                    row[9]?.length > 41 ? "text-[7px]" : ""
                  }`}
                >
                  {row[9]}
                </td>
                <td className="w-[68.03px] h-[18px]">{row[13]}</td>
                <td className="w-[94.48px] h-[18px]">{row[15]}</td>
              </tr>
            ))}
            <tr className="text-[10px] text-center">
              <td className="w-[49.13px] h-[18px]">1</td>
              <td className="w-[45.35px] h-[18px]">Unit</td>
              <td
                className={`w-[283.46px] h-[18px]`}
              >
                Avenis UN125NE Pearl Mirage White
              </td>
              <td className="w-[68.03px] h-[18px]">1000</td>
              <td className="w-[94.48px] h-[18px]">1000</td>
            </tr>
            <tr className="text-[10px] text-center">
              <td className="w-[49.13px] h-[18px]">1</td>
              <td className="w-[45.35px] h-[18px]">Unit</td>
              <td
                className={`w-[283.46px] h-[18px]`}
              >
                Avenis UN125NE Pearl Mirage White
              </td>
              <td className="w-[68.03px] h-[18px]">1000</td>
              <td className="w-[94.48px] h-[18px]">1000</td>
            </tr>
            <tr className="text-[10px] text-center">
              <td className="w-[49.13px] h-[18px]">1</td>
              <td className="w-[45.35px] h-[18px]">Unit</td>
              <td
                className={`w-[283.46px] h-[18px]`}
              >
                Avenis UN125NE Pearl Mirage White
              </td>
              <td className="w-[68.03px] h-[18px]">1000</td>
              <td className="w-[94.48px] h-[18px]">1000</td>
            </tr>
            <tr className="text-[10px] text-center">
              <td className="w-[49.13px] h-[18px]">1</td>
              <td className="w-[45.35px] h-[18px]">Unit</td>
              <td
                className={`w-[283.46px] h-[18px]`}
              >
                Avenis UN125NE Pearl Mirage White
              </td>
              <td className="w-[68.03px] h-[18px]">1000</td>
              <td className="w-[94.48px] h-[18px]">1000</td>
            </tr>
            <tr className="text-[10px] text-center">
              <td className="w-[49.13px] h-[18px]">1</td>
              <td className="w-[45.35px] h-[18px]">Unit</td>
              <td
                className={`w-[283.46px] h-[18px]`}
              >
                Avenis UN125NE Pearl Mirage White
              </td>
              <td className="w-[68.03px] h-[18px]">1000</td>
              <td className="w-[94.48px] h-[18px]">1000</td>
            </tr>
            <tr className="text-[10px] text-center">
              <td className="w-[49.13px] h-[18px]">1</td>
              <td className="w-[45.35px] h-[18px]">Unit</td>
              <td
                className={`w-[283.46px] h-[18px]`}
              >
                Avenis UN125NE Pearl Mirage White
              </td>
              <td className="w-[68.03px] h-[18px]">1000</td>
              <td className="w-[94.48px] h-[18px]">1000</td>
            </tr>
            <tr className="text-[10px] text-center">
              <td className="w-[49.13px] h-[18px]">1</td>
              <td className="w-[45.35px] h-[18px]">Unit</td>
              <td
                className={`w-[283.46px] h-[18px]`}
              >
                Avenis UN125NE Pearl Mirage White
              </td>
              <td className="w-[68.03px] h-[18px]">1000</td>
              <td className="w-[94.48px] h-[18px]">1000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mx-[26.4px] h-[136px]">
        <table className="border-collapse w-full">
          <tbody>
            <tr className="text-[10px]">
              <td className="h-[19px] w-[102.04px]"></td>
              <td className="h-[19px] w-[211.65px]">PHP0.00</td>
              <td className="h-[19px] w-[136.1px]"></td>
              <td className="h-[19px] w-[94.48px]">PHP142,857.14</td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[19px] w-[102.04px]"></td>
              <td className="h-[19px] w-[211.65px]">PHP0.00</td>
              <td className="h-[19px] w-[136.1px]"></td>
              <td className="h-[19px] w-[94.48px]">17,142.86</td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[19px] w-[102.04px]"></td>
              <td className="h-[19px] w-[211.65px]">PHP0.00</td>
              <td className="h-[19px] w-[136.1px]"></td>
              <td className="h-[19px] w-[94.48px]"></td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[19px] w-[102.04px]"></td>
              <td className="h-[19px] w-[211.65px]">PHP17,142.86</td>
              <td className="h-[19px] w-[136.1px]"></td>
              <td className="h-[19px] w-[94.48px]"></td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[19px] w-[102.04px]"></td>
              <td className="h-[19px] w-[211.65px]"></td>
              <td className="h-[19px] w-[136.1px]"></td>
              <td className="h-[19px] w-[94.48px]">PHP160,000.00</td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[19px] w-[102.04px]"></td>
              <td className="h-[19px] w-[211.65px]"></td>
              <td className="h-[19px] w-[136.1px]"></td>
              <td className="h-[19px] w-[94.48px]">PHP160,000.00</td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[19px] w-[102.04px]"></td>
              <td className="h-[19px] w-[211.65px]"></td>
              <td className="h-[19px] w-[136.1px]"></td>
              <td className="h-[19px] w-[94.48px]">PHP160,000.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Size7Sales;
