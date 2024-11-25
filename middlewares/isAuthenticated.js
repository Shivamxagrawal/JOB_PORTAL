const jwt = require("jsonwebtoken");

const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({
                message: "User not authenticated",
                success: false,
            });
        }

        // Verify the token
        const decoded = await jwt.verify(token, process.env.JWT_SECRET);

        // Ensure the token was decoded successfully
        if (!decoded) {
            return res.status(401).json({
                message: "Invalid token",
                success: false,
            });
        }

        // Attach user ID to the request object
        req.id = decoded.userId;
        next();
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "An error occurred during authentication",
            success: false,
        });
    }
};

module.exports = isAuthenticated;
