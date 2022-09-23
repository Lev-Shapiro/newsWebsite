type Response<T> =
  | { success: true; data: T }
  | { success: false; error: Error };

export async function runner<T>(
  callback: () => Promise<T>,
): Promise<Response<T>> {
  let data: T;

  try {
    data = await callback();
  } catch (err) {
    return {
      success: false,
      error: err as Error,
    };
  }

  return {
    success: true,
    data,
  };
}
