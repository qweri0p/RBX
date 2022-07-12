import './style.css'

const App = document.querySelector('#app')!

/*let y = ['y','y','y','y','y','y','y','y','y']
let w = ['w','w','w','w','w','w','w','w','w']
let g = ['g','g','g','g','g','g','g','g','g']
let b = ['b','b','b','b','b','b','b','b','b']
let r = ['r','r','r','r','r','r','r','r','r']
let o = ['o','o','o','o','o','o','o','o','o']*/
let y = ['b','y','y','b','y','w','r','o','o']
let w = ['o','w','w','r','w','g','y','b','y']
let g = ['o','r','b','w','g','o','g','g','g']
let b = ['o','w','b','y','b','r','w','b','g']
let r = ['y','b','g','y','r','r','w','o','r']
let o = ['r','y','b','g','o','o','r','g','w']

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

function up() {
  // White clockwise
  const to = o.slice()
  const tb = b.slice()
  const tr = r.slice()
  const tw = w.slice()
  const tg = g.slice()
  b[0] = to[0]
  b[1] = to[1]
  b[2] = to[2]
  r[0] = tb[0]
  r[1] = tb[1]
  r[2] = tb[2]
  g[0] = tr[0]
  g[1] = tr[1]
  g[2] = tr[2]
  o[0] = tg[0]
  o[1] = tg[1]
  o[2] = tg[2]
  w[0] = tw[6]
  w[1] = tw[3]
  w[2] = tw[0]
  w[3] = tw[7]
  w[5] = tw[1]
  w[6] = tw[8]
  w[7] = tw[5]
  w[8] = tw[2]
}

function up_i() {
  // White cclockwise
  const to = o.slice()
  const tb = b.slice()
  const tr = r.slice()
  const tw = w.slice()
  const tg = g.slice()
  b[0] = tr[0]
  b[1] = tr[1]
  b[2] = tr[2]
  r[0] = tg[0]
  r[1] = tg[1]
  r[2] = tg[2]
  g[0] = to[0]
  g[1] = to[1]
  g[2] = to[2]
  o[0] = tb[0]
  o[1] = tb[1]
  o[2] = tb[2]
  w[0] = tw[2]
  w[1] = tw[5]
  w[2] = tw[8]
  w[3] = tw[1]
  w[5] = tw[7]
  w[6] = tw[0]
  w[7] = tw[3]
  w[8] = tw[6]
}

function front() {
  // Blue clockwise
  const to = o.slice()
  const tb = b.slice()
  const tr = r.slice()
  const tw = w.slice()
  const ty = y.slice()
  y[0] = to[6]
  y[1] = to[3]
  y[2] = to[0]
  r[2] = ty[0]
  r[5] = ty[1]
  r[8] = ty[2]
  w[6] = tr[8]
  w[7] = tr[5]
  w[8] = tr[2]
  o[0] = tw[6]
  o[3] = tw[7]
  o[6] = tw[8]
  b[0] = tb[6]
  b[1] = tb[3]
  b[2] = tb[0]
  b[3] = tb[7]
  b[5] = tb[1]
  b[6] = tb[8]
  b[7] = tb[5]
  b[8] = tb[2]
}

function front_i() {
  // Blue cclockwise
  const to = o.slice()
  const tb = b.slice()
  const tr = r.slice()
  const tw = w.slice()
  const ty = y.slice()
  o[6] = ty[0]
  o[3] = ty[1]
  o[0] = ty[2]
  y[0] = tr[2]
  y[1] = tr[5]
  y[2] = tr[8]
  r[2] = tw[8]
  r[5] = tw[7]
  r[8] = tw[6]
  w[8] = to[6]
  w[7] = to[3]
  w[6] = to[0]
  b[0] = tb[2]
  b[1] = tb[5]
  b[2] = tb[8]
  b[3] = tb[1]
  b[5] = tb[7]
  b[6] = tb[0]
  b[7] = tb[3]
  b[8] = tb[6]
}

function back() {
  // Green clockwise
  const to = o.slice()
  const tg = g.slice()
  const tr = r.slice()
  const tw = w.slice()
  const ty = y.slice()
  o[8] = ty[6]
  o[7] = ty[7]
  o[6] = ty[8]
  y[6] = tr[0]
  y[7] = tr[3]
  y[8] = tr[6]
  r[0] = tw[2]
  r[3] = tw[1]
  r[6] = tw[0]
  w[0] = to[2]
  w[1] = to[5]
  w[2] = to[8]
  g[0] = tg[6]
  g[1] = tg[3]
  g[2] = tg[0]
  g[3] = tg[7]
  g[5] = tg[1]
  g[6] = tg[8]
  g[7] = tg[5]
  g[8] = tg[2]
}

function back_i() {
  // Green cclockwise
  const to = o.slice()
  const tg = g.slice()
  const tr = r.slice()
  const tw = w.slice()
  const ty = y.slice()
  y[6] = ty[8]
  y[7] = to[5]
  y[8] = to[2]
  r[0] = ty[6]
  r[3] = ty[7]
  r[6] = ty[8]
  w[0] = tr[6]
  w[1] = tr[3]
  w[2] = tr[0]
  o[2] = tw[0]
  o[5] = tw[1]
  o[8] = tw[2]
  g[0] = tg[2]
  g[1] = tg[5]
  g[2] = tg[8]
  g[3] = tg[1]
  g[5] = tg[7]
  g[6] = tg[0]
  g[7] = tg[3]
  g[8] = tg[6]
}

// Solving logic
let solve_state = 1;
let cube_solved = true;

function cube_decide_cross() {
  if (w[1] === 'w' && w[5] === 'w' &&  w[3] === 'w' && w[7] === 'w') {
    // If cross is finished then continue with next step.
    solve_state = 2;
  }
  else if (solve_state === 1) {
    if (b[3] === 'w') {
      for (let i=0; i<3; i++) {
        if (w[3] !== 'w') {
          left_i()
          i = 3
        } else {
          up()
        }
      }
    }
    else if (b[5] === 'w') {
      for (let i=0; i<3; i++) {
        if (w[5] !== 'w') {
          right()
          i=3
        } else {
          up()
        }
      }
    }
    else if (r[5] === 'w') {
      for (let i=0; i<3; i++) {
        if (w[1] !== 'w') {
          front()
          i=3
        } else {
          up()
        }
      }
    }
    else if (r[3] === 'w') {
      for (let i=0; i<3; i++) {
        if (w[1] !== 'w') {
          back_i()
          i=3
        } else {
          up()
        }
      }
    }
    else if (g[5] === 'w') {
      for (let i=0; i<3; i++) {
        if (w[3] !== 'w') {
          left()
          i=3
        } else {
          up()
        }
      }
    }
    else if (g[3] === 'w') {
      for (let i=0; i<3; i++) {
        if (w[5] !== 'w') {
          right_i()
          i=3
        } else {
          up()
        }
      }
    }
    else if (o[5] === 'w') {
      for (let i=0; i<3; i++) {
        if (w[1] !== 'w') {
          back()
          i=3
        } else {
          up()
        }
      }
    }
    else if (o[3] === 'w') {
      for (let i=0; i<3; i++) {
        if (w[1] !== 'w') {
          front_i()
          i=3
        } else {
          up()
        }
      }
    }
    //NOT DONE YET
  }
}

App.innerHTML = parseCubeString()