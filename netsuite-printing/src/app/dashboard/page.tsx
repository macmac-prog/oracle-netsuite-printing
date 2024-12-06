"use client";
import PrivateRoute from "@/components/privateroutes";
import { useAuth } from "@/context/authcontext";
import { useEffect, useRef, useState } from "react";
import { FaPrint } from "react-icons/fa";
import * as XLSX from "xlsx";

export default function Page() {
  const { user } = useAuth();
  const [excelData, setExcelData] = useState<any[][]>([]);
  const [isFileUploaded, setIsFileUploaded] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
        return row.map((cell: any, index: number) => {
          if (index === date && typeof cell === "number" && !isNaN(cell)) {
            const jsDate = new Date((cell - 25569) * 86400 * 1000);
            return jsDate.toLocaleDateString("en-US");
          }
          const columnsToFormat = [
            totalSales,
            amount,
            transactionTotal,
            amountTax,
            netTax,
          ];
          if (
            columnsToFormat.includes(index) &&
            typeof cell === "number" &&
            !isNaN(cell)
          ) {
            return new Intl.NumberFormat("en-US").format(cell);
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
          <p className="mb-2 text-xl">
            {isFileUploaded ? "Imported Data" : "Import Data"}
          </p>
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
            <>
              <div>
                <button
                  ref={buttonRef}
                  onClick={toggleDropdown}
                  className="flex items-center gap-2 font-semibold"
                >
                  <FaPrint size={20} color="#333" />
                  Print Now
                </button>
              </div>
              {isDropdownOpen && (
                <div
                  ref={dropdownRef}
                  className="absolute right-5 mt-10 bg-[#dfe4eb] border border-slate-900 shadow-xl"
                >
                  <button
                    onClick={() => window.print()}
                    className="w-full text-center text-sm font-medium text-[#333] py-1 hover:bg-white"
                  >
                    Recipt 1
                  </button>
                  <button className="w-full text-center text-sm font-medium text-[#333] py-1 hover:bg-white">
                    Recipt 2
                  </button>
                  <button className="w-full text-center text-sm font-medium text-[#333] py-1 hover:bg-white">
                    Recipt 3
                  </button>
                </div>
              )}
            </>
          ) : (
            ""
          )}
        </div>
        {/* {excelData.length > 0 && (
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
        )} */}
        <div className="my-5 flex justify-between text-sm text-[#333] px-10">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              <p>Internal ID</p>
              <p className="font-semibold">
                {excelData[2]?.[internalIdColumnIndex] || "N/A"}
              </p>
            </div>
            <div className="flex flex-col">
              <p>Mainline Name</p>
              <p className="font-semibold">
                {excelData[2]?.[mainLineName] || "N/A"}
              </p>
            </div>
            <div className="flex flex-col">
              <p>Billing Address</p>
              <p className="font-semibold">
                {excelData[2]?.[billingAddress] || "N/A"}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              <p>Tax Number</p>
              <p className="font-semibold">
                {excelData[2]?.[taxNumber] || "N/A"}
              </p>
            </div>
            <div className="flex flex-col">
              <p>Date</p>
              <p className="font-semibold">{excelData[2]?.[date] || "N/A"}</p>
            </div>
            <div className="flex flex-col">
              <p>Terms</p>
              <p className="font-semibold">{excelData[2]?.[terms] || "N/A"}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              <p>Item</p>
              <p className="font-semibold">{excelData[2]?.[item] || "N/A"}</p>
            </div>
            <div className="flex flex-col">
              <p>Quantity</p>
              <p className="font-semibold">
                {excelData[2]?.[quantity] || "N/A"}
              </p>
            </div>
            <div className="flex flex-col">
              <p>Units</p>
              <p className="font-semibold">{excelData[2]?.[units] || "N/A"}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              <p>Units</p>
              <p className="font-semibold">{excelData[2]?.[units] || "N/A"}</p>
            </div>
            <div className="flex flex-col">
              <p>Item Rate</p>
              <p className="font-semibold">
                {excelData[2]?.[itemRate] || "N/A"}
              </p>
            </div>
            <div className="flex flex-col">
              <p>Item Rate</p>
              <p className="font-semibold">
                {excelData[2]?.[itemRate1] || "N/A"}
              </p>
            </div>
          </div>
          {/* <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              <p>Amount</p>
              <p className="font-semibold">{excelData[2]?.[amount] || "N/A"}</p>
            </div>
            <div className="flex flex-col">
              <p>Total Sales (VAT Inclusive)</p>
              <p className="font-semibold">
                {excelData[2]?.[totalSales] || "N/A"}
              </p>
            </div>
            <div className="flex flex-col">
              <p>Amount (Tax)</p>
              <p className="font-semibold">
                {excelData[2]?.[amountTax] || "N/A"}
              </p>
            </div>
          </div> */}
          {/* <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              <p>Amount (Net of Tax)</p>
              <p className="font-semibold">{excelData[2]?.[netTax] || "N/A"}</p>
            </div>
            <div className="flex flex-col">
              <p>Amount (Transaction Total)</p>
              <p className="font-semibold">
                {excelData[2]?.[transactionTotal] || "N/A"}
              </p>
            </div>
          </div> */}
          <div>
            <table>
              <thead>
                <tr className="bg-[#607799]">
                  <th colSpan={2} className="text-white p-2 text-left">
                    SUMMARY
                  </th>
                </tr>
              </thead>
              <tbody className="bg-[#f1f1f1]">
                <tr>
                  <td className="text-left p-2">Amount</td>
                  <td className="text-right p-2 font-semibold">
                    {excelData[2]?.[amount] || "N/A"}
                  </td>
                </tr>
                <tr>
                  <td className="text-left p-2">Total Sales (VAT Inclusive)</td>
                  <td className="text-right p-2 font-semibold">
                    {excelData[2]?.[totalSales] || "N/A"}
                  </td>
                </tr>
                <tr>
                  <td className="text-left p-2">Amount (Tax)</td>
                  <td className="text-right p-2 font-semibold">
                    {excelData[2]?.[amountTax] || "N/A"}
                  </td>
                </tr>
                <tr>
                  <td className="text-left p-2">Amount (Net of Tax)</td>
                  <td className="text-right p-2 font-semibold">
                    {excelData[2]?.[netTax] || "N/A"}
                  </td>
                </tr>
                <tr>
                  <td className="text-left p-2">Amount (Transaction Total)</td>
                  <td className="text-right p-2 font-semibold">
                    {excelData[2]?.[transactionTotal] || "N/A"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-full flex justify-end pr-5 py-5 my-5 bg-[#dfe4eb]" />
      </div>
    </PrivateRoute>
  );
}
