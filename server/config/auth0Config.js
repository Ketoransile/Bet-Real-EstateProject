import { OAuth2Client } from "google-auth-library";


const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const jwtCheck = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).send("Unauthorized");
    }
    const token = authHeader.split(" ")[1];

    try {
      // First try to verify it as an ID token
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID, 
      });
      const payload = ticket.getPayload();
      req.user = payload;
      return next();
    } catch (err) {
      // If it fails, assume it's an opaque access token and fetch UserInfo
      const response = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (!response.ok) {
        throw new Error("Invalid token");
      }
      const payload = await response.json();
      req.user = payload;
      return next();
    }
  } catch (error) {
    console.error("Token verification failed:", error.message);
    res.status(401).send("Unauthorized");
  }
};

export default jwtCheck;
