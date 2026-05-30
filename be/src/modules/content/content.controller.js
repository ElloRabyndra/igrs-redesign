import { ContentService } from './content.service.js';
import { successResponse } from '../../utils/response.js';
export class ContentController {
  constructor() {
    this.contentService = new ContentService();
  }
  getAll = async (req, res, next) => {
    try {
      const classifications = await this.contentService.getAllClassifications();
      return successResponse(res, classifications, 'Content classifications retrieved successfully');
    } catch (error) {
      next(error);
    }
  };
}