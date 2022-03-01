import { dbContext } from "../db/DbContext"
import { logger } from "../utils/Logger"



class BurgersService {
  async getAllBurgers() {
    const burgers = await dbContext.burgers
    return burgers
  }

  async createBurger(body) {
    const burger = await dbContext.burgers.push(body)
    return body

  }

  removeBurger(burgerId) {
    logger.log('catId for user', typeof burgerId)
    const index = dbContext.burgers.findIndex(b => b.id.toString() === burgerId)
    if (index === -1) {
      throw new Error('no burger at that Id')
    }
    dbContext.burgers.splice(index, 1)
    return 'she gone'
  }


}









export const burgersService = new BurgersService()