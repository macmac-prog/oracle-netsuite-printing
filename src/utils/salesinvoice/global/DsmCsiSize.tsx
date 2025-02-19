"use client";
import { PrintPageProps } from "@/types/types";
import FormattedNumber from "@/utils/FormattedNumber";
import FormattedSumTotal from "@/utils/FormattedSumTotal";

const DsmCsiSize = ({ data }: any) => {
  const mainLineName = 0;
  const date = 1;
  const taxNumber = 2;
  const terms = 3;
  const billingAddress = 4;
  const oscaPwdIdNo = 5;
  const businessStyle = 6;
  const cardHolderSignatures = 7;
  const quantity = 8;
  const unitOfMeasurement = 9;
  const articles = 10;
  const rateInclusiveVat = 11;
  const totalAmount = 12;
  const totalSalesVatExclusive = 13;
  const vatAmount = 14;
  const totalSalesVatInclusive = 15;
  const vatAmount2 = 16;
  const totalSalesVatExclusive2 = 17;
  const totalSalesVatExclusive3 = 18;
  const vatAmount3 = 19;
  const totalSalesVatInclusive2 = 20;
  const serialNumber = 21;
  const chassisNumber = 22;
  const conductionSticker = 23;
  const tinNumber = 24;
  const cashier = 25;
  const unitPrice = 26;

  return (
    <div className="text-xs h-[741.54330709px] w-[581.66929134px]">
      <div className="flex items-center h-[20.677165354px] mt-[97.5511522px]">
        <p className="w-[362.83464567px] pl-[86.929133858px]">
          {data[1]?.[mainLineName] || ""}
        </p>
        <p className="w-[214.67716535px] pl-[56.692913386px]">
          {data[1]?.[date] || ""}
        </p>
      </div>
      <div className="flex items-center h-[20.677165354px]">
        <p className="w-[362.83464567px] pl-[86.929133858px]">
          {data[1]?.[tinNumber] || ""}
        </p>
        <p className="w-[214.67716535px] pl-[56.692913386px]">
          {data[1]?.[terms] || ""}
        </p>
      </div>
      <div className="flex items-center h-[20.677165354px]">
          <p className={`pl-[86.929133858px] h-[20.677165354px] ${data[1]?.[billingAddress]?.length > 90 ? 'text-[9px]' : ''}`}>{data[1]?.[billingAddress] || ""}</p>
      </div>
      <div className="flex items-center h-[20.677165354px]">
        <p className="w-[362.83464567px] pl-[137.95275591px]">
          {data[1]?.[businessStyle] || ""}
        </p>
      </div>
      <div className="mx-[26.078740157px] mt-[23.763779528px] h-[315.59055118px]">
        <table className="border-collapse w-full">
          <tbody>
            {data.slice(1, 17).map((row: any, index: number) => (
              <tr key={index} className="text-[10px] text-center">
                <td className="w-[71.811023622px]">{row[quantity]}</td>
                <td className="w-[62.362204724px] h-[19.275590551px]">
                  {row[unitOfMeasurement]}
                </td>
                <td
                  className={`w-[230.92913386px] h-[19.275590551px] ${
                    row[articles]?.length > 41 ? "text-[7px]" : ""
                  }`}
                >
                  {row[articles]}
                </td>
                <td className="w-[79.748031496px] h-[19.275590551px]">
                  {FormattedNumber(row[unitPrice])}
                </td>
                <td className="w-[102.38740157px] h-[19.275590551px]">
                  {FormattedNumber(row[totalAmount])}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mx-[26.078740157px] h-[136.81889764px]">
        <table className="border-collapse w-full">
          <tbody>
            <tr className="text-[10px]">
              <td className="h-[19.275590551px] w-[131.90551181px]"></td>
              <td className="h-[19.275590551px] w-[175.37007874px] pl-[11.338582677px]">
                {FormattedSumTotal(data, totalSalesVatInclusive2, 3)}
              </td>
              <td className="h-[19.275590551px] w-[132.66141732px]"></td>
              <td className="h-[19.275590551px] w-[102.04724409px] text-center">
                {FormattedSumTotal(data, totalSalesVatInclusive, 3)}
              </td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[19.275590551px] w-[131.90551181px]"></td>
              <td className="h-[19.275590551px] w-[175.37007874px] pl-[11.338582677px]">
                {/* {FormattedSumTotal(data, rateInclusiveVat, 3)} VAT EXEMPT SALES */}
                0.00
              </td>
              <td className="h-[19.275590551px] w-[132.66141732px]"></td>
              <td className="h-[19.275590551px] w-[102.04724409px] text-center">
                {/* {FormattedSumTotal(data, totalSalesVatInclusive2, 3)} LESS: SC/PWD DISCOUNT */}
                0.00
              </td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[19.275590551px] w-[131.90551181px]"></td>
              <td className="h-[19.275590551px] w-[175.37007874px] pl-[11.338582677px]">
                {FormattedSumTotal(data, rateInclusiveVat, 3)}
              </td>
              <td className="h-[19.275590551px] w-[132.66141732px]"></td>
              <td className="h-[19.275590551px] w-[102.04724409px] text-center">
                {FormattedSumTotal(data, totalSalesVatInclusive2, 3)}
              </td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[19.275590551px] w-[131.90551181px]"></td>
              <td className="h-[19.275590551px] w-[175.37007874px] pl-[11.338582677px]">
                {FormattedSumTotal(data, vatAmount, 3)}
              </td>
              <td className="h-[19.275590551px] w-[132.66141732px]"></td>
              <td className="h-[19.275590551px] w-[102.04724409px] text-center">
                {/* {FormattedSumTotal(data, totalSalesVatInclusive2, 3)} LESS: SC/PWD DISCOUNT */}
                0.00
              </td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[19.275590551px] w-[131.90551181px]"></td>
              <td className="h-[19.275590551px] w-[175.37007874px] pl-[11.338582677px]"></td>
              <td className="h-[19.275590551px] w-[132.66141732px]"></td>
              <td className="h-[19.275590551px] w-[102.04724409px] text-center">
                {FormattedSumTotal(data, vatAmount2, 3)}
              </td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[19.275590551px] w-[131.90551181px]"></td>
              <td className="h-[19.275590551px] w-[175.37007874px] pl-[11.338582677px]"></td>
              <td className="h-[19.275590551px] w-[132.66141732px]"></td>
              <td className="h-[19.275590551px] w-[102.04724409px] text-center">
                {FormattedSumTotal(data, vatAmount3, 3)}
              </td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[19.275590551px] w-[131.90551181px]"></td>
              <td className="h-[19.275590551px] w-[175.37007874px] pl-[11.338582677px]"></td>
              <td className="h-[19.275590551px] w-[132.66141732px]"></td>
              <td className="h-[19.275590551px] w-[102.04724409px] text-center">
                {FormattedSumTotal(data, totalSalesVatInclusive, 3)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mx-[26.078740157px]">
        <div className="mt-[18.897637795px] ml-[332.976377952px]">
          <p className="text-[10px] text-center">
            {data[1]?.[cashier] || ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DsmCsiSize;
