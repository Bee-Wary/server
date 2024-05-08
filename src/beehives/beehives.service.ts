import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Beehive } from './beehive.schema';
import { Model } from 'mongoose';

@Injectable()
export class BeehivesService {
    constructor(@InjectModel(Beehive.name) private beehiveModel: Model<Beehive>) { }

    async findAll(): Promise<Beehive[]> {
        return this.beehiveModel.find().exec();
    }
}
