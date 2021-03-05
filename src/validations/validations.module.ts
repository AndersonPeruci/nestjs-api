import { ValidationsController } from './validations.controller';
import { ValidationsService } from './shared/validations.service';
import { Module } from '@nestjs/common';
import { results } from './shared/schema/validation.schema'
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'results', schema: results}])
    ],
    controllers: [ ValidationsController ],
    providers: [ ValidationsService ],
})
export class ValidationsModule {}
