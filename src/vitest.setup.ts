import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MOCK_PROPERTIES } from './assets/mocks';
import { afterAll, afterEach, beforeAll } from 'vitest';
import { BASE_API_URL } from './consts';

const restHandlers = [
  rest.get(BASE_API_URL, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(MOCK_PROPERTIES));
  }),
  rest.get(`${BASE_API_URL}/1`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(MOCK_PROPERTIES[0]));
  }),
];

const server = setupServer(...restHandlers);

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
