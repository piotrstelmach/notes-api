import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import {PrismaService} from "../prisma.service";
import { Prisma } from "@prisma/client";

@Injectable()
export class NoteService {
  constructor(private prisma: PrismaService) {}

  create(createNoteDto: CreateNoteDto) {
    const createInput: Prisma.NoteCreateInput = {
        title: createNoteDto.title,
        content: createNoteDto.content,
        user: { connect: { id: `${createNoteDto.userId}` } },
        tag: { connect: { id: `${createNoteDto.tagId}` } },
    };
    return this.prisma.note.create({ data: createInput });
  }

  findAll() {
    return this.prisma.note.findMany();
  }

  findOne(id: number) {
    return this.prisma.note.findFirst({ where: { id: `${id}` } });
  }

  update(id: number, updateNoteDto: UpdateNoteDto) {
    const updateInput: Prisma.NoteUpdateInput = {
        title: updateNoteDto.title,
        content: updateNoteDto.content,
        user: { connect: { id: `${updateNoteDto.userId}` } },
        tag: { connect: { id: `${updateNoteDto.tagId}` } },
    }

    return this.prisma.note.update({ where: { id: `${id}` }, data: updateInput });
  }

  remove(id: number) {
    return this.prisma.note.delete({ where: { id: `${id}` } });
  }
}
