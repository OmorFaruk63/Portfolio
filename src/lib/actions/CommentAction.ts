// app/actions.ts
"use server";

import { z } from "zod";

// Define the state for our action's response
export interface CommentState {
  message?: string | null;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  success: boolean;
}

// Define the validation schema using Zod
const CommentSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(5, { message: "Message must be at least 5 characters long." }),
});

export async function submitComment(
  prevState: CommentState | undefined,
  formData: FormData
): Promise<CommentState> {
  // 1. Validate the form data
  const validatedFields = CommentSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  // 2. If validation fails, return the errors
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Validation failed. Please check the fields.",
      success: false,
    };
  }

  // 3. If validation succeeds, process the data (e.g., save to a database)
  try {
    console.log("Submitting comment:", validatedFields.data);
    // await saveCommentToDatabase(validatedFields.data); // Your database logic here

    // Revalidate the page path to show the new comment immediately
    // revalidatePath('/blog/[slug]'); // Adjust path as needed

    // 4. Return a success response
    return {
      message: "Your comment has been submitted successfully!",
      success: true,
    };
  } catch (e) {
    
     // Log the actual error to the server console for debugging
    console.error("Comment submission failed:", e); 
    
    // Return a generic error message to the client
    return {
      message: "An error occurred while submitting your comment." ,
      success: false,
    };
  }
}