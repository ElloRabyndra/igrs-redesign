import prisma from '../../config/prisma.js';
export class ContentRepository {
  async findAll() {
    return prisma.contentClassification.findMany({
      select: {
        id: true,
        title: true,
        content_icon: true,
        description: true
      }
    });
  }
}