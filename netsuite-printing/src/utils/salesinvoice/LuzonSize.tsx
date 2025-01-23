"use client";
import { PrintPageProps } from "@/types/types";

const LuzonSize: React.FC<PrintPageProps> = ({ data }) => {
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
  const totalSalesVatInclusive2 = 19.275590551;
  const serialNumber = 21;
  const chassisNumber = 22;
  const conductionSticker = 23;
  const tinNumber = 24;
  const cashier = 25;
  const unitPrice = 26;

  return (
    <div className="text-[10px] h-[718.11px] w-[566.929px] border">
      <div className="flex mt-[27px]">
        <div>
          <p className="w-full text-[10px]">Mr. Silvestre Lumapas</p>
          <p className="w-full text-[10px]">1231321564548974432</p>
          <p className="w-full text-[10px]">
            JA Clarin Street, Tagbilaran City Bohol 6300 Philippines Country
          </p>
          <p className="w-full text-[10px]">Business Style</p>
        </div>
        <div>
          <p className="w-full text-[10px]">Date</p>
          <p className="w-full text-[10px]">Terms</p>
          <p className="w-full text-[10px]">Osca/pwd</p>
        </div>
      </div>
      <div className="flex mt-[10px]"></div>
      <div className="flex mt-[px] h-[29px]"></div>
      <div className="mx-[27.212598425px] mt-[26.456692913px] h-[313.32283465px] border">
        <table className="border-collapse w-full">
          <tbody>
            {data.slice(1, 11).map((row, index) => (
              <tr key={index} className="text-[10px] text-center">
                <td className="w-[71.433070866px]">{row[quantity]}</td>
                <td className="w-[56.31496063px] h-[19.275590551px]">
                  {row[unitOfMeasurement]}
                </td>
                <td
                  className={`w-[231.30708661px] h-[19.275590551px] ${
                    row[articles]?.length > 41 ? "text-[7px]" : ""
                  }`}
                >
                  {row[articles]}
                </td>
                <td className="w-[79.37007874px] h-[19.275590551px]">
                  {row[unitPrice]}
                </td>
                <td className="w-[101.66929134px] h-[19.275590551px]">
                  {row[totalAmount]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mx-[27.212598425px] h-[135.68503937px] border">
        <table className="border-collapse w-full">
          <tbody>
            <tr className="text-[10px]">
              <td className="h-[19.275590551px] w-[127.7480315px]"></td>
              <td className="h-[19.275590551px] w-[181.03937008px]">
                {data[1]?.[vatAmount2] || "0.00"}
              </td>
              <td className="h-[19.275590551px] w-[145.51181102px]"></td>
              <td className="h-[19.275590551px] w-[98.645669291px] text-center">
                {data[1]?.[totalSalesVatInclusive] || "0.00"}
              </td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[19.275590551px] w-[127.7480315px]"></td>
              <td className="h-[19.275590551px] w-[181.03937008px]">
                {data[1]?.[vatAmount3] || "0.00"}
              </td>
              <td className="h-[19.275590551px] w-[145.51181102px]"></td>
              <td className="h-[19.275590551px] w-[98.645669291px] text-center">
                {data[1]?.[totalSalesVatInclusive2] || "0.00"}
              </td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[19.275590551px] w-[127.7480315px]"></td>
              <td className="h-[19.275590551px] w-[181.03937008px]">
                {data[1]?.[rateInclusiveVat] || "0.00"}
              </td>
              <td className="h-[19.275590551px] w-[145.51181102px]"></td>
              <td className="h-[19.275590551px] w-[98.645669291px] text-center">
                {data[1]?.[totalSalesVatExclusive] || "0.00"}
              </td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[19.275590551px] w-[127.7480315px]"></td>
              <td className="h-[19.275590551px] w-[181.03937008px]">
                {data[1]?.[vatAmount] || "0.00"}
              </td>
              <td className="h-[19.275590551px] w-[145.51181102px]"></td>
              <td className="h-[19.275590551px] w-[98.645669291px] text-center"></td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[19.275590551px] w-[127.7480315px]"></td>
              <td className="h-[19.275590551px] w-[181.03937008px]"></td>
              <td className="h-[19.275590551px] w-[145.51181102px]"></td>
              <td className="h-[19.275590551px] w-[98.645669291px] text-center">
                {data[1]?.[totalSalesVatExclusive] || "0.00"}
              </td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[19.275590551px] w-[127.7480315px]"></td>
              <td className="h-[19.275590551px] w-[181.03937008px]"></td>
              <td className="h-[19.275590551px] w-[145.51181102px]"></td>
              <td className="h-[19.275590551px] w-[98.645669291px] text-center">
                {data[1]?.[totalSalesVatExclusive2] || "0.00"}
              </td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[19.275590551px] w-[127.7480315px]"></td>
              <td className="h-[19.275590551px] w-[181.03937008px]"></td>
              <td className="h-[19.275590551px] w-[145.51181102px]"></td>
              <td className="h-[19.275590551px] w-[98.645669291px] text-center">
                {data[1]?.[totalSalesVatExclusive3] || "0.00"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mx-[27.212598425px]">
        <div className="mt-[24.566929134px] ml-[392.31496063px]">
          <p className="text-[10px] text-center">
            {data[1]?.[cashier] || "0.00"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LuzonSize;
