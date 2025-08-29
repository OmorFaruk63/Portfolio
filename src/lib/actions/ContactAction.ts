// app/actions.ts
"use server";

import { z } from "zod";

// Define the shape of the state object returned by the action
export interface ContactFormState {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  success: boolean;
}

// Create a schema for validation using Zod
const ContactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters long." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters long." }),
});

// This is the Server Action that will be called by the form
export async function handleContactForm(
  prevState: ContactFormState | undefined,
  formData: FormData
): Promise<ContactFormState> {
  // Validate the form data against the schema
  const validatedFields = ContactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  // If validation fails, return the errors
  if (!validatedFields.success) {
    return {
      message: "Validation failed. Please correct the errors below.",
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  // If validation is successful, process the data
  try {
    // Here you would typically send an email, save to a database, etc.
    console.log("Form data is valid:", validatedFields.data);
    // await sendEmail(validatedFields.data);

    // Return a success message
    return {
      message: "Thank you for your message! I will get back to you soon.",
      success: true,
    };
  } catch (error) {
    console.error("Form submission error:", error);
    // Return a generic error message if something goes wrong
    return {
      message: "Something went wrong. Please try again later.",
      success: false,
    };
  }
}