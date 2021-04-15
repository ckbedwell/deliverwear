import { parse } from 'query-string'
import {
  isItemValid,
  getMissingInformation
} from './utils'
import inventory from './inventory.json'

export const v1 = [
  {
    route: `/api/v1/wearables`,
    method: `get`,
    result: (request) => {
      return {
        status: 200,
        json: inventory
      }
    }
  },
  {
    route: `/api/v1/wearables/add`,
    method: `get`,
    result: (request) => {
      const item = parse(request.url.search)
      if (isItemValid(item)) {
        return {
          status: 200,
          json: `wearable received`
        }
      }

      return {
        status: 400,
        text: `missing ${getMissingInformation(item).join(`, `)}`
      }
    }
  },
  {
    route: `/api/v1/wearables/delete`,
    method: `get`,
    result: (request) => {
      const { id } = parse(request.url.search)

      if (id) {
        if (Number.isInteger(Number(id))) {
          return {
            status: 200,
            json: `wearable deleted (id: ${id})`
          }
        }

        return {
          status: 400,
          text: `id is wrong format`
        }
      }

      return {
        status: 400,
        text: `no id provided`
      }
    }
  }
]
