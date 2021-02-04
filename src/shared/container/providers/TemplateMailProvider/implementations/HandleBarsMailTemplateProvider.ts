import handlebars from 'handlebars';
import IMailTemplateProvider from '@shared/container/providers/TemplateMailProvider/models/IMailTemplateProvider';
import IParseMailTemplateDTO from '@shared/container/providers/TemplateMailProvider/dtos/IParseMailTemplateDTO';

class HandleBarsMailTemplateProvider implements IMailTemplateProvider {
  public async parse({
    template,
    variables,
  }: IParseMailTemplateDTO): Promise<string> {
    const parseTemplate = handlebars.compile(template);

    return parseTemplate(variables);
  }
}

export default HandleBarsMailTemplateProvider;
