import React from "react";
import { saveAs } from "file-saver";
import { Violation } from "../data/violations";

interface ExportDataProps {
  data: Violation[];
}

const ExportData: React.FC<ExportDataProps> = ({ data }) => {
  const handleExport = () => {
    const csvData = data
      .map((violation) =>
        [
          violation.id,
          violation.type,
          violation.description,
          violation.date,
        ].join(",")
      )
      .join("\n");
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "violations.csv");
  };

  return <button onClick={handleExport}>Export to CSV</button>;
};

export default ExportData;
