# Contact Manager with MongoDB

A full-stack contact management application built with Node.js, Express, and MongoDB.

## Features
- Create, Read, Update, and Delete (CRUD) contacts
- Store contact information in MongoDB
- Responsive web interface
- RESTful API endpoints

## Tech Stack
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Other**: dotenv for environment variables, CORS middleware

## Project Structure
```
├── index.html          # Main frontend page
├── styles.css          # Styling for the frontend
├── script.js           # Frontend JavaScript functionality
├── server.js           # Main server file
├── package.json        # Project dependencies and scripts
└── README.md           # This file
```

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/naninavadeep/MangoDB.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with your MongoDB connection string:
   ```
   MONGODB_URI=your_mongodb_connection_string_here
   PORT=3000
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

   Or run in production mode:
   ```bash
   npm start
   ```

5. Open your browser to `http://localhost:3000`

## API Endpoints

- `GET /api/contacts` - Get all contacts
- `POST /api/contacts` - Create a new contact
- `PUT /api/contacts/:id` - Update a contact by ID
- `DELETE /api/contacts/:id` - Delete a contact by ID

## Environment Variables

- `MONGODB_URI` - MongoDB connection string
- `PORT` - Server port (default: 3000)

## Contributing

1. Fork the repository
2. Create a new branch for your feature
3. Commit your changes
4. Push to your branch
5. Create a pull request

## License

This project is licensed under the MIT License.