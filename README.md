# [xkcd](https://xkcd.com/1256/) why

Get a truly random<sup>*</sup> question from [a list of random ones](https://web.archive.org/web/20180729163548/https://xkcd.com/why.txt) picked by xkcd. Inspired by https://yesno.wtf/.

\* We use [RANDOM.ORG](https://www.random.org/).

## API

**GET** `/api`

```json
{
  "number": 42,
  "question": "why do utis hurt"
}
```

| Params | Type     | Description            |
| ------ | -------- | ---------------------- |
| number | *string* | Number of the question |

## Related

- [explain xkcd](https://explainxkcd.com/wiki/index.php/1256:_Questions)
- [Reddit](https://www.reddit.com/r/xkcd/comments/35gp1g/whytxt/)
- https://github.com/1995eaton/GoogleQuery: contains a alphabetically sorted list and some other interesting data
