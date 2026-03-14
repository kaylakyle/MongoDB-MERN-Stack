# MongoDB MERN Stack 

A beginner-friendly MongoDB project demonstrating fundamental database operations using Mongoose ODM. This project covers essential CRUD operations, data modeling, and aggregation queries with Node.js and MongoDB.

##  Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Data Models](#data-models)
- [Operations](#operations)
- [Learning Objectives](#learning-objectives)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

##  Overview

This project It demonstrates:

- MongoDB connection using Mongoose
- Schema definition and model creation
- CRUD (Create, Read, Update, Delete) operations
- Data seeding and population
- Basic aggregation queries
- Environment variable configuration

##  Features

- **Database Connection**: Secure MongoDB Atlas connection
- **User Management**: Create and manage user profiles
- **Task Management**: Handle tasks with status tracking
- **CRUD Operations**: Complete implementation of database operations
- **Data Seeding**: Populate database with sample data
- **Aggregation**: Group and analyze data using MongoDB aggregation pipeline
- **Environment Configuration**: Secure credential management

##  Project Structure

```
mongodb-mern-week-1/
├── Models/
│   ├── User.js          # User schema and model
│   └── Task.js          # Task schema and model
├── crud.js              # CRUD operations demonstration
├── db.js                # Database connection configuration
├── seed.js              # Data seeding script
├── package.json         # Project dependencies and scripts
├── .env.example         # Environment variables template
└── README.md            # Project documentation
```

##  Prerequisites

Before running this project, ensure you have:

- **Node.js** (v14 or higher)
- **npm** or **yarn** package manager
- **MongoDB Atlas account** (or local MongoDB instance)
- **Git** for version control

##  Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/PLP-MERN-Stack-Development/mongodb-mern-week-1.git
   cd mongodb-mern-week-1
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

##  Configuration

### Environment Setup

1. **Create a `.env` file** in the root directory
2. **Add your MongoDB connection string**:
   ```env
   MONGODBATLAS_URI=mongodb+srv://username:password@cluster.mongodb.net/database_name?retryWrites=true&w=majority
   ```

### MongoDB Atlas Setup

1. **Create a MongoDB Atlas account** at [mongodb.com](https://www.mongodb.com/cloud/atlas)
2. **Create a new cluster**
3. **Create a database user** with read/write permissions
4. **Whitelist your IP address**
5. **Get your connection string** and add it to `.env`

## Usage

### Running the Application

1. **Seed the database** with sample data:
   ```bash
   node seed.js
   ```

2. **Run CRUD operations**:
   ```bash
   node crud.js
   ```

### Available Scripts

- **Seed Database**: `node seed.js` - Populates database with sample users and tasks
- **CRUD Operations**: `node crud.js` - Demonstrates all database operations

##  Data Models

### User Model

```javascript
{
  name: String,           // User's full name
  email: String,          // User's email (required, unique)
  role: String,           // User role (default: "user")
  timestamps: true        // createdAt, updatedAt
}
```

### Task Model

```javascript
{
  title: String,          // Task title
  status: String,         // Status: "todo", "in_progress", "done"
  owner: String,          // Task owner name
  timestamps: true        // createdAt, updatedAt
}
```

##  Operations

### CRUD Operations Demonstrated

1. **CREATE**
   - Create new users with `User.create()`
   - Bulk insert with `insertMany()`

2. **READ**
   - Find all users with `User.find()`
   - Select specific fields with `.select()`

3. **UPDATE**
   - Update user role with `User.updateOne()`

4. **DELETE**
   - Delete user with `User.deleteOne()`
   - Clear collections with `deleteMany()`

5. **AGGREGATION**
   - Group tasks by status
   - Count documents in each group

### Sample Operations

```javascript
// Create a user
const user = await User.create({
  name: "Lynn Stac",
  email: "stacy@example.com"
});

// Find all users
const users = await User.find().select("name email");

// Update user role
await User.updateOne(
  { email: "john@example.com" },
  { role: "admin" }
);

// Aggregate tasks by status
const taskStats = await Task.aggregate([
  { $group: { _id: "$status", total: { $sum: 1 } } }
]);
```

##  Learning Objectives

By completing this project, you will learn:

-  How to connect Node.js to MongoDB using Mongoose
-  Creating and defining data schemas
-  Implementing CRUD operations
-  Using environment variables for configuration
-  Data seeding and population strategies
-  Basic MongoDB aggregation pipelines
-  Best practices for database operations

##  Troubleshooting

### Common Issues

1. **Connection Error**
   - Check your MongoDB connection string
   - Verify network access (IP whitelist)
   - Ensure credentials are correct

2. **Module Not Found**
   - Run `npm install` to install dependencies
   - Check Node.js version compatibility

3. **Environment Variables**
   - Ensure `.env` file exists and is properly formatted
   - Check that `MONGODBATLAS_URI` is set

### Debug Tips

- Enable Mongoose debug mode: `mongoose.set('debug', true)`
- Check database connection status before operations
- Use try-catch blocks for error handling

##  Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/new-feature`
3. **Make your changes** and commit: `git commit -am 'Add new feature'`
4. **Push to the branch**: `git push origin feature/new-feature`
5. **Submit a pull request**


---

##  Additional Resources

- [MongoDB Official Documentation](https://docs.mongodb.com/)
- [Mongoose ODM Documentation](https://mongoosejs.com/docs/)
- [Node.js Documentation](https://nodejs.org/docs/)
- [PLP MERN Stack Program](https://plp.com/)

**Happy Coding! **

*Built with ❤️ by PLP MERN Stack Development - July Cohort*