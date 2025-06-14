export const verifyToken = ( req, res, next) => {
    const token = req.cookies.access_token;
    if(!token) return res.status(401).json({ message: "Unauthorized" });

    Jwt.verifyToken(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return next(errorHandles(403, 'Forbidden'));
        req.user = user;
        next();
    })
}