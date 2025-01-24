import { useState } from "react";

export default function DragAndDropComponent({ handleFileUpload }: any) {
  const [isOnDragOver, setIsDragOver] = useState(false);

  const handleDragOver = () => {
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };
  return (
    <div
      className={`w-80 h-64 p-6 border-blue-500 rounded-lg bg-white text-center flex flex-col justify-center items-center hover:bg-blue-50 transition-all ${
        isOnDragOver ? "bg-blue-100 border-l border-top" : "border-dashed border-2"
      }`}
      id="drop-area"
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      <div className="text-blue-600 text-lg font-medium" id="message">
        Drag and drop an Excel file here
      </div>
      <div className="mt-2 text-gray-500 text-sm" id="file-info" />
      <div className="mt-2 text-red-500 text-sm" id="error-message" />
    </div>
  );
}
