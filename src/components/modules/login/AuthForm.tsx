// components/AuthForm.tsx
"use client";

import { useActionState, useState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import Link from "next/link";
import NextImage from "@/components/common/NextImage";
import { authenticate, AuthState } from "@/lib/actions/LoginAction"; // Adjust the import path

interface AuthFormProps {
  isLogin?: boolean;
}

// A separate component is needed for useFormStatus to work correctly
function SubmitButton({ isLogin }: { isLogin?: boolean }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="trk-btn trk-btn--border trk-btn--primary border-0 d-block mt-35"
      aria-disabled={pending}
    >
      {pending
        ? isLogin
          ? "Logging in..."
          : "Signing up..."
        : isLogin
        ? "Login"
        : "Register"}
    </button>
  );
}

const AuthForm = ({ isLogin = false }: AuthFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [state, formAction] = useActionState<AuthState | undefined, FormData>(
    authenticate,
    undefined
  );
  const formRef = useRef<HTMLFormElement>(null);

  const togglePassword = () => setShowPassword((prev) => !prev);

  // Reset the form on successful submission
  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <div className="account__content account__content--style1">
      {/* account title */}
      <div className="account__header">
        <h2 className="mb-15">{isLogin ? "Login" : "Create Your Account"}</h2>
        <p>
          {isLogin
            ? "You can login with your social site"
            : "Let’s get started with your 30 days free trial"}
        </p>
      </div>

      {/* social login */}
      <div className="account__social">
        <Link href="#" className="account__social-btn">
          <span>
            <NextImage
              width={25}
              height={24}
              src="/images/icon/google.svg"
              alt="google icon"
            />
          </span>
          Continue with Google
        </Link>
      </div>

      <div className="account__divider account__divider--style1">
        <span>or</span>
      </div>

      {/* Server Action Form */}
      <form
        ref={formRef}
        action={formAction}
        className="account__form"
        noValidate
      >
        <div className="row g-4">
          {!isLogin && (
            <div className="col-12">
              <div>
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="Enter your full name"
                  required
                />
                {state?.errors?.name && (
                  <small className="text-danger">{state.errors.name[0]}</small>
                )}
              </div>
            </div>
          )}

          <div className="col-12">
            <div>
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="form-control"
                placeholder="Enter your email"
                required
              />
              {state?.errors?.email && (
                <small className="text-danger">{state.errors.email[0]}</small>
              )}
            </div>
          </div>

          <div className="col-12">
            <div className="form-pass position-relative">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                className="form-control showhide-pass"
                placeholder="Password"
                required
              />
              <button
                type="button"
                className="form-pass__toggle"
                onClick={togglePassword}
              >
                <i
                  className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                />
              </button>
              {state?.errors?.password && (
                <small className="text-danger d-block mt-2">
                  {state.errors.password[0]}
                </small>
              )}
            </div>
          </div>
        </div>

        {/* Display general messages (success or non-field-specific errors) */}
        {state?.message && !state.errors && (
          <div
            className={`mt-3 ${state.success ? "text-success" : "text-danger"}`}
          >
            {state.message}
          </div>
        )}

        <SubmitButton isLogin={isLogin} />
      </form>

      <div className="account__switch">
        <p>
          {isLogin ? (
            <>
              New user?{" "}
              <Link href="/register" className="text-decoration-underline">
                Create an account
              </Link>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <Link href="/login" className="text-decoration-underline">
                Login
              </Link>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
