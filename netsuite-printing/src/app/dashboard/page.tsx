"use client";
import PrivateRoute from "@/components/privateroutes";
import { useAuth } from "@/context/authcontext";
import { useState } from "react";
import { FaPrint } from "react-icons/fa";
import * as XLSX from "xlsx";

export default function Page() {
  const { user } = useAuth();
  const [excelData, setExcelData] = useState<any[][]>([]);
  const [isFileUploaded, setIsFileUploaded] = useState<boolean>(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const data = event.target?.result as string;
      const workbook = XLSX.read(data, { type: "binary" });

      const worksheet = workbook.Sheets[workbook.SheetNames[0]];

      const jsonData: any[] = XLSX.utils.sheet_to_json(worksheet, {
        header: 1,
      });

      const maxColumns = Math.max(...jsonData.map((row) => row.length));

      const formattedData = jsonData.map((row) => {
        while (row.length < maxColumns) {
          row.push(null);
        }

        return row.map((cell: any) => {
          if (typeof cell === "number" && !isNaN(cell)) {
            const date = XLSX.utils.format_cell({ t: "d", v: cell });
            return date || cell;
          }
          return cell;
        });
      });

      setExcelData(formattedData);
    };
    setIsFileUploaded(true);
    reader.readAsBinaryString(file);
  };

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
    <PrivateRoute>
      <div className="mt-5 pl-5">
        <h2 className="text-2xl text-[#333] uppercase">
          Welcome to the official Oracle NetSuite Printing System,{" "}
          <span className="font-semibold">{user?.branchName}</span>!
        </h2>
      </div>
      <div className="mt-5 px-5">
        <div className="border border-[#005483] pl-5 py-5 w-3/12">
          <p className="mb-2 text-xl">{isFileUploaded ? 'Imported Data' : 'Import Data'}</p>
          <input
            type="file"
            accept=".xlsx, .xls, .csv"
            onChange={handleFileUpload}
          />
        </div>
        <div
          className={`w-full flex justify-end pr-5 ${
            isFileUploaded ? "py-2" : "py-4"
          } my-5 bg-[#dfe4eb]`}
        >
          {isFileUploaded ? (
            <div>
              <button className="flex items-center gap-2 font-semibold"><FaPrint size={20} color="#333"/>Print Now</button>
            </div>
          ) : (
            ""
          )}
        </div>
        {excelData.length > 0 && (
          <table
            className="border mt-3 text-sm"
            cellPadding="5"
            cellSpacing="0"
          >
            <thead>
              <tr className="bg-[#607799]">
                {excelData[0]?.map((header: string | null, index: number) => (
                  <th
                    key={index}
                    className="border-transparent p-1 text-center text-white"
                  >
                    {header || "Empty Column"}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {excelData.slice(1).map((row, rowIndex) => (
                <tr key={rowIndex}>
                  <td className="border p-1 text-center">
                    {row[internalIdColumnIndex] || ""}
                  </td>
                  <td className="border p-1 text-center">
                    {row[mainLineName] || ""}
                  </td>
                  <td className="border p-1 text-center">
                    {row[billingAddress] || ""}
                  </td>
                  <td className="border p-1 text-center">
                    {row[billingAddress1] || ""}
                  </td>
                  <td className="border p-1 text-center">
                    {row[billingAddress2] || ""}
                  </td>
                  <td className="border p-1 text-center">
                    {row[billingAddress3] || ""}
                  </td>
                  <td className="border p-1 text-center">
                    {row[taxNumber] || ""}
                  </td>
                  <td className="border p-1 text-center">{row[date] || ""}</td>
                  <td className="border p-1 text-center">{row[terms] || ""}</td>
                  <td className="border p-1 text-center">{row[item] || ""}</td>
                  <td className="border p-1 text-center">
                    {row[quantity] || ""}
                  </td>
                  <td className="border p-1 text-center">{row[units] || ""}</td>
                  <td className="border p-1 text-center">
                    {row[units1] || ""}
                  </td>
                  <td className="border p-1 text-center">
                    {row[itemRate] || ""}
                  </td>
                  <td className="border p-1 text-center">
                    {row[itemRate1] || ""}
                  </td>
                  <td className="border p-1 text-center">
                    {row[amount] || ""}
                  </td>
                  <td className="border p-1 text-center">
                    {row[totalSales] || ""}
                  </td>
                  <td className="border p-1 text-center">
                    {row[amountTax] || ""}
                  </td>
                  <td className="border p-1 text-center">
                    {row[netTax] || ""}
                  </td>
                  <td className="border p-1 text-center">
                    {row[transactionTotal] || ""}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </PrivateRoute>
  );
}
