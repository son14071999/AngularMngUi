module.exports = [
    {
        context: ['/authca/*'],
        target: "http://172.16.11.62",
        secure: false,
        logLevel: "debug",
        pathRewrite: {
            "^/authca" : ""
        }
    }
]