import { BlogRepository } from './blog.repository.js';
export class BlogService {
  constructor() {
    this.blogRepository = new BlogRepository();
  }
  async getAllBlogs() {
    const blogs = await this.blogRepository.findAll();
    return blogs.map(blog => {
      const { updated_at, ...rest } = blog;
      return {
        ...rest,
        date: updated_at ? new Date(updated_at).toISOString().split('T')[0] : null
      };
    });
  }
  async getBlogBySlug(slug) {
    const blog = await this.blogRepository.findBySlug(slug);
    if (!blog) {
      return null;
    }
    return blog;
  }
}