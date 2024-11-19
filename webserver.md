Building a basic server with Node.js is a great starting point for beginners! Here's a step-by-step guide to create a simple server using **Node.js**:

---

### 1. **Install Node.js**

- Download and install Node.js from [Node.js Official Website](https://nodejs.org).
- Verify installation by running these commands in your terminal:
  ```bash
  node -v
  npm -v
  ```

---

### 2. **Set Up Your Project**

1. Create a folder for your project:

   ```bash
   mkdir my-node-server
   cd my-node-server
   ```

2. Initialize a `package.json` file:
   ```bash
   npm init -y
   ```
   This creates a `package.json` file with default settings.

---

### 3. **Create the Server**

1. Create a file named `server.js`:

   ```bash
   touch server.js
   ```

2. Open the file in your code editor (e.g., VS Code) and write the following code:

```javascript
// Import the 'http' module
const http = require("http");

// Define the port where the server will run
const PORT = 3000;

// Create the server
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Respond with a message
  res.end("Hello, World! Welcome to my Node.js server.");
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
```

---

### 4. **Run the Server**

Run the following command in your terminal:

```bash
node server.js
```

You should see:

```bash
Server is running at http://localhost:3000
```

---

### 5. **Test the Server**

- Open your browser and navigate to [http://localhost:3000](http://localhost:3000).
- You should see:
  ```
  Hello, World! Welcome to my Node.js server.
  ```

---

### 6. **Add Dynamic Routing (Optional)**

You can enhance the server to handle different routes:

```javascript
const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to the Home Page!");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About Page: This is a Node.js server tutorial.");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404: Page Not Found");
  }
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
```

---

### 7. **Install `nodemon` for Development (Optional)**

When building servers, restarting the server after every change can be tedious. Use **nodemon** to automatically restart the server:

```bash
npm install -g nodemon
nodemon server.js
```

---

### Summary

- **Core concepts**: Use the `http` module to create a simple server.
- **Testing**: Test using a browser or tools like Postman.
- **Routing**: Handle different URLs for dynamic responses.

This is the foundation for building larger and more complex servers in Node.js. For advanced functionality, you can explore frameworks like **Express.js**. Let me know if you’d like to explore further! 🚀
