// components/ContactSectionForm.tsx
"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import {
  handleContactForm,
  ContactFormState,
} from "@/lib/actions/ContactAction"; // Adjust import path as needed

// The Submit Button needs to be a separate component to use useFormStatus
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="trk-btn trk-btn--primary w-100"
      aria-disabled={pending}
    >
      {pending ? "Sending..." : "Contact Me"}
    </button>
  );
}

const ContactSectionForm: React.FC = () => {
  // useActionState handles the state transitions of the form action
  const [state, formAction] = useActionState<
    ContactFormState | undefined,
    FormData
  >(handleContactForm, undefined);
  const formRef = useRef<HTMLFormElement>(null);

  // Reset the form if the submission was successful
  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <form
      ref={formRef}
      action={formAction} // The action is now our server action
      data-aos="fade-left"
      data-aos-duration={1000}
      noValidate
    >
      <div className="row g-4">
        <div className="col-12">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            className="form-control"
            type="text"
            id="name"
            name="name" // The "name" attribute is crucial for formData
            placeholder="Full Name"
            required
          />
          {state?.errors?.name && (
            <small className="text-danger d-block mt-1">
              {state.errors.name[0]}
            </small>
          )}
        </div>
        <div className="col-12">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            className="form-control"
            type="email"
            id="email"
            name="email" // Add name attribute
            placeholder="Email here"
            required
          />
          {state?.errors?.email && (
            <small className="text-danger d-block mt-1">
              {state.errors.email[0]}
            </small>
          )}
        </div>
        <div className="col-12">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            cols={20}
            rows={2}
            className="form-control"
            id="message"
            name="message" // Add name attribute
            placeholder="Enter Your Message"
            required
          />
          {state?.errors?.message && (
            <small className="text-danger d-block mt-1">
              {state.errors.message[0]}
            </small>
          )}
        </div>
      </div>

      {/* Display a global success or error message from the action */}
      {state?.message && (
        <div
          className={`mt-3 p-2 rounded ${
            state.success
              ? "bg-success-light text-success"
              : "bg-danger-light text-danger"
          }`}
        >
          {state.message}
        </div>
      )}

      <div className="mt-4">
        <SubmitButton />
      </div>
    </form>
  );
};

export default ContactSectionForm;
