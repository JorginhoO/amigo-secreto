import { PrismaClient, Prisma } from "@prisma/client";


const prisma = new PrismaClient();

export const getAll = async () => {
    try {
        return prisma.event.findMany();
    } catch (err) { return false   }    
}

export const getOne = async (id: number) => {
    try {
        return await prisma.event.findFirst({ where: { id } });
    } catch (err) { return false}
}

type EventsCreateData = Prisma.Args<typeof prisma.event, 'create'>['data'];
export const add = async (data: EventsCreateData) => {
    try {
        return await prisma.event.create({ data });
    } catch (err) {return false}
}

type EventsupdateData = Prisma.Args<typeof prisma.event, 'update'>['data'];
export const update = async (id: number, data: EventsupdateData) => {
    try {
        return await prisma.event.update({ where: { id }, data });
    } catch (err) {return false}
}

export const remove = async (id: number) => {
    try {
        return await prisma.event.delete({ where: { id } });
    } catch (err) {return false}
}