import AuthForm from "@/components/modules/login/AuthForm";

export default function LoginPage() {
  return (
    <section className="account padding-top padding-bottom">
      <div className="container">
        <div
          className="account__wrapper"
          data-aos="fade-up"
          data-aos-duration={800}
        >
          <div className="row g-4">
            <div className="col-12">
              <AuthForm isLogin={true} />
            </div>
          </div>
        </div>
      </div>
      <div className="overlay overlay--top30-center" />
    </section>
  );
}
