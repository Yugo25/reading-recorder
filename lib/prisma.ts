import { PrismaClient } from '@/app/generated/prisma/client'

const globalForPrisma = global as unknown as { prisma: PrismaClient };

// Reuse if PrismaClient exists in global.prisma
const prisma =
    globalForPrisma.prisma || new PrismaClient({ log: ['query'] });

// Put objects in globalForPrisma if it's not in prodution environment
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;