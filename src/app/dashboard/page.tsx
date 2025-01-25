"use client";
import PrivateRoute from "@/components/privateroutes";
import { useAuth } from "@/context/authcontext";
import React, { useEffect, useRef, useState } from "react";
import { FaCircleNotch, FaPrint, FaUpload } from "react-icons/fa";
import * as XLSX from "xlsx";
import PrintPage from "../print/page";
import ReactDOM from "react-dom/client";
import { FaXmark } from "react-icons/fa6";
import { FormatFileSize } from "@/utils/SizeFormat/FormatFileSize";
import DragAndDropComponent from "@/components/DragAndDropComponent";
import FormattedNumber from "@/utils/FormattedNumber";

export default function Page() {
  const { user } = useAuth();
  const [excelData, setExcelData] = useState<any[]>([]);
  const [isFileUploaded, setIsFileUploaded] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [fileInfo, setFileInfo] = useState<{ name: string; size: string }>({
    name: "",
    size: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  // const internalIdColumnIndex = 0;
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

  // const billingAddress1 = 2;
  // const billingAddress2 = 3;
  // const billingAddress3 = 5;
  // const item = 9;
  // const units1 = 12;
  // const itemRate = 13;
  // const itemRate1 = 14;
  // const amount = 15;
  // const amountTax = 17;
  // const netTax = 18;
  // const transactionTotal = 19;

  const handlePrint = (componentType: string) => {
    const printWindow = window.open("", "_blank");
    if (printWindow) {
      const printContent = (
        <PrintPage componentType={componentType} data={excelData} />
      );

      const printDocument = printWindow.document;
      printDocument.open();
      printDocument.write(`
        <html>
        <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <title>
        Print
        </title>
        <style>`);
      printDocument.write(`
        @page{
        margin: 0;
        }
        body {
          font-family: Arial, sans-serif;
        }
      `);
      printDocument.write("</style></head><body>");
      printDocument.write('<div id="root"></div>');
      printDocument.write("</body></html>");
      printDocument.close();

      printWindow.onload = () => {
        const rootElement = printWindow.document.getElementById("root");
        if (rootElement) {
          const reactRoot = ReactDOM.createRoot(rootElement);
          reactRoot.render(printContent);

          setTimeout(() => {
            printWindow.focus();
            printWindow.print();
          }, 50);
        }
      };
    }
  };

  const printOptions = [
    {
      label: "Collection Receipt",
      action: () => handlePrint("Collection Receipt"),
    },
    {
      label: "Cash Sales Invoice",
      action: () => handlePrint("Cash Sales Invoice"),
    },
  ];

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

  const handleFileUpload = (e: any) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const fileName = file.name;

    const fileSize = FormatFileSize(file.size);

    setFileInfo({
      name: fileName,
      size: fileSize,
    });

    const reader = new FileReader();
    reader.onload = (event) => {
      const data = event.target?.result;

      const workbook = XLSX.read(data, { type: "binary" });

      const worksheet = workbook.Sheets[workbook.SheetNames[0]];

      const jsonData: any[] = XLSX.utils.sheet_to_json(worksheet, {
        header: 1,
      });

      const stringData = jsonData.map((row) =>
        row.map((cell: any) => {
          return String(cell);
        })
      );

      setExcelData(stringData);
    };

    setIsFileUploaded(true);
    reader.readAsBinaryString(file);

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  };

  const handleRemoveFile = () => {
    setExcelData([]);
    setFileInfo({ name: "", size: "" });
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    setIsFileUploaded(false);
  };

  const handleUploadFile = () => fileInputRef.current?.click();

  return (
    <PrivateRoute>
      <div className="mt-5 pl-5">
        <h2 className="text-2xl text-[#333] uppercase">
          Welcome to the official Oracle NetSuite Printing System,{" "}
          <span className="font-semibold">{user?.branchName}</span>!
        </h2>
      </div>
      <div className="mt-5 px-5">
        <div className="border border-[#005483] pl-5 py-5">
          <p className="mb-2 text-xl font-bold">
            {excelData.length > 0 ? "Preview Data" : "Import Data"}
          </p>
          <div>
            <input
              ref={fileInputRef}
              type="file"
              accept=".xlsx, .xls, .csv"
              className="hidden"
              id="fileInput"
              onChange={handleFileUpload}
            />
            <div className="flex gap-2">
              <button
                type="button"
                onClick={handleUploadFile}
                className="p-2 flex gap-2 items-center bg-blue-500/80 text-white hover:bg-blue-600/80 hover:translate-x-1 hover:-translate-y-1 transition-all duration-300 ease-in-out rounded-md"
              >
                {isLoading ? (
                  <>
                    <FaCircleNotch
                      size={20}
                      color="#fff"
                      className="animate-spin"
                    />{" "}
                    Uploading
                  </>
                ) : (
                  <>
                    <FaUpload size={20} color="#fff" /> Upload File
                  </>
                )}
              </button>
              {excelData.length > 0 && (
                <button
                  type="button"
                  onClick={handleRemoveFile}
                  className="p-2 flex gap-2 items-center bg-red-500/80 text-white hover:bg-red-600/80 hover:translate-x-1 hover:-translate-y-1 transition-all duration-300 ease-in-out rounded-md"
                >
                  <FaXmark size={20} color="#fff" /> Remove
                </button>
              )}
            </div>
            {fileInfo.name && (
              <div className="mt-2">
                <p>
                  <strong>File Name:</strong> {fileInfo.name}
                </p>
                <p>
                  <strong>File Size:</strong> {fileInfo.size}
                </p>
              </div>
            )}
          </div>
        </div>
        <div
          className={`w-full flex justify-end pr-5 ${
            isFileUploaded ? "py-2" : "py-4"
          } my-5 bg-[#dfe4eb]`}
        >
          {isFileUploaded && (
            <>
              <div>
                <button
                  ref={buttonRef}
                  onClick={toggleDropdown}
                  className={`flex items-center gap-2 font-semibold ${
                    isLoading && "opacity-0"
                  }`}
                >
                  <FaPrint size={20} color="#333" />
                  Print Now
                </button>
              </div>
              {isDropdownOpen && (
                <div
                  ref={dropdownRef}
                  className="absolute flex flex-col right-5 mt-10 bg-[#dfe4eb] border border-slate-200 shadow-xl"
                >
                  {printOptions.map((option, index) => (
                    <button
                      key={index}
                      onClick={option.action}
                      className="px-2 text-center text-sm font-medium text-[#333] py-1 hover:bg-white"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
        {isLoading ? (
          <div className="text-blue-500 flex justify-center items-center h-96">
            <FaCircleNotch size={50} className="animate-spin" />
          </div>
        ) : excelData && excelData.length > 0 ? (
          excelData.slice(1).map((row, rowIndex) => (
            <div key={rowIndex}>
              <div className="my-5 flex justify-between text-sm text-[#333] px-10">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col">
                    <p>Chassis Number</p>
                    <p className="font-semibold">
                      {row[chassisNumber] || "N/A"}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p>Mainline Name</p>
                    <p className="font-semibold">
                      {row[mainLineName] || "N/A"}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p>Billing Address</p>
                    <p className="font-semibold">
                      {row[billingAddress] || "N/A"}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p>Tin Number</p>
                    <p className="font-semibold">{row[tinNumber] || "N/A"}</p>
                  </div>
                  <div className="flex flex-col">
                    <p>Cashier</p>
                    <p className="font-semibold">{row[cashier] || "N/A"}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col">
                    <p>Tax Number</p>
                    <p className="font-semibold">{row[taxNumber] || "N/A"}</p>
                  </div>
                  <div className="flex flex-col">
                    <p>Date</p>
                    <p className="font-semibold">{row[date] || "N/A"}</p>
                  </div>
                  <div className="flex flex-col">
                    <p>Terms</p>
                    <p className="font-semibold">{row[terms] || "N/A"}</p>
                  </div>
                  <div className="flex flex-col">
                    <p>Serial Number</p>
                    <p className="font-semibold">
                      {row[serialNumber] || "N/A"}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col">
                    <p>Articles</p>
                    <p className="font-semibold">{row[articles] || "N/A"}</p>
                  </div>
                  <div className="flex flex-col">
                    <p>Quantity</p>
                    <p className="font-semibold">{row[quantity] || "N/A"}</p>
                  </div>
                  <div className="flex flex-col">
                    <p>Unit of Measurement</p>
                    <p className="font-semibold">
                      {row[unitOfMeasurement] || "N/A"}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p>Conduction Sticker</p>
                    <p className="font-semibold">
                      {row[conductionSticker] || "N/A"}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col">
                    <p>OSCA/PWD ID No.</p>
                    <p className="font-semibold">{row[oscaPwdIdNo] || "N/A"}</p>
                  </div>
                  <div className="flex flex-col">
                    <p>Business Style</p>
                    <p className="font-semibold">
                      {row[businessStyle] || "N/A"}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p>Cardholder's Signature</p>
                    <p className="font-semibold">
                      {row[cardHolderSignatures] || "N/A"}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p>Unit Price</p>
                    <p className="font-semibold">
                      {FormattedNumber(row[totalAmount]) || "0.00"}
                    </p>
                  </div>
                </div>
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
                        <td className="text-left p-2">
                          Total Sales (VAT Inclusive)
                        </td>
                        <td className="text-right p-2 font-semibold">
                          {FormattedNumber(row[totalSalesVatInclusive]) ||
                            "0.00"}
                        </td>
                      </tr>
                      <tr>
                        <td className="text-left p-2">Less: VAT</td>
                        <td className="text-right p-2 font-semibold">
                          {FormattedNumber(row[vatAmount]) || "0.00"}
                        </td>
                      </tr>
                      <tr>
                        <td className="text-left p-2">Amount: Net of VAT</td>
                        <td className="text-right p-2 font-semibold">
                          {FormattedNumber(row[totalSalesVatExclusive]) ||
                            "0.00"}
                        </td>
                      </tr>
                      <tr>
                        <td className="text-left p-2">Amount Due</td>
                        <td className="text-right p-2 font-semibold">
                          {FormattedNumber(row[totalSalesVatExclusive2]) ||
                            "0.00"}
                        </td>
                      </tr>
                      <tr>
                        <td className="text-left p-2">Add: VAT</td>
                        <td className="text-right p-2 font-semibold">
                          {FormattedNumber(row[vatAmount2]) || "0.00"}
                        </td>
                      </tr>
                      <tr>
                        <td className="text-left p-2">TOTAL AMOUNT DUE</td>
                        <td className="text-right p-2 font-semibold">
                          {FormattedNumber(row[totalSalesVatInclusive]) ||
                            "0.00"}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="w-full flex justify-end pr-5 py-5 my-5 bg-[#dfe4eb]" />
            </div>
          ))
        ) : (
          <div className="flex justify-center my-5">
            <DragAndDropComponent
              setFileInfo={setFileInfo}
              setExcelData={setExcelData}
              setIsFileUploaded={setIsFileUploaded}
              handleUploadFile={handleUploadFile}
              setIsLoading={setIsLoading}
            />
          </div>
        )}
      </div>
    </PrivateRoute>
  );
}
