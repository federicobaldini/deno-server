/**
 * Fetches GitHub user data from the `https://api.github.com/users/denoland` endpoint
 * and returns it as a JSON response.
 *
 * @returns {Promise<Response>} A promise that resolves to a Response object containing the fetched user data as JSON.
 */
const defaultHandler = async (): Promise<Response> => {
  // Fetch user data from the GitHub API using a GET request.
  const response: Response = await fetch(
    "https://api.github.com/users/denoland",
    {
      // Default fetch makes a GET request.
      headers: {
        accept: "application/json", // Request JSON response format.
      },
    }
  );

  // Create a new Response object to send back the fetched user data as JSON.
  return new Response(response.body, {
    status: response.status, // Use the same status code as received from the GitHub API response.
    headers: {
      "content-type": "application/json", // Set the response content type to JSON.
    },
  });
};

// Serve the defaultHandler function at 127.0.0.1 on port 8080.
Deno.serve(defaultHandler);
