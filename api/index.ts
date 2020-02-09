import got from 'got'
import { APIGatewayProxyHandler } from 'aws-lambda'

export const handler: APIGatewayProxyHandler = async event => {
  try {
    let number
    if (event.queryStringParameters && event.queryStringParameters.number)
      number = parseInt(event.queryStringParameters.number)
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

    return {
      statusCode: 200,
      body: JSON.stringify({ number, question }),
      headers: {
        'content-type': 'application/json'
      }
    }
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify(e)
    }
  }
}
