import prisma from '../../config/prisma';

export class GameRepository {
  async findAll() {
    return prisma.game.findMany({
      select: {
        id: true,
        title: true,
        image_url: true,
        rating: {
          select: {
            id: true,
            image_url: true,
          },
        },
      },
    });
  }

  async findBySlug(slug: string) {
    return prisma.game.findUnique({
      where: { slug },
      select: {
        id: true,
        title: true,
        slug: true,
        image_url: true,
        publisher: true,
        review_summary: true,
        rating: {
          select: {
            id: true,
            image_url: true,
            content_classifications: {
              select: {
                image_url: true,
              },
            },
          },
        },
        gallery: {
          select: {
            id: true,
            image_url: true,
          },
        },
      },
    });
  }
}
