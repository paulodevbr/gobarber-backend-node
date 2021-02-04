import IMailTemplateProvider from '@shared/container/providers/TemplateMailProvider/models/IMailTemplateProvider';
import IParseMailTemplateDTO from '@shared/container/providers/TemplateMailProvider/dtos/IParseMailTemplateDTO';

class FakeMailTemplateProvider implements IMailTemplateProvider {
  public async parse({ template }: IParseMailTemplateDTO): Promise<string> {
    return template;
  }
}

export default FakeMailTemplateProvider;
