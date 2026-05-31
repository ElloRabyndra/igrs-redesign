import prisma from '../../config/prisma.js';
export class BlogRepository {
  async findAll() {
    return prisma.blog.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        image_url: true,
        updated_at: true,

      }
    });
  }
  async findBySlug(slug) {
    return prisma.blog.findUnique({
      where: {
        slug
      },
      select: {
        id: true,
        slug: true,
        image_url: true,
        updated_at: true,

      }
    });
  }
}