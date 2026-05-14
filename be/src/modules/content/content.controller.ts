import { Request, Response, NextFunction } from 'express';
import { ContentService } from './content.service';
import { successResponse } from '../../utils/response';

export class ContentController {
  private contentService: ContentService;

  constructor() {
    this.contentService = new ContentService();
  }

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const classifications = await this.contentService.getAllClassifications();
      return successResponse(res, classifications, 'Content classifications retrieved successfully');
    } catch (error) {
      next(error);
    }
  };
}
