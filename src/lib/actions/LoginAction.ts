// app/actions.ts
"use server";

import { z } from "zod";

// Define state for our action, including potential validation errors
export interface AuthState {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
  };
  success: boolean;
}

// Schema for registration (includes name)
const registerSchema = z.object({
  name: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(8, { message: "Password must be at least 8 characters." }),
});

// Schema for login (omits name)
const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(1, { message: "Password is required." }),
});

export async function authenticate(
  prevState: AuthState | undefined,
  formData: FormData
): Promise<AuthState> {
  const isLogin = !formData.has("name");
  const data = Object.fromEntries(formData);

  const schema = isLogin ? loginSchema : registerSchema;
  const validatedFields = schema.safeParse(data);

  // If validation fails, return the errors
  if (!validatedFields.success) {
    return {
      message: "Validation failed.",
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  // --- Handle Database Logic Here ---
  try {
    if (isLogin) {
      // Your login logic: find user, check password, create session, etc.
      console.log("Logging in user:", validatedFields.data);
    } else {
      // Your registration logic: create user, hash password, etc.
      console.log("Registering new user:", validatedFields.data);
    }
    
    // On success, return a success message.
    // In a real app, you would likely redirect the user upon success.
    // e.g., redirect('/dashboard');
    return {
      message: isLogin ? "Login successful!" : "Account created successfully!",
      success: true,
    };

  } catch (error) {
    console.error(error);
    return {
      message: "An unexpected error occurred. Please try again.",
      success: false,
    };
  }
}