
const { connectDB, mongoose } = require('./db');

const User = require('./Models/user');
const Task = require('./Models/task');

async function main() {
  await connectDB();

  await User.deleteMany({});
  await Task.deleteMany({});

  await User.insertMany([
    { name: 'Alice', email: 'alice@example.com', role: 'admin', age: 25 },
    { name: 'Lynn', email: 'lynn@example.com', age: 25 },
    { name: 'Laizula', email: 'laizula@gmail.com', age: 28 }
  ]);

  await Task.insertMany([
    { title: 'Complete Hackathon assignment', status: 'todo', ownership: 'Lynn' },
    { title: 'Review PRs', status: 'in-progress', ownership: 'Laizula' },
    { title: 'Deploy to production', status: 'completed', ownership: 'Alice' }
  ]);

  console.log(' Data popuated sucessfully');
  await mongoose.disconnect();
}

main().catch(console.error);
