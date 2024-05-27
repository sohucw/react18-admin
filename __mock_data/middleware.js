const userList = [];
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
    } else if (req.method === "POST" && req.url === "/register") {
        console.log(req.body);
        if (!req.body.username || !req.body.password) {
            return res.status(400).json({
                message: "参数错误",
                token: null,
            });
        } else {
            userList.push({
                username: req.body.username,
                password: req.body.password,
            });
            return res.status(200).json({
                user: req.body.username,
                token: Math.random().toString(36).substring(0, 9),
            });
        }
    }
    next();
};
