import { Injectable } from '@nestjs/common';
import { Validation } from './validations'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

@Injectable()
export class ValidationsService {

    constructor(@InjectModel('results') private readonly validationModel: Model<Validation>){ }

    // async getAll(){
    //     return await this.validationModel.find().exec()
    // }

    async getById(id: string){
        return await this.validationModel.find({userID: id}).exec()
    }

    // async create(validation: Validation){
    //     const createdTask = new this.validationModel(validation)
    //     return await createdTask.save()
    // }

    // async update(id: string, validation: Validation){
    //     await this.validationModel.updateOne({_id: id}, validation).exec() 
    //     return this.getById(id)
    // }

    // async delete(id: string){
    //     return await this.validationModel.deleteOne({_id: id}).exec() 
    // }
}

