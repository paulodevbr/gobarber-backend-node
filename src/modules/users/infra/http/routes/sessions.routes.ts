import { Router } from 'express';
import SessionsController from '@modules/users/infra/http/controllers/SessionsController';

const sessionsRouter = Router();
const sessionsController = new SessionsController();

sessionsRouter.post('/', async (request, response) =>
  sessionsController.create(request, response),
);

export default sessionsRouter;
