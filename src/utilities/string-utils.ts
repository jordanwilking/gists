type Dictionary = {
  [key: string]: string
}

// Add items with unique plural forms here (e.g. "Search": "Searches")
const dictionary: Dictionary = {}

export const pluralize = (
  str: string,
  count: number,
  dict: Dictionary = dictionary
) => {
  if (count === 1) return str

  if (dict[str]) {
    return dict[str]
  } else {
    return str + 's'
  }
}

export const truncate = (str: string, maxChars: number) => {
  if (maxChars <= 0) return '...'
  if (str.length <= maxChars) return str
  return str.slice(0, maxChars) + '...'
}
