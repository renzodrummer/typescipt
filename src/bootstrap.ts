import { getRepository } from 'typeorm';
import { Photo } from './entity/Photo';

export const Bootstrap = async () => {
  const userRepo = getRepository(Photo);

  const user = userRepo.create({
    name: "Me and Bears",
    description: "I am near polar bears",
    filename: "photo-with-bears.jpg",
    views: 1,
    isPublished: true,
  })

}