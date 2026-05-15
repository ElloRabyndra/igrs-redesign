import prisma from '../../config/prisma';

export class BlogRepository {
  async findAll() {
    return prisma.blog.findMany({
      select: {
        id: true,
        title: true,
        image_url: true,
        updated_at: true,
        category: {
          select: {
            id: true,
            title: true,
          }
        }
      }
    });
  }

  async findBySlug(slug: string) {
    return prisma.blog.findUnique({
      where: { slug },
      select: {
        id: true,
        slug: true,
        image_url: true,
        updated_at: true,
        category: {
          select: {
            id: true,
            title: true,
          }
        }
      }
    });
  }
}
