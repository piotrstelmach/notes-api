import { Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import {PrismaService} from "../prisma.service";

@Injectable()
export class TagService {
  constructor(private prisma: PrismaService) {}

  create(createTagDto: CreateTagDto) {
    return this.prisma.tag.create({ data: createTagDto });
  }

  findAll() {
    return this.prisma.tag.findMany();
  }

  findOne(id: number) {
    return this.prisma.tag.findFirst({ where: { id: `${id}` } });
  }

  update(id: number, updateTagDto: UpdateTagDto) {
    return this.prisma.tag.update({ where: { id: `${id}` }, data: updateTagDto });
  }

  remove(id: number) {
    return this.prisma.tag.delete({ where: { id: `${id}` } });
  }
}
