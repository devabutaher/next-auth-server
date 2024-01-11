import jwt from "jsonwebtoken";

const generateToken = (res, user) => {
  const token = jwt.sign(
    { _id: user._id, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    {
      expiresIn: "3d",
    }
  );

  return res.cookie("auth-token", token, {
    path: "/",
    httpOnly: true,
    sameSite: "strict",
    maxAge: 3 * 24 * 60 * 60 * 1000,
    secure: process.env.NODE_ENV === "production",
  });
};

export default generateToken;
