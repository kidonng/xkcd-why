import got from 'got'
import { NowRequest, NowResponse } from '@now/node'

export default async ({ query }: NowRequest, { json, status }: NowResponse) => {
  try {
    let number
    if (query.number) number = parseInt(query.number)
    else {
      const { body: random } = await got('https://www.random.org/integers/', {
        searchParams: {
          num: 1,
          min: 0,
          max: 33170, // 33171 questions
          col: 1,
          base: 10,
          format: 'plain',
          rnd: 'new'
        }
      })
      number = parseInt(random)
    }

    const { body: questions } = await got(
      'https://cdn.jsdelivr.net/gh/kidonng/xkcd-why/api/why.txt'
    )
    const question = questions.split('\n')[number]

    json({ number, question })
  } catch (e) {
    status(503)
    json(e)
  }
}
