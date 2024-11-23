import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Violation } from "../data/violations";

interface ViolationsTableProps {
  data: Violation[];
}

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "type", headerName: "Type", width: 150 },
  { field: "description", headerName: "Description", width: 300 },
  { field: "date", headerName: "Date", width: 150 },
];

const ViolationsTable: React.FC<ViolationsTableProps> = ({ data }) => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 5, page: 0 },
          },
        }}
        pageSizeOptions={[5, 10, 20]} // Альтернативы для выбора размера страницы
      />
    </div>
  );
};

export default ViolationsTable;
