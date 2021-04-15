import {
  isItemValid,
  getMissingInformation,
  getInvalidInformation
} from './utils'
import inventory from './inventory.json'

export const v2 = [
  {
    route: `/api/v2/wearables`,
    method: `get`,
    result: (request) => {
      return {
        status: 200,
        json: inventory
      }
    }
  },
  {
    route: `/api/v2/wearables`,
    method: `post`,
    result: (request) => {
      const item = (request.body && JSON.parse(request.body)) || {}

      if (isItemValid(item)) {
        return {
          status: 200,
          json: `wearable received`
        }
      }

      return {
        status: 400,
        json: {
          missing: getMissingInformation(item),
          invalid: getInvalidInformation(item)
        }
      }
    }
  },
  {
    route: `/api/v2/wearables`,
    method: `delete`,
    result: (request) => {
      if (request.body && JSON.parse(request.body)?.id) {
        const id = JSON.parse(request.body).id

        if (id) {
          if (Number.isInteger(Number(id))) {
            return {
              status: 200,
              json: `wearable deleted (id: ${JSON.parse(request.body).id})`
            }
          }

          return {
            status: 400,
            json: `id is wrong format`
          }
        }
      }

      return {
        status: 400,
        json: `no id provided`
      }
    }
  }
]
