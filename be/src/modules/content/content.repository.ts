import prisma from '../../config/prisma';

export class ContentRepository {
  async findAll() {
    return prisma.contentClassification.findMany({
      select: {
        id: true,
        title: true,
        image_url: true,
        description: true,
      }
    });
  }
}
