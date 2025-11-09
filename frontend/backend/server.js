import express from "express";
import cors from "cors";

const app = express();

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

// Mock user database
const users = [
  { email: 'student@example.com', password: '1234', role: 'student' },
  { email: 'teacher@example.com', password: 'abcd', role: 'teacher' }
];

// Login endpoint
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  
  // Input validation
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: 'Please provide both email and password'
    });
  }

  // Find user
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    return res.status(200).json({
      success: true,
      role: user.role,
      message: `${user.role.charAt(0).toUpperCase() + user.role.slice(1)} login successful`
    });
  }

  // Invalid credentials
  res.status(401).json({
    success: false,
    message: 'Invalid email or password'
  });
});

app.get("/", (req, res) => {
  res.send("Backend is running successfully!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});