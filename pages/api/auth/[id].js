// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    try {
        let { id, payload } = req.params
        let muser = await MUser.findOneOrCreate({ uid: id })
        muser.code = req.query.code
        await muser.save()
        let result = await OpenID.getToken(id, req.query.code, payload)
        if (result && result.access_token) {
          muser.refreshToken = result.refresh_token
          muser.accessToken = result.access_token
          let userInfo = await OpenID.getUserInfo(muser.accessToken)
          console.log(userInfo)
          if (userInfo) {
            muser.sub = userInfo.sub
            muser.name = userInfo.name
            muser.username = userInfo.preferred_username
            muser.email = userInfo.email
          }
          await muser.save()
          await Messenger.sendMessage(
            id,
            'Kết nối tài khoản thành công. Gửi 1 nếu bạn muốn đăng xuất khỏi hệ thống.'
          )
          await Messenger.processPayload(muser)
        }
        // res.json({ query: req.query })
        res.redirect(`http://localhost:3000/postcheck/check-profile`)
      } catch (err) {
        next(err)
      }
}
