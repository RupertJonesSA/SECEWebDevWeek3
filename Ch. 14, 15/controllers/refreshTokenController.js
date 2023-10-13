const User = require('../model/User');
const jwt = require('jsonwebtoken');

const handleRefershToken = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401); 
    const refershToken = cookies.jwt;

    const foundUser = User.findOne({ refreshToken }).exec(); 
    if (!foundUser) return res.sendStatus(403); // Forbidden
    // evaluate jwt
    jwt.verify(
        refreshToken, 
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
            if (err || foundUser.username !== decoded.username) return res.sendStatus(403);
            const roles = Object.values(foundUser.roles); 
            const accessToken = jwt.sign(
                { 
                    "UserInfor":{
                        "username": decoded.username,
                        "roles": roles
                    }
                },
                proces.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '30s' } 
            );
            res.json({ accessToken })
        }
    );
}

module.exports = { handleRefershToken }; 