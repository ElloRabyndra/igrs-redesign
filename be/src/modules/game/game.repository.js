import prisma from "../../config/prisma.js";
export class GameRepository {
  async findAll() {
    return prisma.game.findMany({
      select: {
        id: true,
        title: true,
        slug: true,
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
  async findBySlug(slug) {
    return prisma.game.findUnique({
      where: {
        slug,
      },
      select: {
        id: true,
        title: true,
        description: true,
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
                id: true,
                content_icon: true,
                title: true,
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
