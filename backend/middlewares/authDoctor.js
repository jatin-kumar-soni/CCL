import jwt from 'jsonwebtoken'

// doctor authentication middleware
const authDoctor = async (req,res,next) => {

    try {
        const { dtoken } = req.headers
        if (!dtoken) {
            return res.json({ success: false, message: 'Not Authorized Login Again' })
        }

        const token_decode = jwt.verify(dtoken, process.env.JWT_SECRET)
        // if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
        //     return res.json({ success: false, message: 'Not Authorized Login Again' })
        // }

        // req.body.userId= token_decode.id
         req.body = req.body || {}
    req.body.docId = token_decode.id

  

    // req.docId=token_decode

        next()

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export default authDoctor