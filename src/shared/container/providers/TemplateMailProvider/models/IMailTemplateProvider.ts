import IParseMailTemplateDTO from '@shared/container/providers/TemplateMailProvider/dtos/IParseMailTemplateDTO';

export default interface IMailTemplateProvider {
  parse(data: IParseMailTemplateDTO): Promise<string>;
}
