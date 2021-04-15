import { rest } from 'msw'
import { v1 } from './v1'

export const handlers = [
  ...v1,
].map(handler => {
  const {
    method,
    route,
    result
  } = handler

  return rest[method](route, async(request, response, context) => {
    const { status, json, text } = await result(request)

    return response(
      context.status(status),
      json && context.json(json),
      text && context.text(text)
    )
  })
})
