import * as mongoose from 'mongoose'

export const results =  new mongoose.Schema({
    createdAt: Date,
    fileTitle: String,
    userID: String,
    fileId: String,
    spaces: [],
    walls: [],
    beds: [],
    nightstand: [],
    unboundedHeight: [],
    Wardrobes: []
})