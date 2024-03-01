import React from "react";
import { TbCoinRupee } from "react-icons/tb";
import { CiUser } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsGraphUpArrow } from "react-icons/bs";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../pages/dashboard.css";
import RecentOrdres from "../components/RecentOrdres";
import PieChart from "../components/PieChart";

export default function DashboardPage() {
  return (
    <div className="margin">
      <div className="d-flex">
        <div className="card">
          <div className="d-flex justify-content-between align-items-center">
            <i className="orders fs-1">
              <AiOutlineShoppingCart />
            </i>
            <div>
              <span>Orders</span>
              <h2>2,344</h2>
            </div>
          </div>
        </div>

        <div class="card">
          <div className="d-flex justify-content-between align-items-center">
            <i className=" users fs-1">
              <CiUser />
            </i>
            <div>
              <span>Users</span>
              <h2>234</h2>
            </div>
          </div>
        </div>

        <div class="card">
          <div className="d-flex justify-content-between align-items-center">
            <i className="sales fs-1">
              <TbCoinRupee />
            </i>
            <div>
              <span>Sales</span>
              <h2>234</h2>
            </div>
          </div>
        </div>

        <div class="card">
          <div className="d-flex justify-content-between align-items-center">
            <i className="graph fs-1">
              <BsGraphUpArrow />
            </i>
            <div>
              <span>Increase</span>
              <h2>30%</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex">
        <RecentOrdres />
        <div>
        <PieChart/>
        </div>
      </div>
    </div>
  );
}
