/**
 * Fetches the body of a website using the provided URL.
 *
 * @param {string} url - The URL of the website to fetch.
 * @returns {Promise<string>} A promise that resolves to the website body as a string.
 */
const getWebsiteBody = async (url: string): Promise<string> => {
  // Fetch the website content using the provided URL.
  const response: Response = await fetch(url);

  // Extract the body of the response as a string.
  const body: string = await response.text();

  // Return the website body as a string.
  return body;
};

/**
 * Prints the content of each file specified in the `fileNames` array to the console.
 *
 * @param {Array<string>} fileNames - An array of file names to print the content of.
 * @returns {Promise<void>} A promise that resolves when all files have been printed.
 */
const printFilesContent = async (fileNames: Array<string>): Promise<void> => {
  for (const fileName of fileNames) {
    // https://deno.land/api@v1.35.1?s=Deno.open
    // Open the file for reading
    const file: Deno.FsFile = await Deno.open(fileName);

    // Pipe the readable stream of the file to Deno's stdout (console) as writable stream.
    // This will print the content of the file to the console.
    await file.readable.pipeTo(Deno.stdout.writable, { preventClose: true });
  }
};

// deno run --allow-net=deno.com src/main.ts
console.log(await getWebsiteBody("https://deno.com"));

// deno run --allow-read src/main.ts example.txt
printFilesContent(Deno.args);
