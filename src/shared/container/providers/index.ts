import { container } from 'tsyringe';
import IStorageProvider from '@shared/container/providers/StorageProviders/models/IStorageProvider';
import DiskStorageProvider from '@shared/container/providers/StorageProviders/implementations/DiskStorageProvider';
import IMailProvider from '@shared/container/providers/EmailProviders/models/IMailProvider';
import EtherealMailProvider from '@shared/container/providers/EmailProviders/implementations/EtherealMailProvider';
import IMailTemplateProvider from '@shared/container/providers/TemplateMailProvider/models/IMailTemplateProvider';
import HandleBarsMailTemplateProvider from '@shared/container/providers/TemplateMailProvider/implementations/HandleBarsMailTemplateProvider';

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  DiskStorageProvider,
);

container.registerSingleton<IMailTemplateProvider>(
  'MailTemplateProvider',
  HandleBarsMailTemplateProvider,
);

container.registerInstance<IMailProvider>(
  'MailProvider',
  container.resolve(EtherealMailProvider),
);
