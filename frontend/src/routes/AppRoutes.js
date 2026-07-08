import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import InfoBar from "../components/InfoBar";
import LiveScores from "../pages/LiveScores";
import Schedule from "../pages/Schedule";
import Rankings from "../pages/Rankings";
import StatsPage from "../pages/StatsPage";

// New IPL Pages
import IPLSchedule from "../pages/IPL/IPLSchedule";
import IPLTable from "../pages/IPL/IPLTable";
import IPLStats from "../pages/IPL/IPLStats";
import IPLSquads from "../pages/IPL/IPLSquads";

const AppRoutes = () => {
  const location = useLocation();
  const hideInfoBar = location.pathname.startsWith("/IPL");

  return (
    <div className="bg-gray-800 min-h-screen">
      <Navbar />
      {!hideInfoBar && <InfoBar />}
      <Routes>
        <Route path="/" element={<LiveScores />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/rankings" element={<Rankings />} />
        <Route path="/IPL/schedule" element={<IPLSchedule />} />
        <Route path="/IPL/table" element={<IPLTable />} />
        <Route path="/IPL/stats" element={<IPLStats />} />
        <Route path="/IPL/squads" element={<IPLSquads />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
