const Notice = require('../models/Notice')

class NoticeController {
  async storage (req, res) {
    const notice = await Notice.create({ ...req.body, author: req.userId })
    return res.json(notice)
  }
  async show (req, res) {
    const notice = await Notice.findById(req.params.id)
    return res.json(notice)
  }
  async update (req, res) {
    const notice = await Notice.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    return res.json(notice)
  }
  async delete (req, res) {
    await Notice.findByIdAndDelete(req.params.id)
    return res.json({ message: 'Deleted Successfully' })
  }
}

module.exports = new NoticeController()
