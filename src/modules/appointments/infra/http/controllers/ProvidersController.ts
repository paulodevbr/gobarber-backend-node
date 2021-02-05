import { Response, Request } from 'express';
import { container } from 'tsyringe';
import ListProvidersService from '@modules/appointments/services/ListProvidersService';

export default class ProvidersController {
  public async index(request: Request, response: Response) {
    const user_id = request.user.id;

    const listProviders = container.resolve(ListProvidersService);

    const appointment = await listProviders.execute({
      user_id,
    });
    return response.json(appointment);
  }
}
