import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {PrismaService} from "./prisma.service";
import {NoteModule} from "./note/note.module";
import { TagModule } from './tag/tag.module';

@Module({
  imports: [NoteModule, TagModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
