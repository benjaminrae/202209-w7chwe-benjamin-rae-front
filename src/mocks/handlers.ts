import { rest } from "msw";

const apiUrl = process.env.REACT_APP_API_URL;

const handlers = [
  rest.post(`${apiUrl}/users/register`, (req, res, ctx) => {
    return res(ctx.status(201), ctx.json({}));
  }),
];

export default handlers;
