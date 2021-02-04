import IMailProvider from '@shared/container/providers/EmailProviders/models/IMailProvider';
import ISendMailDTO from '@shared/container/providers/EmailProviders/dtos/ISendMailDTO';

export default class FakeMailProvider implements IMailProvider {
  private messages: ISendMailDTO[] = [];

  public async sendMail(message: ISendMailDTO): Promise<void> {
    this.messages.push(message);
  }
}
