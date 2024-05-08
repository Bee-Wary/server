import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Beehive, BeehiveSchema } from "./beehive.schema";
import { BeehivesService } from './beehives.service';
import { BeehivesController } from "./beehives.controller";

@Module({
    imports: [MongooseModule.forFeature([{ name: Beehive.name, schema: BeehiveSchema }])],
    controllers: [BeehivesController],
    providers: [BeehivesService]
})
export class BeehiveModule { }