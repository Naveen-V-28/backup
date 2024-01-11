import React from "react";
import { Input } from "reactstrap";

const Footer = () => {
  return (
    <div className="nk-footer nk-footer-fluid bg-lighter">
      <div className="container-xl">
        <div className="nk-footer-wrap">
          <div className="nk-footer-copyright">
            {" "}
            &copy; 2022 Dashlite React Template by <a href="https://softnio.com">Softnio</a>
          </div>
          <div className="nk-footer-links">
            <ul className="nav nav-sm">
              <li className="nav-item">
                <div className="form-control-select">
                  <Input size='sm' type="select" name="select" id="default-4">
                    <option value="default_option">English</option>
                    <option value="option_select_name">Tamil</option>
                    <option value="option_select_name">Hindi</option>
                  </Input>
                </div>

              </li>
              <li className="nav-item">

              </li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
