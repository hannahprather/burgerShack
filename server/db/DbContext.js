import mongoose from 'mongoose'
import { ValueSchema } from '../models/Value'

class DbContext {

  burgers = [{ id: 1, name: "Guac Burg", price: 10 }, { id: 2, name: "Veggie", price: 4 }]

}

export const dbContext = new DbContext()
