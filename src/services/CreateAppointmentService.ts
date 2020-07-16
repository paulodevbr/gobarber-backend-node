import { startOfHour } from 'date-fns';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import Appointment from '../models/Appointment';

interface Request {
  provider: string;
  date: Date;
}

class CreateAppointmentService {
  private appointmentsReposity: AppointmentsRepository;

  constructor(appointmentsReposity: AppointmentsRepository) {
    this.appointmentsReposity = appointmentsReposity;
  }

  public execute({ provider, date }: Request): Appointment {
    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = this.appointmentsReposity.findByDate(
      appointmentDate,
    );

    if (findAppointmentInSameDate) {
      throw Error('This appointment is already booked');
    }

    return this.appointmentsReposity.create({
      provider,
      date: appointmentDate,
    });
  }
}

export default CreateAppointmentService;
