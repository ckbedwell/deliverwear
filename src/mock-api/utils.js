const requiredKeys = [`name`, `price`, `description`]

export function isItemValid(item) {
  let valid = true

  requiredKeys.forEach(key => {
    if (!item[key]) {
      valid = false
    }
  })

  return valid
}

export function getMissingInformation(item) {
  let missing = []

  requiredKeys.forEach(key => {
    if (!item[key]) {
      missing.push(key)
    }
  })

  return missing
}

export function getInvalidInformation(item) {
  const typeMap = {
    name: `string`,
    description: `string`,
    price: `number`,
  }

  let errors = []

  Object.entries(typeMap).forEach(([key, value]) => {
    if (typeof item[key] !== value) {
      errors.push(`${key} is not a ${value}`)
    }
  })

  return errors
}
