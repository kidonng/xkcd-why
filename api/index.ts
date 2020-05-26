import got from 'got'
import { NowRequest, NowResponse } from '@vercel/node'

export default async (
  { headers, query }: NowRequest,
  { json, status }: NowResponse
) => {
  try {
    let number: number
    if (typeof query.number === 'string') number = parseInt(query.number)
    else {
      const { body: random } = await got('https://www.random.org/integers/', {
        searchParams: {
          num: 1,
          min: 0,
          max: 33170, // 33171 questions
          col: 1,
          base: 10,
          format: 'plain',
          rnd: 'new',
        },
      })
      number = parseInt(random)
    }

    const { body: questions } = await got(
      `${headers['x-forwarded-proto']}://${headers.host}/why.txt`
    )
    const question = questions.split('\n')[number]

    json({ number, question })
  } catch (e) {
    status(500)
    json(e)
  }
}
