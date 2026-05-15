import { ContentRepository } from './content.repository';

export class ContentService {
  private contentRepository: ContentRepository;

  constructor() {
    this.contentRepository = new ContentRepository();
  }

  async getAllClassifications() {
    return this.contentRepository.findAll();
  }
}
