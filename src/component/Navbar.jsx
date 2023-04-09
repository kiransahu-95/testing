import React from "react";
import { useState } from "react";

const Navbar = (props) => {
  const [fName, setFName] = useState("");
  const [Email, setEmail] = useState("");
  const [Father, setFather] = useState("");
  const [Mother, setMother] = useState("");
  const [Address, setAddress] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Password, setPassword] = useState("");

  const handleNavigate = () => {};
  const handleData = () => {
    console.log(
      "firstname",
      fName,
      Email,
      Father,
      Mother,
      Address,
      Mobile,
      Password
    );
    if (fName && Email && Father && Mother) {
      props.setTableData([
        ...props.tableData,
        {
          Name: fName,
          Email: Email,
          Father: Father,
          Mother: Mother,
        },
      ]);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        paddingInline: "25px",
        alignItems: "center",
        backgroundColor: "#1d242e",
      }}
    >
      <img
        src="https://graphicdesignjunction.com/wp-content/uploads/2015/01/001_logo_design.jpg "
        alt=""
        width={145}
      />

      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Create user
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div style={{ display: "flex" }}>
                <div style={{ padding: "10px 5px ", width: "100%" }}>
                  <p>Name</p>
                  <input
                    type="text"
                    style={{
                      borderRadius: 5,
                      border: "1px solid gray",
                      width: "100%",
                    }}
                    onChange={(event) => setFName(event.target.value)}
                  />
                </div>
                <div style={{ padding: "10px 5px ", width: "100%" }}>
                  <p>Email</p>
                  <input
                    type="Email"
                    style={{
                      borderRadius: 5,
                      border: "1px solid gray",
                      width: "100%",
                    }}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div style={{ display: "flex" }}>
                <div style={{ padding: "10px 5px ", width: "100%" }}>
                  <p> Father's Name</p>
                  <input
                    type="text"
                    style={{
                      borderRadius: 5,
                      border: "1px solid gray",
                      width: "100%",
                    }}
                    onChange={(e) => setFather(e.target.value)}
                  />
                </div>
                <div style={{ padding: "10px 5px ", width: "100%" }}>
                  <p>Mother's Name</p>
                  <input
                    type="text"
                    style={{
                      borderRadius: 5,
                      border: "1px solid gray",
                      width: "100%",
                    }}
                    onChange={(e) => setMother(e.target.value)}
                  />
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <div style={{ padding: "10px 5px ", width: "100%" }}>
                  <p>Address</p>
                  <input
                    type="text"
                    style={{
                      borderRadius: 5,
                      border: "1px solid gray",
                      width: "100%",
                    }}
                    onClick={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div style={{ padding: "10px 5px ", width: "100%" }}>
                  <p>Mobile</p>
                  <input
                    type="number"
                    style={{
                      borderRadius: 5,
                      border: "1px solid gray",
                      width: "100%",
                    }}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </div>
              </div>

              <div style={{ display: "flex" }}>
                <div style={{ padding: "10px 5px ", width: "100%" }}>
                  <p>password</p>
                  <input
                    type="password"
                    style={{
                      borderRadius: 5,
                      border: "1px solid gray",
                      width: "100%",
                    }}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div style={{ padding: "10px 5px ", width: "100%" }}>
                  <p> Confirm password</p>
                  <input
                    type="password"
                    style={{
                      borderRadius: 5,
                      border: "1px solid gray",
                      width: "100%",
                    }}
                  />
                </div>
              </div>

              <div style={{ display: "flex" }}>
                <div style={{ width: "100%", padding: "10px 5px" }}>
                  <p>Graduation</p>
                  <select
                    style={{
                      display: "flex",
                      borderRadius: 5,
                      border: "1px solid gray",
                      width: "100%",
                    }}
                  >
                    <option value="">B.tech</option>
                    <option value="">B.sc</option>
                    <option value="">B.com</option>
                  </select>
                </div>
                <div style={{ width: "100%", padding: "10px 5px" }}>
                  <p> Streatment</p>
                  <select
                    style={{
                      display: "flex",
                      borderRadius: 5,
                      border: "1px solid gray ",
                      width: "100%",
                    }}
                  >
                    <option value="">Civil</option>
                    <option value="">Mechanical</option>
                    <option value="">Electrical</option>
                  </select>
                </div>
              </div>
              <div>
                <p>Gender</p>
                <div>
                  <div>
                    <input type="radio" name="gender" />
                    <span style={{ paddingLeft: 5 }}> Male</span>
                  </div>
                  <div>
                    <input type="radio" name="gender" />{" "}
                    <span style={{ paddingLeft: 5 }}>Female</span>
                  </div>
                  <div>
                    <input type="radio" name="gender" />
                    <span style={{ paddingLeft: 5 }}> Other </span>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", gap: 4 }}>
                <input type="Checkbox" value={{}} style={{}} /> I agree to
                Tearms and Conditions.
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleData}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <button
        typle="button"
        className="btn btn-primary"
        onClick={() => handleNavigate()}
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
