/*
  Deno is a runtime that is secure by default, this means that
  the program needs explicit permissions.
  Command: deno run --allow-net=deno.com first_steps.ts
*/

/**
 * Fetches the body of a website using the provided URL.
 *
 * @param {string} url - The URL of the website to fetch.
 * @returns {Promise<string>} A promise that resolves to the website body as a string.
 */
const getWebsiteBody = async (url: string): Promise<string> => {
  const response: Response = await fetch(url);
  const body: string = await response.text();
  return body;
};

// Example usage:
console.log(await getWebsiteBody("https://deno.com"));

export {};
