// components/BlogCommentForm.tsx
"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { submitComment, CommentState } from "@/lib/actions/CommentAction"; // Adjust the import path

// A separate button component is required to use the `useFormStatus` hook
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="trk-btn trk-btn--border trk-btn--primary mt-4 border-0"
      disabled={pending}
      aria-disabled={pending}
    >
      {pending ? "Sending..." : "Send message"}
    </button>
  );
}

export default function BlogCommentForm() {
  const [state, formAction] = useActionState<
    CommentState | undefined,
    FormData
  >(submitComment, undefined);
  const formRef = useRef<HTMLFormElement>(null);

  // Effect to reset the form after a successful submission
  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction} noValidate>
      <div className="row g-4">
        <div className="col-md-6">
          <div>
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              id="name"
              name="name" // Use name attribute for formData
              type="text"
              className="form-control"
              placeholder="Full Name"
              required
            />
            {state?.errors?.name && (
              <small className="text-danger">{state.errors.name[0]}</small>
            )}
          </div>
        </div>

        <div className="col-md-6">
          <div>
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              name="email" // Use name attribute for formData
              type="email"
              className="form-control"
              placeholder="Email here"
              required
            />
            {state?.errors?.email && (
              <small className="text-danger">{state.errors.email[0]}</small>
            )}
          </div>
        </div>

        <div className="col-md-12">
          <div>
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              name="message" // Use name attribute for formData
              className="form-control"
              rows={5}
              placeholder="Enter Your Message"
              required
            />
            {state?.errors?.message && (
              <small className="text-danger">{state.errors.message[0]}</small>
            )}
          </div>
        </div>
      </div>

      {/* Display a success or general error message */}
      {state?.message && (
        <div
          className={`mt-3 ${state.success ? "text-success" : "text-danger"}`}
        >
          {state.message}
        </div>
      )}

      <SubmitButton />
    </form>
  );
}
