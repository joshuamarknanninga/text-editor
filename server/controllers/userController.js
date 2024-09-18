const User = require('../models/User');

module.exports = {
  // User registration
  register: async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const user = new User({ username, email, password });
      await user.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  // User login
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
      const isMatch = await user.comparePassword(password);
      if (!isMatch) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
      // Generate token or session here (e.g., using JWT)
      res.status(200).json({ message: 'Login successful' });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
};
