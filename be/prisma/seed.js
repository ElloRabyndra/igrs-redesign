import { PrismaClient } from '@prisma/client';
import { seedRatings } from './seeders/rating.seeder.js';
import { seedGames } from './seeders/game.seeder.js';
import { seedBlogs } from './seeders/blog.seeder.js';

const prisma = new PrismaClient();

async function main() {
  console.log('Starting seed process...');
  
  // Seed Ratings first because Games depend on them
  await seedRatings(prisma);
  
  // Seed Games
  await seedGames(prisma);
  
  // Seed Blogs
  await seedBlogs(prisma);
  
  console.log('🎉 Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
