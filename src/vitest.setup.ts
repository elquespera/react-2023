import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MOCK_CHARACTERS } from './assets/mocks';
import { afterAll, afterEach, beforeAll } from 'vitest';

const restHandlers = [
  rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(MOCK_CHARACTERS));
  }),
  rest.get('https://rickandmortyapi.com/api/character/1', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(MOCK_CHARACTERS[0]));
  }),
];

const server = setupServer(...restHandlers);

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
