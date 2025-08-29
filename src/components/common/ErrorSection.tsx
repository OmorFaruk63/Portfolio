import React from "react";
import NextImage from "./NextImage";
import Link from "next/link";

type ErrorSectionProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

const ErrorSection: React.FC<ErrorSectionProps> = ({ error, reset }) => {
  return (
    <section className="error padding-bottom mt-4">
      <div className="container">
        <div className="error__wrapper">
          <div
            className="error__inner"
            data-aos="fade-up"
            data-aos-duration={800}
          >
            <div className="error__thumb text-center">
              <NextImage
                width={500}
                height={280}
                src="/images/others/error.png"
                alt="404 image"
              />
            </div>
            <div className="error__content text-center">
              <h3>
                Oops! <span>{error.message}</span>
              </h3>
              <Link
                href="/"
                onClick={() => reset()}
                className="trk-btn trk-btn--border trk-btn--primary me-3"
              >
                Try Again
              </Link>
              <Link
                href="/"
                className="trk-btn trk-btn--border trk-btn--primary"
              >
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="overlay overlay--top30-center" />
    </section>
  );
};

export default ErrorSection;
