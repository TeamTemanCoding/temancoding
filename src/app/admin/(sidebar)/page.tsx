import type { Metadata } from "next";
import React from "react";
import { EcommerceMetrics } from "~/components/admin/e-commerce/EcommerceMetrics";
import MonthlySalesChart from "~/components/admin/e-commerce/MonthlySalesChart";
import MonthlyTarget from "~/components/admin/e-commerce/MonthlyTarget";
import StatisticsChart from "~/components/admin/e-commerce/StatisticsChart";

export const metadata: Metadata = {
  title:
    "Dashboard | Teman Coding",
  description: "Dashboard Teman Coding",
};

export default function Ecommerce() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6 dark:bg-white/[0.03]">
      <div className="col-span-12 space-y-6 xl:col-span-7">

        <EcommerceMetrics />

        <MonthlySalesChart />
      </div>

      <div className="col-span-12 xl:col-span-5">
        <MonthlyTarget />
      </div>

      <div className="col-span-12">
        <StatisticsChart />
      </div>

      <div className="col-span-12 xl:col-span-5">
        {/* <DemographicCard /> */}
      </div>

      <div className="col-span-12 xl:col-span-7">
        {/* <RecentOrders /> */}
      </div>
    </div>
  );
}
