const User = require('../models/User')

class UserController {
  async storage (req, res) {
    const { email } = req.body
    if (await User.findOne({ email })) {
      return res.status(400).json({ error: 'User already registered' })
    }

    const user = await User.create(req.body)
    return res.json(user)
  }
  async list (req, res) {
    const user = await User.find()
    return res.json(user)
  }
  async delete (req, res) {
    await User.findByIdAndDelete(req.params.id)
    return res.send('All Right')
  }
}

module.exports = new UserController()
