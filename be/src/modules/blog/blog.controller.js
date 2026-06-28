import { BlogService } from './blog.service.js';
import { successResponse } from '../../utils/response.js';
export class BlogController {
  constructor() {
    this.blogService = new BlogService();
  }
  getAll = async (req, res, next) => {
    try {
      const blogs = await this.blogService.getAllBlogs();
      return successResponse(res, blogs, 'Blogs retrieved successfully');
    } catch (error) {
      next(error);
    }
  };
  getBySlug = async (req, res, next) => {
    try {
      const {
        slug
      } = req.params;
      if (!slug || typeof slug !== 'string') {
        const error = new Error('Invalid slug');
        error.statusCode = 400;
        throw error;
      }
      const blog = await this.blogService.getBlogBySlug(slug);

      if (!blog) {
        const error = new Error('Blog not found');
        error.statusCode = 404;
        throw error;
      }

      return successResponse(res, blog, 'Blog retrieved successfully');
    } catch (error) {
      next(error);
    }
  };
}