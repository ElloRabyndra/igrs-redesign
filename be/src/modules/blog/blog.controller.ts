import { Request, Response, NextFunction } from 'express';
import { BlogService } from './blog.service';
import { successResponse } from '../../utils/response';

export class BlogController {
  private blogService: BlogService;

  constructor() {
    this.blogService = new BlogService();
  }

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const blogs = await this.blogService.getAllBlogs();
      return successResponse(res, blogs, 'Blogs retrieved successfully');
    } catch (error) {
      next(error);
    }
  };

  getBySlug = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { slug } = req.params;
      if (!slug || typeof slug !== 'string') {
        const error: any = new Error('Invalid slug');
        error.statusCode = 400;
        throw error;
      }
      const blog = await this.blogService.getBlogBySlug(slug);
      return successResponse(res, blog, 'Blog retrieved successfully');
    } catch (error) {
      next(error);
    }
  };
}
