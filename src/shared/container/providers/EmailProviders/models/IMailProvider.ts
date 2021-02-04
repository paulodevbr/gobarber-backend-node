import ISendMailDTO from '@shared/container/providers/EmailProviders/dtos/ISendMailDTO';

export default interface IMailProvider {
  sendMail(data: ISendMailDTO): Promise<void>;
}
