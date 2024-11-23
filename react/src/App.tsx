import React from "react";
import ViolationsTable from "./components/ViolationsTable";
import ViolationFilters from "./components/ViolationFilters";
import ViolationCharts from "./components/ViolationCharts";
import ExportData from "./components/ExportData";
import { violations } from "./data/violations";
import "./App.css"; // Подключение стилей

const App: React.FC = () => {
  return (
    <div className="app-container">
      <h1>Violation Dashboard</h1>
      <ViolationFilters onFilterChange={() => {}} />
      <ViolationsTable data={violations} />
      <ViolationCharts data={violations} />
      <ExportData data={violations} />
    </div>
  );
};

export default App;
