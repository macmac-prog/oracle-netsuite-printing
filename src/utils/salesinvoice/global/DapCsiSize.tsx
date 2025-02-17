"use client";
import { PrintPageProps } from "@/types/types";
import FormattedNumber from "@/utils/FormattedNumber";
import FormattedSumTotal from "@/utils/FormattedSumTotal";

const DapCsiSize = ({ data }: any) => {
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
    <div className="text-xs h-[793.7007874px] w-[608.50393701px]">
      <div className="flex h-[19.409448819px] mt-[113.0078740201px]">
        <p className="w-[391.18110236px] pl-[105.82677165px]">
          {data[1]?.[mainLineName] || ""}
        </p>
        <p className="w-[218.83464567px] pl-[60.472440945px]">
          {data[1]?.[date] || ""}
        </p>
      </div>
      <div className="flex h-[19.409448819px]">
        <p className="w-[391.18110236px] pl-[105.82677165px]">
          {data[1]?.[tinNumber] || ""}
        </p>
        <p className="w-[218.83464567px] pl-[60.472440945px]">
          {data[1]?.[terms] || ""}
        </p>
      </div>
      <div className="flex h-[38.818897638px]">
        <div className="w-[391.18110236px] pl-[105.82677165px]">
          <p className="h-[19.409448819px]">{data[1]?.[billingAddress].substring(0, 52) || ""}</p>
          <p className="h-[19.409448819px]">{data[1]?.[billingAddress].substring(52) || ""}</p>
        </div>
        <p className="w-[218.83464567px] pl-[136.06299213px]">
          {data[1]?.[oscaPwdIdNo] || ""}
        </p>
      </div>
      <div className="flex h-[19.409448819px]">
        <p className="w-[391.18110236px] pl-[137.95275591px]">
          {data[1]?.[businessStyle] || ""}
        </p>
        <p className="w-[218.83464567px] pl-[113.38582677px]">
          {data[1]?.[cardHolderSignatures] || ""}
        </p>
      </div>
      <div className="mx-[34.393700787px] mt-[29.102362205px] h-[321.25984252px]">
        <table className="border-collapse w-full">
          <tbody>
            {data.slice(1, 17).map((row: any, index: number) => (
              <tr key={index} className="text-[10px] text-center">
                <td className="w-[71.811023622px]">{row[quantity]}</td>
                <td className="w-[62.362204724px] h-[19.275590551px]">
                  {row[unitOfMeasurement]}
                </td>
                <td
                  className={`w-[238.48818898px] h-[19.275590551px] ${
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
      <div className="mx-[34.393700787px] h-[139.84251969px]">
        <table className="border-collapse w-full">
          <tbody>
            <tr className="text-[10px]">
              <td className="h-[19.275590551px] w-[131.90551181px]"></td>
              <td className="h-[19.275590551px] w-[185.57480315px] pl-[11.338582677px]">
                {FormattedSumTotal(data, totalSalesVatInclusive2, 3)}
              </td>
              <td className="h-[19.275590551px] w-[132.66141732px]"></td>
              <td className="h-[19.275590551px] w-[102.04724409px] text-center">
                {FormattedSumTotal(data, totalSalesVatInclusive, 3)}
              </td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[19.275590551px] w-[131.90551181px]"></td>
              <td className="h-[19.275590551px] w-[185.57480315px] pl-[11.338582677px]">
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
              <td className="h-[19.275590551px] w-[185.57480315px] pl-[11.338582677px]">
                {FormattedSumTotal(data, rateInclusiveVat, 3)}
              </td>
              <td className="h-[19.275590551px] w-[132.66141732px]"></td>
              <td className="h-[19.275590551px] w-[102.04724409px] text-center">
                {FormattedSumTotal(data, totalSalesVatInclusive2, 3)}
              </td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[19.275590551px] w-[131.90551181px]"></td>
              <td className="h-[19.275590551px] w-[185.57480315px] pl-[11.338582677px]">
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
              <td className="h-[19.275590551px] w-[185.57480315px] pl-[11.338582677px]"></td>
              <td className="h-[19.275590551px] w-[132.66141732px]"></td>
              <td className="h-[19.275590551px] w-[102.04724409px] text-center">
                {FormattedSumTotal(data, vatAmount2, 3)}
              </td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[19.275590551px] w-[131.90551181px]"></td>
              <td className="h-[19.275590551px] w-[185.57480315px] pl-[11.338582677px]"></td>
              <td className="h-[19.275590551px] w-[132.66141732px]"></td>
              <td className="h-[19.275590551px] w-[102.04724409px] text-center">
                {FormattedSumTotal(data, vatAmount3, 3)}
              </td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[19.275590551px] w-[131.90551181px]"></td>
              <td className="h-[19.275590551px] w-[185.57480315px] pl-[11.338582677px]"></td>
              <td className="h-[19.275590551px] w-[132.66141732px]"></td>
              <td className="h-[19.275590551px] w-[102.04724409px] text-center">
                {FormattedSumTotal(data, totalSalesVatInclusive, 3)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mx-[34.393700787px]">
        <div className="mt-[26.456692914px] ml-[332.976377952px]">
          <p className="text-[10px] text-center">
            {data[1]?.[cashier] || ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DapCsiSize;
