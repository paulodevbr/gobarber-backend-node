import EtherealMailProvider from '@shared/container/providers/EmailProviders/implementations/EtherealMailProvider';
import SESMailProvider from '@shared/container/providers/EmailProviders/implementations/SESMailProvider';
import { container } from 'tsyringe';
import IMailProvider from '@shared/container/providers/EmailProviders/models/IMailProvider';
import mailConfig from '@config/mail';

const providers = {
  ethereal: container.resolve(EtherealMailProvider),
  ses: container.resolve(SESMailProvider),
};

container.registerInstance<IMailProvider>(
  'MailProvider',
  providers[mailConfig.driver],
);
