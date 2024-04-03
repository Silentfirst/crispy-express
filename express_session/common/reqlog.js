const reqLog =(req,isPost)=>isPost==='post'? console.log(`Received post request at ${req.url}`) :console.log(`Received get request at ${req.url}`)

module.exports = reqLog