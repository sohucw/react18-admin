module.exports = (req, res, next) => {
    console.log(req.method, req.url);
    if (req.method === "POST" && req.url === "/login") {
        if (req.body.username === "dawei" && req.body.password === "123") {
            return res.status(200).json({
                name: "dawei",
                token: "123",
            });
        } else {
            return res.status(400).json({
                mesage: "登录失败",
                token: null,
            });
        }
    }
    next();
};
