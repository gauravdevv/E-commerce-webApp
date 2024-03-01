import React from "react";
import { BsSearch } from "react-icons/bs";
import { TiThMenuOutline } from "react-icons/ti";
import { RiAdminLine } from "react-icons/ri";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-2">
        <div className="container-xx">
          <div className="row">
            <div className="col-6 ">
              <p className="text-white mb-0">
                Free Shipping Over ₹500 & Free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Contact No :{" "}
                <a className="text-white" href="tel:+91 7494933020">
                  +91 7494933020
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xx">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white fs-4">
                  <img className="w-25" src="images/shiba.png" alt="shiba" />
                  Dev. Shop
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
      <div className="header-bottom py-2 ">
        <div className="container-xx">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div class="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <TiThMenuOutline className="fs-5" />
                      <span className="me-5 d-inline-block">
                        Shop Categories
                      </span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link to={""} className="dropdown-item text-white">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link to={""} className="dropdown-item text-white">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link to={""} className="dropdown-item text-white">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="text-white-50">|</div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to={"/homepage"}>Home</NavLink>
                    <NavLink to={"/store"}>Our Store</NavLink>
                    <NavLink to={"/about"}>About</NavLink>
                    <NavLink to={"/blog"}>Blogs</NavLink>
                    <NavLink to={"/contact"}>Contact</NavLink>
                  </div>
                </div>
                <div class="dropdown admi">
                  <button
                    className="btn btn-secondary dropdown-toggle py-2"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span><RiAdminLine/> </span>
                    Admin
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <Link to={'/admin'} className="dropdown-item text-white">
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link to={''} className="dropdown-item text-white">
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
