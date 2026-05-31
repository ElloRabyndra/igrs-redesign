import { ContentRepository } from './content.repository.js';
export class ContentService {
  constructor() {
    this.contentRepository = new ContentRepository();
  }
  async getAllClassifications() {
    const classifications = await this.contentRepository.findAll();
    return classifications.map(c => ({
      id: c.id,
      title: c.title,
      content_icon: c.content_icon,
      description: c.description
    }));
  }
}