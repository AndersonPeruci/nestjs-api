import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Validation } from './shared/validations';
import { ValidationsService } from './shared/validations.service';

@Controller('validations')
export class ValidationsController {
    constructor(
        private validationService: ValidationsService
    ){ }

    // @Get()
    // async getAll() : Promise<Validation[]>{
    //     return this.validationService.getAll()
    // }

    @Get(':id')
    async getById(@Param('id') id: string) : Promise<Validation>{
        //@ts-ignore
        return this.validationService.getById(id)
    }

    // @Post()
    // async create(@Body() Validation: Validation) : Promise<Validation>{
    //     return this.validationService.create(Validation)
    // }

    // @Put(':id')
    // async update(@Param('id') id: string, @Body() task: Validation) : Promise<Validation>{
    //     return this.validationService.update(id, task)
    // }

    // @Delete(':id')
    // async delete(@Param('id') id: string){
    //     this.validationService.delete(id)
    // }
}
