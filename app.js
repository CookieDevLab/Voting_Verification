const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 3000;

// Setup storage
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// Middleware
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/verify', upload.fields([{ name: 'idImage' }, { name: 'selfie' }]), (req, res) => {
  // Simulate match result
  const matchSuccess = true; // randomly make it false if you want to demo fail
  const result = matchSuccess ? 'Verification Successful ✅' : 'Verification Failed ❌';
  res.send(`<h2>${result}</h2><a href="/">Go Back</a>`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
