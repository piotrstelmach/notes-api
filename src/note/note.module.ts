import { Module } from '@nestjs/common';
import { NoteService } from './note.service';
import { NoteController } from './note.controller';
import {PrismaService} from "../prisma.service";

@Module({
  controllers: [NoteController],
  providers: [NoteService, PrismaService],
})
export class NoteModule {}
