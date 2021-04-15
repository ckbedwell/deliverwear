import jwt from './jwt.json'

export function authorizedApi(request, authorizedResponse) {
  if (request.headers._headers.authorization === `Bearer ${jwt}`) {
    return authorizedResponse()
  }

  return notAuthorizedResponse
}

const notAuthorizedResponse = {
  status: 401,
  json: `You don't have the right permissions`,
}
