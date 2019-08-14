import got from 'got'
import { NowRequest, NowResponse } from '@now/node'

export default async (
  { headers }: NowRequest,
  { send, json, status }: NowResponse
) => {
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
      `${headers['x-now-deployment-url']}/why.txt`
    )

    send(why.split('\n')[parseInt(rand)])
  } catch (e) {
    status(500)
    json(e)
  }
}
