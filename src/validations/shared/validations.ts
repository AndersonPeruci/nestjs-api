import { Document } from 'mongoose'

export class Validation extends Document{
    createdAt: Date
    fileTitle: String
    userID: String
    fileId: String
    spaces: []
    walls: []
    beds: []
    nightstand: []
    unboundedHeight: []
    Wardrobes: []
}
