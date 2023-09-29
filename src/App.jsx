import { useState } from "react";
import "./App.css";
import companiesJson from "./companies.json";
import technJson from "./technologies.json";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";

function App() {
  const [companies, setCompanies] = useState(companiesJson);
  const [technologies, setTechnologies] = useState(technJson);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage companies={companies}/>} />
        <Route path="/company/:companySlug" element={<CompanyPage companies={companies} technologies={technologies} />} />
        <Route path="/tech/:slug" element={<TechnologyPage technologies={technologies}/>} />
      </Routes>
    </div>
  );
}

export default App;
