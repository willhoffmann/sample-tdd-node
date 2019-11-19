const User = require('./UserModel');

class UserController {
  async store(req, res) {
    try {
      const { email } = req.body;

      const userExists = await User.findOne({ email });
      if (userExists) {
        return res.status(400).json({
          code: 400,
          message: 'User already exists',
        });
      }

      const user = await User.create(req.body);

      return res.status(201).json({
        id: user._id,
        name: user.name,
        email: user.email,
      });
    } catch (err) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  }
}

module.exports = new UserController();
