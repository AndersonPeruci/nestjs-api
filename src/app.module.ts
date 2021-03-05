import { ValidationsModule } from './validations/validations.module';
import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'

@Module({
    imports: [
        MongooseModule.forRoot('mongodb+srv://admin:JFPWr54GBPRzESYd@clustervalidesk.z2ug0.mongodb.net/ClusterValidesk?retryWrites=true&w=majority'),
        // MongooseModule.forRoot('mongodb+srv://admin:admin@db.pdo12.gcp.mongodb.net/nestjsTasks?retryWrites=true&w=majority'),
        ValidationsModule,
        AuthModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
