const Cookie = require('js-cookie')
import mockStorge from '../src/utils/mockStorge'

let dataKey = mockStorge('AdminUsers', [
  {
    username: 'guest',
    password: 'guest'
  },
  {
    username: 'TeKa',
    password: '123456'
  }
])

module.exports = {
  'POST /api/login' (req, res) {
    const userItem = req.body
    const response = {
      success: false,
      message: ''
    }
    const d = global[dataKey].filter(function (item) {
      return item.username === userItem.username
    })
    if (d.length) {
      if (d[0].password === userItem.password) {
        const now = new Date()
        now.setDate(now.getDate() + 1)
        Cookie.set('user_session', now.getTime(), { path: '/' })
        Cookie.set('user_name', userItem.username, { path: '/' })
        response.message = 'Login Successful'
        response.success = true
      } else {
        response.message = 'Incorrect Password'
      }
    } else {
      response.message = 'User Not Found'
    }
    res.json(response)
  },

  'GET /api/userInfo' (req, res) {
    const response = {
      success: Cookie.get('user_session') && Cookie.get('user_session') > new Date().getTime(),
      username: Cookie.get('user_name') || '',
      message: ''
    }
    res.json(response)
  },

  'POST /api/logout' (req, res) {
    Cookie.remove('user_session', { path: '/' })
    Cookie.remove('user_name', { path: '/' })
    res.json({
      success: true,
      message: 'Exit Successfully'
    })
  }
}
