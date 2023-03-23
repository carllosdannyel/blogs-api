<!DOCTYPE html>
<html>
  <head>
    <title>Blogs API Readme</title>
  </head>
  <body>
    <h1>Blogs API Readme</h1>
    <p>Welcome to the readme for the Blogs API repository!</p>
    <h2>About</h2>
    <p>This repository contains the code for a RESTful API that allows users to create, read, update, and delete blog posts. The API is built using Node.js, Express.js, and MongoDB.</p>
    <h2>Installation</h2>
    <p>To install the API, follow these steps:</p>
    <ol>
      <li>Clone the repository to your local machine:</li>
      <code>git clone https://github.com/carllosdannyel/blogs-api.git</code>
      <li>Install the dependencies:</li>
      <code>npm install</code>
      <li>Create a <code>.env</code> file in the root directory of the project with the following contents:</li>
      <pre><code>PORT=3000
MONGODB_URI=mongodb://localhost/blogs</code></pre>
      <p>Make sure to replace <code>mongodb://localhost/blogs</code> with the URI of your own MongoDB database.</p>
      <li>Start the server:</li>
      <code>npm start</code>
    </ol>
    <h2>Usage</h2>
    <p>Once the API is running, you can use it to create, read, update, and delete blog posts. Here are some examples of the endpoints you can use:</p>
    <ul>
      <li>GET /blogs - Get a list of all blog posts</li>
      <li>GET /blogs/:id - Get a specific blog post by ID</li>
      <li>POST /blogs - Create a new blog post</li>
      <li>PUT /blogs/:id - Update a specific blog post by ID</li>
      <li>DELETE /blogs/:id - Delete a specific blog post by ID</li>
    </ul>
    <p>For more information about how to use the API, please refer to the documentation in the <code>docs/</code> directory.</p>
    <h2>Contributing</h2>
    <p>Contributions are welcome! If you find a bug or would like to suggest a new feature, please open an issue on the <a href="https://github.com/carllosdannyel/blogs-api/issues">GitHub issues page</a>. If you would like to contribute code, please follow these steps:</p>
    <ol>
      <li>Fork the repository</li>
      <li>Create a new branch for your changes</li>
      <li>Make your changes and commit them with descriptive commit messages</li>
      <li>Push your changes to your forked repository</li>
      <li>Create a pull request on the main repository</li>
    </ol>
    <p>For more information about contributing, please see the <code>CONTRIBUTING.md</code> file in the root directory of the project.</p>
    <h2>License</h2>
    <p>This project is licensed under the MIT License. For more information, please see the <code>LICENSE</code> file in the root directory of the project.</p>
  </body>
</html>
