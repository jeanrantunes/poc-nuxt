export const getAttrJson = (self, name) => {
  const { $el } = self
  const attr = $el.getAttribute(name)

  return JSON.parse(attr)
}

export const getAttr = (self, name) => {
  const { $el } = self
  return $el.getAttribute(name)
}
