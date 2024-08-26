# Loan Calculator Frontend | Totvs Challenge

This project is the frontend for the Loan Calculator application, built using React and Vite.

## Prerequisites

Ensure that you have the following installed on your machine:

- **Node.js** (version 21.x or higher)
- **Yarn** (version 1.x or 2.x)

## Getting Started

Follow these steps to set up and build the application.

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/gabegodoy/loan-calculator-front.git
cd loan-calculator-front
```

### 2. Install Dependencies

Use Yarn to install the project dependencies:

```bash
yarn install
```

### 3. Development Server

To start the development server and view the application in your browser, run:

```bash
yarn dev
```

This will start the Vite development server, typically available at http://localhost:5173.

### 4. Build for Production

To build the application for production, run:

```bash
yarn build
```

### Environment API URL

To configure the environment API URL, change the `.env` file in the root of the project:

```
VITE_API_URL=http://localhost:8085/api/v1
```

### Deployment

After building the project, deploy the contents of the `dist` folder to your web server or cloud service.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Acknowledgments

- Built with Vite and React.
- Managed with Yarn.
- Author: Gabriel Godoy
