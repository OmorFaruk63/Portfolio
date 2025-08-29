import Footer from "@/components/common/footer";
import Header from "@/components/common/Header";
import NextImage from "@/components/common/NextImage";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Header />
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
                <h2 className="mb-25">ooops! page not found</h2>
                <p>
                  Oops! It looks like you&apos;re lost. The page you were
                  looking for couldn&apos;t be found. Don&apos;t worry, it
                  happens to the best of us.
                </p>
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
      <Footer />
    </>
  );
}
