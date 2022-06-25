# RSSchool NodeJS websocket task template
> Static http server and base task packages.

## Installation
1. Clone/download repo
2. `cd remote-contrl`
3. `npm install`

## Usage
**Development**

`npm run start:dev`

* App served @ `http://localhost:3000` with nodemon

**Production**

`npm run start`

* App served @ `http://localhost:3000` without nodemon

---

**All commands**

Command | Description
--- | ---
`npm run dev` | App served @ `http://localhost:3000` with nodemon
`npm run start` | App served @ `http://localhost:3000` without nodemon
`ctrl + p` | Print screenshot 200/200
KEY `s` | Draw a square
KEY `r` | Draw a rectangle
KEY `c` | Draw a circle
`Arrow up` | Mouse move to up
`Arrow down` | Mouse move to down
`Arrow left` | Mouse move to left
`Arrow right` | Mouse move to right
KEY `p` | Get mouse position

**Note**: replace `npm` with `yarn` in `package.json` if you use yarn.