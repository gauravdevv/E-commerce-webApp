import React from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import '../components/Navbar.css'

export default function Navbar() {
  return (
    <>
      <header className="header-upper navb py-3">
        <div className="container-xx">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link to={'/'} className="text-white fs-4">
                  <img className="w-25" src="images/shiba.png" alt="shiba" />
                  Dashboard
                </Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Product here.."
                  aria-label="Search Product here.."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3 " id="basic-addon2">
                  <BsSearch />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items justify-content-between">
                <div>
                  <Link className=" gap-10 d-flex align-items-center text-white">
                    <img src="images/compare.svg" alt="compare" />
                    <p className="mb-0">
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className=" gap-10 d-flex align-items-center text-white">
                    <img src="images/wishlist.svg" alt="wishlist" />
                    <p className="mb-0">
                      Favourite <br /> wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className=" gap-10 d-flex align-items-center text-white">
                    <img src="images/user.svg" alt="user" />
                    <p className="mb-0">
                      Log in <br /> My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className=" gap-10 d-flex align-items-center text-white">
                    <img src="images/cart.svg" alt="cart" />
                    <div className="d-flex flex-column">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">₹500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
