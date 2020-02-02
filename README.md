# xkcd why

[![Website status](https://img.shields.io/website/https/xkcd-why.now.sh.svg)](https://xkcd-why.now.sh/)
[![Relevant xkcd: 1256](https://img.shields.io/badge/relevant%20xkcd-1256-blue)](https://xkcd.com/1256/)
[![License](https://img.shields.io/github/license/kidonng/xkcd-why.svg)](LICENSE)

> ["Why is there always a relevant xkcd"](https://www.reddit.com/r/xkcd/comments/35gp1g/whytxt/cr4fjlm/)

Get a truly random* question from https://xkcd.com/why.txt (it's missing now, but you can find it elsewhere like on [Wayback Machine](https://web.archive.org/web/20180729163548/https://xkcd.com/why.txt)).

*We use [RANDOM.ORG](https://www.random.org/)

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
- https://github.com/1995eaton/GoogleQuery - contains a alphabetically sorted list and some other interesting data
- [yesno.wtf — foolproof™ decision-making](https://yesno.wtf/)
