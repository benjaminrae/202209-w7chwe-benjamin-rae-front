import { rest } from "msw";
import { RegisterFormData } from "../components/RegisterForm/RegisterForm";
import { getRandomProfile } from "../factories/profileFactory";
import { LoginFormData } from "../hooks/useUser/useUser";
import mockGetProfileByIdResponse from "./responses/mockGetProfileByIdResponse";
import mockLoadProfilesResponse from "./responses/mockLoadProfilesResponse";
import mockUpdateRelationshipResponse from "./responses/mockUpdateRelationshipResponse";

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
    return res.once(
      ctx.status(404),
      ctx.json({ error: "There was an error on the server" })
    );
  }),

  rest.get(`${apiUrl}/profiles`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockLoadProfilesResponse));
  }),

  rest.get(`${apiUrl}/profiles/profile/:profileId`, (req, res, ctx) => {
    return res.once(
      ctx.status(500),
      ctx.json({ error: "There was an error on the server" })
    );
  }),

  rest.get(`${apiUrl}/profiles/profile/:profileId`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ profile: mockGetProfileByIdResponse })
    );
  }),

  rest.put(`${apiUrl}/profiles/edit`, (req, res, ctx) => {
    return res.once(
      ctx.status(500),
      ctx.json({ error: "There was an error on the server" })
    );
  }),

  rest.put(`${apiUrl}/profiles/edit`, (req, res, ctx) => {
    return res(ctx.status(201), ctx.json({ profile: getRandomProfile() }));
  }),

  rest.put(`${apiUrl}/profiles/relationship`, (req, res, ctx) => {
    return res.once(
      ctx.status(500),
      ctx.json({ error: "There was an error on the server" })
    );
  }),

  rest.put(`${apiUrl}/profiles/relationship`, (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json({ profile: mockUpdateRelationshipResponse })
    );
  }),
];

export default handlers;
