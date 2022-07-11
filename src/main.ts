import './style.css'

const App = document.querySelector('#app')!

let y = ['y','y','y','y','y','y','y','y','y']
let w = ['w','w','w','w','w','w','w','w','w']
let g = ['g','g','g','g','g','g','g','g','g']
let b = ['b','b','b','b','b','b','b','b','b']
let r = ['r','r','r','r','r','r','r','r','r']
let o = ['o','o','o','o','o','o','o','o','o']

//let raw_cube:string;

let sides = [y, w, g, b, r, o]

function parseCubeString() {
  let temp:string = '';
  for (let i = 0; i<6; i++) {
    for (let j = 0; j<9; j++) {
      temp += sides[i][j]
    }
  }
  return temp;
}

// parseCubeString should return something like:
// yyyyyyyyywwwwwwwwwgggggggggbbbbbbbbbrrrrrrrrrooooooooo
// exactly 54 characters in a single string.

// A colo(u)r that starts with t is a temporary variable, to ensure that nothing goes wrong.
// In order to delink the variables just use .slice()

function left() {
  // Red clockwise
  const ty = y.slice()
  const tw = w.slice()
  const tg = g.slice()
  const tb = b.slice()
  const tr = r.slice()
  y[0] = tb[0]
  y[3] = tb[3]
  y[6] = tb[6]
  b[0] = tw[0]
  b[3] = tw[3]
  b[6] = tw[6]
  w[0] = tg[8]
  w[3] = tg[5]
  w[6] = tg[2]
  g[8] = ty[0]
  g[5] = ty[3]
  g[2] = ty[6]
  r[0] = tr[6]
  r[1] = tr[3]
  r[2] = tr[0]
  r[3] = tr[7]
  r[5] = tr[1]
  r[6] = tr[8]
  r[7] = tr[5]
  r[8] = tr[2]
}

function left_i() {
  // Red cclockwise
  const ty = y.slice()
  const tw = w.slice()
  const tg = g.slice()
  const tb = b.slice()
  const tr = r.slice()
  y[0] = tg[8]
  y[3] = tg[5]
  y[6] = tg[2]
  b[0] = ty[0]
  b[3] = ty[3]
  b[6] = ty[6]
  w[0] = tb[0]
  w[3] = tb[3]
  w[6] = tb[6]
  g[8] = tw[0]
  g[5] = tw[3]
  g[2] = tw[6]
  r[0] = tr[2]
  r[1] = tr[5]
  r[2] = tr[8]
  r[3] = tr[1]
  r[5] = tr[7]
  r[6] = tr[0]
  r[7] = tr[3]
  r[8] = tr[6]
}

function right() {
  // Orange clockwise
  const ty = y.slice()
  const tw = w.slice()
  const tg = g.slice()
  const tb = b.slice()
  const to = o.slice()
  y[2] = tg[6]
  y[5] = tg[3]
  y[8] = tg[0]
  b[2] = ty[2]
  b[5] = ty[5]
  b[8] = ty[8]
  w[2] = tb[2]
  w[5] = tb[5]
  w[8] = tb[8]
  g[6] = tw[2]
  g[3] = tw[5]
  g[0] = tw[8]
  o[0] = to[6]
  o[1] = to[3]
  o[2] = to[0]
  o[3] = to[7]
  o[5] = to[1]
  o[6] = to[8]
  o[7] = to[5]
  o[8] = to[2]
}

function right_i() {
  // Orange cclockwise
  const ty = y.slice()
  const tw = w.slice()
  const tg = g.slice()
  const tb = b.slice()
  const to = o.slice()
  y[2] = tb[2]
  y[5] = tb[5]
  y[8] = tb[8]
  b[2] = tw[2]
  b[5] = tw[5]
  b[8] = tw[8]
  w[2] = tg[6]
  w[5] = tg[3]
  w[8] = tg[0]
  g[6] = ty[2]
  g[3] = ty[5]
  g[0] = ty[8]
  o[0] = to[2]
  o[1] = to[5]
  o[2] = to[8]
  o[3] = to[1]
  o[5] = to[7]
  o[6] = to[0]
  o[7] = to[3]
  o[8] = to[6]
}

function down() {
  // Yellow clockwise
  const to = o.slice()
  const tb = b.slice()
  const tr = r.slice()
  const ty = y.slice()
  const tg = g.slice()
  b[6] = tr[6]
  b[7] = tr[7]
  b[8] = tr[8]
  r[6] = tg[6]
  r[7] = tg[7]
  r[8] = tg[8]
  g[6] = to[6]
  g[7] = to[7]
  g[8] = to[8]
  o[6] = tb[6]
  o[7] = tb[7]
  o[8] = tb[8]
  y[0] = ty[6]
  y[1] = ty[3]
  y[2] = ty[0]
  y[3] = ty[7]
  y[5] = ty[1]
  y[6] = ty[8]
  y[7] = ty[5]
  y[8] = ty[2]
}

function down_i() {
  // Yellow cclockwise
  const to = o.slice()
  const tb = b.slice()
  const tr = r.slice()
  const ty = y.slice()
  const tg = g.slice()
  b[6] = to[6]
  b[7] = to[7]
  b[8] = to[8]
  r[6] = tb[6]
  r[7] = tb[7]
  r[8] = tb[8]
  g[6] = tr[6]
  g[7] = tr[7]
  g[8] = tr[8]
  o[6] = tg[6]
  o[7] = tg[7]
  o[8] = tg[8]
  y[0] = ty[2]
  y[1] = ty[5]
  y[2] = ty[8]
  y[3] = ty[1] 
  y[5] = ty[7]
  y[6] = ty[0]
  y[7] = ty[3]
  y[8] = ty[6]
}
left()
left_i()
right()
right_i()
down()
down_i()


App.innerHTML = parseCubeString()