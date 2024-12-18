"use client";
import { PrintPageProps } from "@/types/types";

const Size6Sales: React.FC<PrintPageProps> = ({ data }) => {
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
    <div className="text-xs h-[767.245px] w-[604.72px] border">
      <div className="flex mt-[109.595px]">
        <p className="w-[400.63px] pl-[83.15px]">
          Silvestre Lumapas Allan Justine Mascarinas
        </p>
        <p className="w-[204.09px] pl-[41.57px] h-[20.3px]">{data[date]?.[7]}</p>
      </div>
      <div className="flex">
        <p className="w-[400.63px] pl-[83.15px] h-[20.3px]">Tin No data</p>
        <p className="w-[204.09px] pl-[41.57px]">Terms</p>
      </div>
      <div className="flex h-[32px]">
        <p className="w-[400.63px] pl-[83.15px]">Address</p>
        <p className="w-[204.09px] pl-[113.38px]">104</p>
      </div>
      <div className="flex">
        <p className="w-[290px] pl-[109.6px]">Business style</p>
      </div>
      <div className="mx-[26.4px] mt-[32px] h-[321.26px] border">
        <table className="border-collapse w-full">
          <tbody>
            {data.slice(1, 11).map((row, index) => (
              <tr key={index} className="text-[10px] text-center">
                <td className="w-[68.04px] h-[20px]">{row[10]}</td>
                <td className="w-[52.914px] h-[20px]">{row[11]}</td>
                <td
                  className={`w-[234.331px] h-[20px] ${
                    row[9]?.length > 41 ? "text-[7px]" : ""
                  }`}
                >
                  {row[9]}
                </td>
                <td className="w-[79.371px] h-[20px]">{row[13]}</td>
                <td className="w-[102.05px] h-[20px]">{row[15]}</td>
              </tr>
            ))}
            <tr className="text-[10px] text-center">
              <td className="w-[68.04px] h-[20px]">1</td>
              <td className="w-[52.914px] h-[20px]">Unit</td>
              <td className={`w-[234.331px] h-[20px]`}>
                Avenis UN125NE Pearl Mirage White
              </td>
              <td className="w-[68.04px] h-[20px]">1000</td>
              <td className="w-[102.05px] h-[20px]">1000</td>
            </tr>
            <tr className="text-[10px] text-center">
              <td className="w-[68.04px] h-[20px]">1</td>
              <td className="w-[52.914px] h-[20px]">Unit</td>
              <td className={`w-[234.331px] h-[20px]`}>
                Avenis UN125NE Pearl Mirage White
              </td>
              <td className="w-[79.371px] h-[20px]">1000</td>
              <td className="w-[102.05px] h-[20px]">1000</td>
            </tr>
            <tr className="text-[10px] text-center">
              <td className="w-[52.914px] h-[20px]">1</td>
              <td className="w-[52.914px] h-[20px]">Unit</td>
              <td className={`w-[234.331px] h-[20px]`}>
                Avenis UN125NE Pearl Mirage White
              </td>
              <td className="w-[79.371px] h-[20px]">1000</td>
              <td className="w-[102.05px] h-[20px]">1000</td>
            </tr>
            <tr className="text-[10px] text-center">
              <td className="w-[52.914px] h-[20px]">1</td>
              <td className="w-[52.914px] h-[20px]">Unit</td>
              <td className={`w-[234.331px] h-[20px]`}>
                Avenis UN125NE Pearl Mirage White
              </td>
              <td className="w-[79.371px] h-[20px]">1000</td>
              <td className="w-[102.05px] h-[20px]">1000</td>
            </tr>
            <tr className="text-[10px] text-center">
              <td className="w-[52.914px] h-[20px]">1</td>
              <td className="w-[52.914px] h-[20px]">Unit</td>
              <td className={`w-[234.331px] h-[20px]`}>
                Avenis UN125NE Pearl Mirage White
              </td>
              <td className="w-[79.371px] h-[20px]">1000</td>
              <td className="w-[102.05px] h-[20px]">1000</td>
            </tr>
            <tr className="text-[10px] text-center">
              <td className="w-[52.914px] h-[20px]">1</td>
              <td className="w-[52.914px] h-[20px]">Unit</td>
              <td className={`w-[234.331px] h-[20px]`}>
                Avenis UN125NE Pearl Mirage White
              </td>
              <td className="w-[79.371px] h-[20px]">1000</td>
              <td className="w-[102.05px] h-[20px]">1000</td>
            </tr>
            <tr className="text-[10px] text-center">
              <td className="w-[52.914px] h-[20px]">1</td>
              <td className="w-[52.914px] h-[20px]">Unit</td>
              <td className={`w-[234.331px] h-[20px]`}>
                Avenis UN125NE Pearl Mirage White
              </td>
              <td className="w-[79.371px] h-[20px]">1000</td>
              <td className="w-[102.05px] h-[20px]">1000</td>
            </tr>
            <tr className="text-[10px] text-center">
              <td className="w-[52.914px] h-[20px]">1</td>
              <td className="w-[52.914px] h-[20px]">Unit</td>
              <td className={`w-[234.331px] h-[20px]`}>
                Avenis UN125NE Pearl Mirage White
              </td>
              <td className="w-[79.371px] h-[20px]">1000</td>
              <td className="w-[102.05px] h-[20px]">1000</td>
            </tr>
          </tbody>
        </table>+
      </div>
      <div className="mx-[26.4px] h-[139px] -mt-[5px]">
        <table className="border-collapse w-full">
          <tbody>
            <tr className="text-[10px]">
              <td className="h-[20px] w-[120.954px]"></td>
              <td className="h-[20px] w-[177.641px]">PHP0.00</td>
              <td className="h-[20px] w-[136.061px]"></td>
              <td className="h-[20px] w-[102.05px] text-center">PHP142,857.14</td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[20px] w-[120.954px]"></td>
              <td className="h-[20px] w-[177.641px]">PHP0.00</td>
              <td className="h-[20px] w-[136.061px]"></td>
              <td className="h-[20px] w-[102.05px] text-center">17,142.86</td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[20px] w-[120.954px]"></td>
              <td className="h-[20px] w-[177.641px]">PHP0.00</td>
              <td className="h-[20px] w-[136.061px]"></td>
              <td className="h-[20px] w-[102.05px] text-center"></td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[20px] w-[120.954px]"></td>
              <td className="h-[20px] w-[177.641px]">PHP17,142.86</td>
              <td className="h-[20px] w-[136.061px]"></td>
              <td className="h-[20px] w-[102.05px] text-center"></td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[20px] w-[120.954px]"></td>
              <td className="h-[20px] w-[177.641px]"></td>
              <td className="h-[20px] w-[136.061px]"></td>
              <td className="h-[20px] w-[102.05px] text-center">PHP160,000.00</td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[20px] w-[120.954px]"></td>
              <td className="h-[20px] w-[177.641px]"></td>
              <td className="h-[20px] w-[136.061px]"></td>
              <td className="h-[20px] w-[102.05px] text-center">PHP160,000.00</td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[20px] w-[120.954px]"></td>
              <td className="h-[20px] w-[177.641px]"></td>
              <td className="h-[20px] w-[136.061px]"></td>
              <td className="h-[20px] w-[102.05px] text-center">PHP160,000.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Size6Sales;
