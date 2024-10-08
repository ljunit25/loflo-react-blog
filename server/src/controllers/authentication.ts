import express from "express";
import { createUser, getUserByEmail, getUserBySessionToken } from "../db/user";
import { authentication, random } from "../helpers/index";

export const login = async (req: express.Request, res: express.Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.sendStatus(401);
    }

    const user = await getUserByEmail(email).select(
      "+authentication.salt +authentication.password"
    );

    if (!user) {
      return res.sendStatus(400);
    }

    const expectedHash = authentication(user.authentication.salt, password);

    if (user.authentication.password !== expectedHash.toString()) {
      return res.sendStatus(403);
    }

    const salt = random();

    user.authentication.sessionToken = authentication(
      salt,
      user._id.toString()
    ).toString();

    await user.save();

    res.cookie("LOFLODEV-AUTH", user.authentication.sessionToken, {
      httpOnly: true, // restrict accessibility only in server side
      domain: "localhost",
      path: "/",
      sameSite: "strict",
    });

    return res
      .status(200)
      .json({
        username: user.username,
        email: user.email,
        _id: user._id,
        sessionToken: user.authentication.sessionToken,
        role: user.role,
      })
      .end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const register = async (req: express.Request, res: express.Response) => {
  try {
    const { email, password, username, role } = req.body;

    if (!email || !password || !username) {
      return res.sendStatus(400);
    }

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
      return res.sendStatus(400).json({ message: "user already exist" });
    }

    const salt = random();
    const useRole = role ? role : "suscriber";

    const user = await createUser({
      email,
      username,
      authentication: {
        salt,
        password: authentication(salt, password),
      },
      role: useRole,
    });

    return res.status(200).json({ message: "success" }).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const logout = (req: express.Request, res: express.Response) => {
  res.clearCookie("LOFLODEV-AUTH").json({ message: "Logout successful" });
};
