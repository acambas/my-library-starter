import { add } from '../index'

test('test stuff', () => {
  const res = add(1, 2)
  expect(res).toEqual(3)
})
