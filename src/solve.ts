//const App = document.querySelector('#app')!

export class SOLVER {
  instructions: string[];
  y: string[];
  w: string[];
  g: string[];
  b: string[];
  r: string[];
  o: string[];
  solve_state: number;
  finished: boolean;
  solving: boolean;
  sides: string[][];
  constructor(yellow: string[], white: string[], green: string[], blue: string[], red: string[], orange: string[]) {
    this.y = yellow;
    this.w = white;
    this.g = green;
    this.b = blue;
    this.r = red;
    this.o = orange;
    this.instructions = [];
    this.solve_state = 1;
    this.finished = false;
    this.solving = false;
    this.sides = [this.y, this.w, this.g, this.b, this.r, this.o]
  }

  parseCubeString() {
    let temp:string = '';
    for (let i = 0; i<6; i++) {
      for (let j = 0; j<9; j++) {
        temp += this.sides[i][j]
      }
    }
    return temp;
  }
  solve() {
    this.solving = true;
    while (this.finished === false) {
      this.cube_decide_cross();
      this.cube_decide_fix_cross();
    }
    console.log(this.instructions)
    this.solving = false;
    this.finished = false;
    this.instructions = [];
  }
  // rotations:
  left() {

    // Red clockwise
    const ty = this.y.slice()
    const tw = this.w.slice()
    const tg = this.g.slice()
    const tb = this.b.slice()
    const tr = this.r.slice()
    this.y[0] = tb[0]
    this.y[3] = tb[3]
    this.y[6] = tb[6]
    this.b[0] = tw[0]
    this.b[3] = tw[3]
    this.b[6] = tw[6]
    this.w[0] = tg[8]
    this.w[3] = tg[5]
    this.w[6] = tg[2]
    this.g[8] = ty[0]
    this.g[5] = ty[3]
    this.g[2] = ty[6]
    this.r[0] = tr[6]
    this.r[1] = tr[3]
    this.r[2] = tr[0]
    this.r[3] = tr[7]
    this.r[5] = tr[1]
    this.r[6] = tr[8]
    this.r[7] = tr[5]
    this.r[8] = tr[2]
    if (this.solving) this.instructions.push('left')
  }

  left_i() {
    // Red cclockwise
    const ty = this.y.slice()
    const tw = this.w.slice()
    const tg = this.g.slice()
    const tb = this.b.slice()
    const tr = this.r.slice()
    this.y[0] = tg[8]
    this.y[3] = tg[5]
    this.y[6] = tg[2]
    this.b[0] = ty[0]
    this.b[3] = ty[3]
    this.b[6] = ty[6]
    this.w[0] = tb[0]
    this.w[3] = tb[3]
    this.w[6] = tb[6]
    this.g[8] = tw[0]
    this.g[5] = tw[3]
    this.g[2] = tw[6]
    this.r[0] = tr[2]
    this.r[1] = tr[5]
    this.r[2] = tr[8]
    this.r[3] = tr[1]
    this.r[5] = tr[7]
    this.r[6] = tr[0]
    this.r[7] = tr[3]
    this.r[8] = tr[6]
    if (this.solving) this.instructions.push('left_i')
  }
  
  right() {
    // Orange clockwise
    const ty = this.y.slice()
    const tw = this.w.slice()
    const tg = this.g.slice()
    const tb = this.b.slice()
    const to = this.o.slice()
    this.y[2] = tg[6]
    this.y[5] = tg[3]
    this.y[8] = tg[0]
    this.b[2] = ty[2]
    this.b[5] = ty[5]
    this.b[8] = ty[8]
    this.w[2] = tb[2]
    this.w[5] = tb[5]
    this.w[8] = tb[8]
    this.g[6] = tw[2]
    this.g[3] = tw[5]
    this.g[0] = tw[8]
    this.o[0] = to[6]
    this.o[1] = to[3]
    this.o[2] = to[0]
    this.o[3] = to[7]
    this.o[5] = to[1]
    this.o[6] = to[8]
    this.o[7] = to[5]
    this.o[8] = to[2]
    if (this.solving) this.instructions.push('right')
  }
  
  right_i() {
    // Orange cclockwise
    const ty = this.y.slice()
    const tw = this.w.slice()
    const tg = this.g.slice()
    const tb = this.b.slice()
    const to = this.o.slice()
    this.y[2] = tb[2]
    this.y[5] = tb[5]
    this.y[8] = tb[8]
    this.b[2] = tw[2]
    this.b[5] = tw[5]
    this.b[8] = tw[8]
    this.w[2] = tg[6]
    this.w[5] = tg[3]
    this.w[8] = tg[0]
    this.g[6] = ty[2]
    this.g[3] = ty[5]
    this.g[0] = ty[8]
    this.o[0] = to[2]
    this.o[1] = to[5]
    this.o[2] = to[8]
    this.o[3] = to[1]
    this.o[5] = to[7]
    this.o[6] = to[0]
    this.o[7] = to[3]
    this.o[8] = to[6]
    if (this.solving) this.instructions.push('right_i')
  }
  
  down() {
    // Yellow clockwise
    const to = this.o.slice()
    const tb = this.b.slice()
    const tr = this.r.slice()
    const ty = this.y.slice()
    const tg = this.g.slice()
    this.b[6] = tr[6]
    this.b[7] = tr[7]
    this.b[8] = tr[8]
    this.r[6] = tg[6]
    this.r[7] = tg[7]
    this.r[8] = tg[8]
    this.g[6] = to[6]
    this.g[7] = to[7]
    this.g[8] = to[8]
    this.o[6] = tb[6]
    this.o[7] = tb[7]
    this.o[8] = tb[8]
    this.y[0] = ty[6]
    this.y[1] = ty[3]
    this.y[2] = ty[0]
    this.y[3] = ty[7]
    this.y[5] = ty[1]
    this.y[6] = ty[8]
    this.y[7] = ty[5]
    this.y[8] = ty[2]
    if (this.solving) this.instructions.push('down')
  }
  
  down_i() {
    // Yellow cclockwise
    const to = this.o.slice()
    const tb = this.b.slice()
    const tr = this.r.slice()
    const ty = this.y.slice()
    const tg = this.g.slice()
    this.b[6] = to[6]
    this.b[7] = to[7]
    this.b[8] = to[8]
    this.r[6] = tb[6]
    this.r[7] = tb[7]
    this.r[8] = tb[8]
    this.g[6] = tr[6]
    this.g[7] = tr[7]
    this.g[8] = tr[8]
    this.o[6] = tg[6]
    this.o[7] = tg[7]
    this.o[8] = tg[8]
    this.y[0] = ty[2]
    this.y[1] = ty[5]
    this.y[2] = ty[8]
    this.y[3] = ty[1] 
    this.y[5] = ty[7]
    this.y[6] = ty[0]
    this.y[7] = ty[3]
    this.y[8] = ty[6]
    if (this.solving) this.instructions.push('down_i')
  }
  
  up() {
    // White clockwise
    const to = this.o.slice()
    const tb = this.b.slice()
    const tr = this.r.slice()
    const tw = this.w.slice()
    const tg = this.g.slice()
    this.b[0] = to[0]
    this.b[1] = to[1]
    this.b[2] = to[2]
    this.r[0] = tb[0]
    this.r[1] = tb[1]
    this.r[2] = tb[2]
    this.g[0] = tr[0]
    this.g[1] = tr[1]
    this.g[2] = tr[2]
    this.o[0] = tg[0]
    this.o[1] = tg[1]
    this.o[2] = tg[2]
    this.w[0] = tw[6]
    this.w[1] = tw[3]
    this.w[2] = tw[0]
    this.w[3] = tw[7]
    this.w[5] = tw[1]
    this.w[6] = tw[8]
    this.w[7] = tw[5]
    this.w[8] = tw[2]
    if (this.solving) this.instructions.push('up')
  }
  
  up_i() {
    // White cclockwise
    const to = this.o.slice()
    const tb = this.b.slice()
    const tr = this.r.slice()
    const tw = this.w.slice()
    const tg = this.g.slice()
    this.b[0] = tr[0]
    this.b[1] = tr[1]
    this.b[2] = tr[2]
    this.r[0] = tg[0]
    this.r[1] = tg[1]
    this.r[2] = tg[2]
    this.g[0] = to[0]
    this.g[1] = to[1]
    this.g[2] = to[2]
    this.o[0] = tb[0]
    this.o[1] = tb[1]
    this.o[2] = tb[2]
    this.w[0] = tw[2]
    this.w[1] = tw[5]
    this.w[2] = tw[8]
    this.w[3] = tw[1]
    this.w[5] = tw[7]
    this.w[6] = tw[0]
    this.w[7] = tw[3]
    this.w[8] = tw[6]
    if (this.solving) this.instructions.push('up_i')
  }
  
  front() {
    // Blue clockwise
    const to = this.o.slice()
    const tb = this.b.slice()
    const tr = this.r.slice()
    const tw = this.w.slice()
    const ty = this.y.slice()
    this.y[0] = to[6]
    this.y[1] = to[3]
    this.y[2] = to[0]
    this.r[2] = ty[0]
    this.r[5] = ty[1]
    this.r[8] = ty[2]
    this.w[6] = tr[8]
    this.w[7] = tr[5]
    this.w[8] = tr[2]
    this.o[0] = tw[6]
    this.o[3] = tw[7]
    this.o[6] = tw[8]
    this.b[0] = tb[6]
    this.b[1] = tb[3]
    this.b[2] = tb[0]
    this.b[3] = tb[7]
    this.b[5] = tb[1]
    this.b[6] = tb[8]
    this.b[7] = tb[5]
    this.b[8] = tb[2]
    this.instructions.push('front')
  }
  
  front_i() {
    // Blue cclockwise
    const to = this.o.slice()
    const tb = this.b.slice()
    const tr = this.r.slice()
    const tw = this.w.slice()
    const ty = this.y.slice()
    this.o[6] = ty[0]
    this.o[3] = ty[1]
    this.o[0] = ty[2]
    this.y[0] = tr[2]
    this.y[1] = tr[5]
    this.y[2] = tr[8]
    this.r[2] = tw[8]
    this.r[5] = tw[7]
    this.r[8] = tw[6]
    this.w[8] = to[6]
    this.w[7] = to[3]
    this.w[6] = to[0]
    this.b[0] = tb[2]
    this.b[1] = tb[5]
    this.b[2] = tb[8]
    this.b[3] = tb[1]
    this.b[5] = tb[7]
    this.b[6] = tb[0]
    this.b[7] = tb[3]
    this.b[8] = tb[6]
    if (this.solving) this.instructions.push('front_i')
  }
  
  back() {
    // Green clockwise
    const to = this.o.slice()
    const tg = this.g.slice()
    const tr = this.r.slice()
    const tw = this.w.slice()
    const ty = this.y.slice()
    this.o[8] = ty[6]
    this.o[7] = ty[7]
    this.o[6] = ty[8]
    this.y[6] = tr[0]
    this.y[7] = tr[3]
    this.y[8] = tr[6]
    this.r[0] = tw[2]
    this.r[3] = tw[1]
    this.r[6] = tw[0]
    this.w[0] = to[2]
    this.w[1] = to[5]
    this.w[2] = to[8]
    this.g[0] = tg[6]
    this.g[1] = tg[3]
    this.g[2] = tg[0]
    this.g[3] = tg[7]
    this.g[5] = tg[1]
    this.g[6] = tg[8]
    this.g[7] = tg[5]
    this.g[8] = tg[2]
    this.instructions.push('back')
  }
  
  back_i() {
    // Green cclockwise
    const to = this.o.slice()
    const tg = this.g.slice()
    const tr = this.r.slice()
    const tw = this.w.slice()
    const ty = this.y.slice()
    this.y[6] = to[8]
    this.y[7] = to[5]
    this.y[8] = to[2]
    this.r[0] = ty[6]
    this.r[3] = ty[7]
    this.r[6] = ty[8]
    this.w[0] = tr[6]
    this.w[1] = tr[3]
    this.w[2] = tr[0]
    this.o[2] = tw[0]
    this.o[5] = tw[1]
    this.o[8] = tw[2]
    this.g[0] = tg[2]
    this.g[1] = tg[5]
    this.g[2] = tg[8]
    this.g[3] = tg[1]
    this.g[5] = tg[7]
    this.g[6] = tg[0]
    this.g[7] = tg[3]
    this.g[8] = tg[6]
    if (this.solving) this.instructions.push('back_i')
  }
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  //SOLVING NOW BEGINS AAAAAAAAAAAAAADAHDYWHIDUAJSHDUIAHWD
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  cube_decide_cross() {
    if (this.w[1] === 'w' && this.w[5] === 'w' &&  this.w[3] === 'w' && this.w[7] === 'w') {
      // If cross is finished then continue with next step.
      this.solve_state = 2;
      //TEMPORARY
      this.finished = true;
    }
    else if (this.solve_state === 1) {
      if (this.b[3] === 'w') {
        for (let i=0; i<3; i++) {
          if (this.w[3] !== 'w') {
            this.left_i()
            i = 3
          } else {
            this.up()
          }
        }
      }
      else if (this.b[5] === 'w') {
        for (let i=0; i<3; i++) {
          if (this.w[5] !== 'w') {
            this.right()
            i=3
          } else {
            this.up()
          }
        }
      }
      else if (this.r[5] === 'w') {
        for (let i=0; i<3; i++) {
          if (this.w[1] !== 'w') {
            this.front()
            i=3
          } else {
            this.up()
          }
        }
      }
      else if (this.r[3] === 'w') {
        for (let i=0; i<3; i++) {
          if (this.w[1] !== 'w') {
            this.back_i()
            i=3
          } else {
            this.up()
          }
        }
      }
      else if (this.g[5] === 'w') {
        for (let i=0; i<3; i++) {
          if (this.w[3] !== 'w') {
            this.left()
            i=3
          } else {
            this.up()
          }
        }
      }
      else if (this.g[3] === 'w') {
        for (let i=0; i<3; i++) {
          if (this.w[5] !== 'w') {
            this.right_i()
            i=3
          } else {
            this.up()
          }
        }
      }
      else if (this.o[5] === 'w') {
        for (let i=0; i<3; i++) {
          if (this.w[1] !== 'w') {
            this.back()
            i=3
          } else {
            this.up()
          }
        }
      }
      else if (this.o[3] === 'w') {
        for (let i=0; i<3; i++) {
          if (this.w[1] !== 'w') {
            this.front_i()
            i=3
          } else {
            this.up()
          }
        }
      }
      else if (this.y[1] === 'w') {
        for (let i=0; i<3; i++) {
          if (this.w[7] !== 'w') {
            this.front()
            this.front()
            i=3
          } else {
            this.up()
          }
        }
      }
      else if (this.y[7] === 'w') {
        for (let i=0; i<3; i++) {
          if (this.w[1] !== 'w') {
            this.back()
            this.back()
            i=3
          } else {
            this.up()
          }
        }
      }
      else if (this.y[5] === 'w') {
        for (let i=0; i<3; i++) {
          if (this.w[5] !== 'w') {
            this.right()
            this.right()
            i=3
          } else {
            this.up()
          }
        }
      }
      else if (this.y[3] === 'w') {
        for (let i=0; i<3; i++) {
          if (this.w[3] !== 'w') {
            this.left()
            this.left()
            i=3
          } else {
            this.up()
          }
        }
      }
      else if (this.b[1] === 'w') {
        this.front()
        this.up_i()
        this.right()
      }
      else if (this.b[7] === 'w') {
        for (let i=0; i<3; i++) {
          if (this.w[7] !== 'w') {
            this.front_i()
            this.up_i()
            this.right()
            i=3
          } else  {
            this.up()
          }
        }
      }
      else if (this.o[2] === 'w'){
        this.right()
        this.up_i()
        this.back()
      }
      else if (this.o[7] === 'w') {
        for (let i=0; i<3; i++) {
          if (this.w[5] !== 'w') {
            this.right_i()
            this.up_i()
            this.back()
            i=3
          } else {
            this.up()
          }
        }
      }
      else if (this.g[1] === 'w') {
        this.back()
        this.up_i()
        this.left()
      }
      else if (this.g[7] === 'w') {
        for (let i=0; i<3; i++) {
          if (this.w[1] !== 'w') {
            this.back_i()
            this.up_i()
            this.left()
            i=3
          } else {
            this.up()
          }
        }
      }
      else if (this.r[1] === 'w') {
        this.left()
        this.up_i()
        this.front()
      }
      else if (this.r[7] === 'w') {
        for (let i=0; i<3; i++) {
          if (this.w[3] !== 'w') {
            this.left_i()
            this.up_i()
            this.front()
            i=3
          } else {
            this.up()
          }
        }
      }
    }
  }
  cube_decide_fix_cross() {
    if (this.solve_state === 2) {
      if (this.o[1] === 'o' && this.b[1] === 'b' && this.r[1] === 'w' && this.g[1] === 'g') {
        this.solve_state = 3
      }
      else if (this.b[1] === 'o') {
        this.front()
        this.front()
        this.down()
        this.right()
        this.right()
        this.down_i()
        this.front()
        this.front()
      }
      else if (this.b[1] === 'g') {
        this.front()
        this.front()
        this.down()
        this.down()
        this.back()
        this.back()
        this.down()
        this.down()
        this.front()
        this.front()
      }
      else if (this.b[1] === 'r') {
        this.front()
        this.front()
        this.down_i()
        this.left()
        this.left()
        this.down_i()
        this.front()
        this.front()
      }
      else if (this.o[1] === 'g') {
        this.right()
        this.right()
        this.down()
        this.back()
        this.back()
        this.down_i()
        this.right()
        this.right()
      }
      else if (this.o[1] === 'r') {
        this.right()
        this.right()
        this.down()
        this.down()
        this.left()
        this.left()
        this.down()
        this.down()
        this.right()
        this.right()
      }
      else if (this.o[1] === 'b') {
        this.right()
        this.right()
        this.down_i()
        this.front()
        this.front()
        this.down()
        this.right()
        this.right()
      }
      else if (this.g[1] === 'r') {
        this.back()
        this.back()
        this.down()
        this.left()
        this.left()
        this.down_i()
        this.back()
        this.back()
      }
      else if (this.g[1] === 'b') {
        this.back()
        this.back()
        this.down()
        this.down()
        this.front()
        this.front()
        this.down()
        this.down()
        this.back()
        this.back()
      }
      else if (this.g[1] === 'o') {
        this.back()
        this.back()
        this.down_i()
        this.left()
        this.left()
        this.down()
        this.back()
        this.back()
      }
    }
  }
  print() {
    console.log(this.parseCubeString())
  }
}