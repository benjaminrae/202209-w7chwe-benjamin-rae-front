import { rest } from "msw";
import { RegisterFormData } from "../components/RegisterForm/RegisterForm";
import { getRandomProfileList } from "../factories/profileFactory";
import { LoginFormData } from "../hooks/useUser/useUser";
import mockLoadProfilesResponse from "./responses/mockLoadProfilesResponse";

const apiUrl = process.env.REACT_APP_API_URL;

const handlers = [
  rest.post(`${apiUrl}/users/register`, async (req, res, ctx) => {
    const { email } = await req.json<RegisterFormData>();

    if (email === "alexander@gmail.com") {
      return res(
        ctx.status(409),
        ctx.json({ error: "User is already registered" })
      );
    }

    return res(ctx.status(201), ctx.json({}));
  }),

  rest.post(`${apiUrl}/users/login`, async (req, res, ctx) => {
    const { password } = await req.json<LoginFormData>();

    if (password === "12345678") {
      return res(
        ctx.status(401),
        ctx.json({ error: "Incorrect username or password" })
      );
    }

    return res(ctx.status(200), ctx.json({ token: "testtoken" }));
  }),

  rest.get(`${apiUrl}/profiles`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockLoadProfilesResponse));
  }),
];

export default handlers;
