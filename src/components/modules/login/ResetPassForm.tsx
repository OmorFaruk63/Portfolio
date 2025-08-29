import Link from "next/link";
import React from "react";

const ResetPassForm = () => {
  return (
    <div className="account__content account__content--style1">
      {/* account tittle */}
      <div className="account__header">
        <h2 className="mb-15">Reset Password</h2>
        <p>You can reset your password every easily.</p>
      </div>
      {/* account form */}
      <form className="account__form needs-validation">
        <div className="row g-4">
          <div className="col-12">
            <div>
              <label htmlFor="account-email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="account-email"
                placeholder="Enter your email"
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="trk-btn trk-btn--border trk-btn--primary border-0 d-block mt-35"
        >
          Reset Password
        </button>
      </form>
      <div className="account__switch">
        <p>
          Remembered password now ?<Link href="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default ResetPassForm;
