import 'reflect-metadata';
import ListProviderMonthAvailabilityService from '@modules/appointments/services/ListProviderMonthAvailabilityService';
import FakeAppointmentsRepository from '@modules/appointments/repositories/fakes/FakeAppointmentsRepository';

let fakeAppointmentsRepository: FakeAppointmentsRepository;

let listProviderMonthAvailability: ListProviderMonthAvailabilityService;

describe('ListProviderMonthAvailability', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    listProviderMonthAvailability = new ListProviderMonthAvailabilityService(
      fakeAppointmentsRepository,
    );
  });
  it('should list the month availability from provider correctly', async () => {
    const hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
    const promises = hours.map(hour => {
      return fakeAppointmentsRepository.create({
        user_id: 'user',
        provider_id: 'user',
        date: new Date(2020, 4, 20, hour, 0, 0),
      });
    });

    promises.push(
      fakeAppointmentsRepository.create({
        user_id: 'user',
        provider_id: 'user',
        date: new Date(2020, 5, 20, 8, 0, 0),
      }),
    );

    await Promise.all(promises);

    const availability = await listProviderMonthAvailability.execute({
      provider_id: 'user',
      year: 2020,
      month: 5,
    });

    expect(availability).toEqual(
      expect.arrayContaining([
        { day: 19, available: true },
        { day: 20, available: false },
        { day: 21, available: true },
        { day: 22, available: true },
      ]),
    );
  });
});
