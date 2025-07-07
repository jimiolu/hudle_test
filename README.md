# Hawket: Data Engine

Hawket is a comprehensive Data access engine that makes scarce Africa data accessible for enterprise, researchers, builders, and innovators.
We refine core Data for enterprise scale use.

## Key Features
- **Download datasets**: Enable users to download clean and raw dataset.
- **Upload datasets**: Allow users to upload datasets.
- **Basic search and filter by category**: Allow users to search and filter datasets by category, region, language, use case etc.
- **User registration and data citations**: Streamline users registrations and citations of datasets.

## Tech Stack

- **Frontend**:
    - Nextjs
    - Tyscript
    - Material UI
    - ShadCN 
    - TailwindCSS

- **Backend**:
    - Node.js
    - Express.js
    - MongoDB
    - Prisma

1. **Clone the Repository**: Use `git clone` to clone this repository to your local machine.
   ```bash
   git clone
   ```

2. **Install Dependencies**:
There are two main directories inside this project: client for the frontend and server for the backend. You'll need to install dependencies for both.

a. Frontend (Client)

Navigate to the client directory:
   ```bash
   cd hudle/client
   ```
Install the required dependencies using npm:
   ```bash
   npm install --legacy-peer-deps
   ```
<!-- Start the frontend development server:
   ```bash
   npm run dev
   ``` -->

b. Backend (Server)

Navigate to the server directory:
   ```bash
   cd hudle/server
   ```
Install the backend dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```
<!-- Start the backend development server:
   ```bash
   npm run dev
   ``` -->

3. **Configure Environment Variables**:
In both the client and server directories, create a .env file in the root directory.
Define the necessary environment variables for both the frontend and backend. Samples can be found in .env.example file

4. **Start the Development Server**:
   - After installing dependencies and configuring environment variables, start the development server in the root dir /hudle:
     ```bash
     npm run dev
     ```
   - The application will be accessible at `http://localhost:3000` in your web browser.
