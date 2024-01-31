import { addDoc, collection } from "firebase/firestore";
import { useForm } from "react-hook-form";
import "./contact.css";
import { db } from "../../firebase/firebase";
import { useState } from "react";
import Loading from "../../components/loading/Loading";
import { toast } from "react-toastify";
export default function ContactMe() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    const { name, email, message, subject } = data;
    try {
      await addDoc(collection(db, "contact"), {
        name,
        email,
        message,
        subject,
      });
      toast.success("Submit successful.");
      setIsLoading(false);
      reset();
    } catch (error) {
      toast.error("Something went wrong.");
      setIsLoading(false);
    }
  };

  return (
    <div className="contact">
      <div className="container">
        <h1 className="text-center">Contact Form</h1>
        {/* <ContactForm /> */}
        <div className="ContactForm">
          <p className="text-center">Integrated with Firebase Firestore</p>
          {isLoading ? (
            <Loading />
          ) : (
            <div className="container">
              <div className="row">
                <div className="col-12 text-center">
                  <div className="contactForm">
                    <form
                      id="contact-form"
                      onSubmit={handleSubmit(onSubmit)}
                      noValidate
                    >
                      {/* Row 1 of form */}
                      <div className="row formRow">
                        <div className="col-6">
                          <input
                            type="text"
                            name="name"
                            {...register("name", {
                              required: {
                                value: true,
                                message: "Please enter your name",
                              },
                              maxLength: {
                                value: 30,
                                message: "Please use 30 characters or less",
                              },
                            })}
                            className="form-control formInput"
                            placeholder="Name"
                          ></input>
                          {errors.name && (
                            <span className="errorMessage">
                              {errors.name.message}
                            </span>
                          )}
                        </div>
                        <div className="col-6">
                          <input
                            type="email"
                            name="email"
                            {...register("email", {
                              required: true,
                              pattern:
                                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                            })}
                            className="form-control formInput"
                            placeholder="Email address"
                          ></input>
                          {errors.email && (
                            <span className="errorMessage">
                              Please enter a valid email address
                            </span>
                          )}
                        </div>
                      </div>
                      {/* Row 2 of form */}
                      <div className="row formRow">
                        <div className="col">
                          <input
                            type="text"
                            name="subject"
                            {...register("subject", {
                              required: {
                                value: true,
                                message: "Please enter a subject",
                              },
                              maxLength: {
                                value: 75,
                                message: "Subject cannot exceed 75 characters",
                              },
                            })}
                            className="form-control formInput"
                            placeholder="Subject"
                          ></input>
                          {errors.subject && (
                            <span className="errorMessage">
                              {errors.subject.message}
                            </span>
                          )}
                        </div>
                      </div>
                      {/* Row 3 of form */}
                      <div className="row formRow">
                        <div className="col">
                          <textarea
                            rows={3}
                            name="message"
                            {...register("message", {
                              required: true,
                            })}
                            className="form-control formInput"
                            placeholder="Message"
                          ></textarea>
                          {errors.message && (
                            <span className="errorMessage">
                              Please enter a message
                            </span>
                          )}
                        </div>
                      </div>

                      <button
                        className="submit-btn btn btn-primary"
                        type="submit"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
