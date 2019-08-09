import got from 'got'
import { NowRequest, NowResponse } from '@now/node'

export default async (req: NowRequest, { send, json, status }: NowResponse) => {
  try {
    const { body: rand } = await got('https://www.random.org/integers/', {
      query: {
        num: 1,
        min: 0,
        max: 33170, // 0~33170 -> 1~33171
        col: 1,
        base: 10,
        format: 'plain',
        rnd: 'new'
      }
    })
    const { body: why } = await got(
      'https://gist.github.com/kidonng/a5c155fe2bb5141a8c403dde3e0a1d77/raw/cd9747e9537b26c960e78f29d86022a5f9942395/why.txt'
    )

    send(why.split('\n')[parseInt(rand)])
  } catch (e) {
    status(500)
    json(e)
  }
}
