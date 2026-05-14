import { BlogRepository } from './blog.repository';

export class BlogService {
  private blogRepository: BlogRepository;

  constructor() {
    this.blogRepository = new BlogRepository();
  }

  async getAllBlogs() {
    return this.blogRepository.findAll();
  }

  async getBlogBySlug(slug: string) {
    const blog = await this.blogRepository.findBySlug(slug);
    if (!blog) {
      const error: any = new Error('Blog not found');
      error.statusCode = 404;
      throw error;
    }
    return blog;
  }
}
