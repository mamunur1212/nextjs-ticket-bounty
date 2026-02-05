import { ZodError } from 'zod';

export type ActionState = {
  message: string;
  fieldErrors: Record<string, string[]> | undefined;
  payload?: FormData;
};

export const fromErrorToActionState = (
  error: unknown,
  formData: FormData
): ActionState => {
  // if validation error with Zod, return first error message
  if (error instanceof ZodError) {
    return {
      message: '',
      fieldErrors: error.flatten().fieldErrors,
      payload: formData,
    };
    // if another error instance, return error message
    // e.g. database error
  } else if (error instanceof Error) {
    return {
      message: error.message,
      fieldErrors: {},
      payload: formData,
    };
    // if not an error instance but something else crashed
    // return generic error message
  } else {
    return {
      message: 'An unknown error occurred',
      fieldErrors: {},
      payload: formData,
    };
  }
};
