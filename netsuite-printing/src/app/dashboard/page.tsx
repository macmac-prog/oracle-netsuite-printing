"use client";
import PrivateRoute from "@/components/privateroutes";
import { useAuth } from "@/context/authcontext";
import { ChangeEvent, useState } from "react";
import * as XLSX from "xlsx";

interface ExcelRow {
  [key: string]: string | number | boolean | undefined;
}

export default function Page() {
  const { user } = useAuth();
  const [data, setData] = useState<ExcelRow[]>([]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Files can be null, so we use optional chaining
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const binaryStr = event.target?.result;
      if (typeof binaryStr === "string") {
        const workbook = XLSX.read(binaryStr, { type: "binary" });

        // Assuming the first sheet is the one you want
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        // Convert sheet to JSON format (an array of objects)
        const jsonData = XLSX.utils.sheet_to_json<ExcelRow>(sheet);
        setData(jsonData);
      }
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <PrivateRoute>
      <div className="mt-5 pl-5">
        <h2 className="text-2xl text-[#333]">
          Welcome to the official Oracle NetSuite Printing System,{" "}
          <span className="font-semibold">{user?.branchName}</span>!
        </h2>
      </div>
      <div className="mt-5 pl-5">
        <input
          type="file"
          accept=".xlsx, .xls, .csv"
          onChange={handleFileUpload}
        />
        <table className="border mt-5">
          <thead>
            <tr className="border-b">
              {data[0] &&
                Object.keys(data[0]).map((key) => <th key={key}>{key}</th>)}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value, colIndex) => (
                  <td key={colIndex}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PrivateRoute>
  );
}
