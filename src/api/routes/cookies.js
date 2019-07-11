const router = require('express').Router()


router.get('/cookies', (req, res) => {
  console.log(req.cookies)
  const cookiesObject = {}
  if (req.cookies) {
    const cookies = req.cookies.split('=')
    for (let i = 0; i < cookies.length; i+=2) {
      const key = cookies[i]
      const value = cookies[i+1]
      cookiesObject[key] = value
    }
  }

  res.json(cookiesObject)
})

module.exports = router
