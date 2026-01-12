export const registerUser = async (data) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Request failed");
  }
  return response.json();
};
