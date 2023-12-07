# Node.js Starter Boilerplate

## Overview

This node.js starter boilerplate designed for quickstart. It comes pre-configured with essential tools and libraries to kickstart your development process.

## Features

- **Express.js:** A fast, unopinionated, minimalist web framework for Node.js.
- **Mongoose:** Elegant MongoDB object modeling for Node.js.
- **Cors:** Middleware for enabling Cross-Origin Resource Sharing (CORS).
- **Dotenv:** Zero-dependency module that loads environment variables from a .env file.
- **Husky:** Enables Git hooks to run tasks before commits.
- **Linting (ESLint):** Identifies and fixes problems in your TypeScript code.
- **Prettier:** Opinionated code formatter.
- **ts-node-dev:** TypeScript execution and reload tool for Node.js.

## Getting Started

1. Clone the repository:

   ```bash
   git clone git@github.com:AveyBD/nodejs-boilerplate.git
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Set up your environment variables:

   Create a `.env` file in the root directory and define your variables.

   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/uni-management
   # Add other variables as needed
   ```

4. Run the development server:

   ```bash
   yarn start
   ```

5. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## Scripts

- **lint:** Run ESLint to identify and report code issues.
- **lint:fix:** Run ESLint with the `--fix` option to automatically fix code issues.
- **format:** Check code formatting using Prettier.
- **falcon:** Run linting and formatting in one command.

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Author

- [Debashish D. Dev](https://github.com/aveybd)

## Acknowledgments

- Special thanks to the open-source community for providing the tools used in this boilerplate.
