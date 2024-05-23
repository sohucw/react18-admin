module.exports = (req, res, next) => {
    console.log(req.method, req.url);
    if (req.method === "POST" && req.url === "/login") {
        console.log(33);
        if (req.body.username === "dawei" && req.body.password === "123") {
            return res.status(200).json({
                code: 200,
                data: {
                    token: "123",
                },
            });
        } else {
            return res.status(400).json({
                mesage: "登录失败",
                code: 401,
                data: {
                    token: null,
                },
            });
        }
    }
    next();
};
