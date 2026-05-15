import prisma from '../../config/prisma';

export class RatingRepository {
  async findAll() {
    return prisma.rating.findMany({
      select: {
        id: true,
        title: true,
        image_url: true,
        summary: true,
        _count: {
          select: { games: true }
        }
      }
    });
  }

  async findById(id: number) {
    return prisma.rating.findUnique({
      where: { id },
      select: {
        id: true,
        title: true,
        description: true,
        image_url: true,
      }
    });
  }
}
