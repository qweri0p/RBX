import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { SOLVER } from './solve'
const CANVAS_SIZE = {
    width: 800,
    height: 800,
}

const sv = new SOLVER(
    ['y','y','y','y','y','y','y','y','y'], 
    ['w','w','w','w','w','w','w','w','w'],
    ['g','g','g','g','g','g','g','g','g'],
    ['b','b','b','b','b','b','b','b','b'],
    ['r','r','r','r','r','r','r','r','r'],
    ['o','o','o','o','o','o','o','o','o']);

const DIRECTION = {
    antiClockwise: 1,
    clockwise: -1,
}

const FACE_COLORS = {
    front: 0x0000ff,
    back: 0x00ff00,
    top: 0xffffff,
    bottom: 0xffff00,
    left: 0xff0000,
    right: 0xFF6400,
    internal: 0xa0a0a0,
};

const GLOBAL = {
    cubes: [],
}

function generateCubeMaterial(x:number, y:number, z:number) {
    const cubeMaterials = [
        new THREE.MeshBasicMaterial({ color: x == 1 ? FACE_COLORS.right : FACE_COLORS.internal, transparent: true, opacity: 1., side: THREE.DoubleSide }),
        new THREE.MeshBasicMaterial({ color: x == -1 ? FACE_COLORS.left : FACE_COLORS.internal, transparent: true, opacity: 1., side: THREE.DoubleSide }),
        new THREE.MeshBasicMaterial({ color: y == 1 ? FACE_COLORS.top : FACE_COLORS.internal, transparent: true, opacity: 1., side: THREE.DoubleSide }),
        new THREE.MeshBasicMaterial({ color: y == -1 ? FACE_COLORS.bottom : FACE_COLORS.internal, transparent: true, opacity: 1., side: THREE.DoubleSide }),
        new THREE.MeshBasicMaterial({ color: z == 1 ? FACE_COLORS.front : FACE_COLORS.internal, transparent: true, opacity: 1., side: THREE.DoubleSide }),
        new THREE.MeshBasicMaterial({ color: z == -1 ? FACE_COLORS.back : FACE_COLORS.internal, transparent: true, opacity: 1., side: THREE.DoubleSide }),
    ];
    return cubeMaterials;
}

function initKeyboard() {
    const keymap = {
        'q': { axis: 'x', level: -1, },
        'z': { axis: 'x', level: 1, },
        'w': { axis: 'y', level: 1, },
        'x': { axis: 'y', level: -1, },
        'e': { axis: 'z', level: 1, },
        'c': { axis: 'z', level: -1, },
    }

    document.addEventListener('keydown', (ev) => {
        const key = ev.key;
        console.log(key);
        const validKeys = 'qzwxecQZWXEC';
        if (validKeys.indexOf(key) >= 0) {
            const direction = key.toLowerCase() === key ? DIRECTION.antiClockwise : DIRECTION.clockwise;
            const opKey = key.toLowerCase();
            rotateFace(keymap[opKey].axis, direction, keymap[opKey].level);
        }
    })
}
initKeyboard()

function rotateFace(axis:string, direction: number, level: number) {
    const sinVal = direction === DIRECTION.antiClockwise ? 1 : -1;
    const cosVal = 0;
    const u = new THREE.Vector3(0, 0, 0);
    u[axis] = 1;
    const rotateMat = new THREE.Matrix3();
    // rotate matrix from wikipedia: https://en.wikipedia.org/wiki/Rotation_matrix
    rotateMat.set(
        cosVal + u.x ** 2 * (1 - cosVal), u.x * u.y * (1 - cosVal) - u.z * sinVal, u.x * u.z * (1 - cosVal) + u.y * sinVal,
        u.y * u.x * (1 - cosVal) + u.z * sinVal, cosVal + u.y ** 2 * (1 - cosVal), u.y * u.z * (1 - cosVal) - u.x * sinVal,
        u.z * u.x * (1 - cosVal) - u.y * sinVal, u.z * u.y * (1 - cosVal) + u.x * sinVal, cosVal + u.z ** 2 * (1 - cosVal),
    );

    for (const cube of GLOBAL.cubes) {
        if (cube.position[axis] === level) {
            cube.rotateOnWorldAxis(u, (direction === DIRECTION.antiClockwise ? 1 : -1) * Math.PI / 2);
            const posVec = new THREE.Vector3(cube.position.x, cube.position.y, cube.position.z);
            posVec.applyMatrix3(rotateMat);
            cube.position.x = posVec.x;
            cube.position.y = posVec.y;
            cube.position.z = posVec.z;
        }
    }

    switch(axis) {
        case 'x':
            if (direction === -1) {
                if (level === -1) {
                    sv.left_i();
                    break;
                } else {
                    sv.right();
                    break;
                }
            } else {
                if (level === -1) {
                    sv.left();
                    break;
                } else {
                    sv.right_i();
                    break;
                }
            }
        case 'y':
            if (direction === -1) {
                if (level === -1) {
                    sv.down_i();
                    break;
                } else {
                    sv.up();
                    break;
                }
            } else {
                if (level === -1) {
                    sv.down();
                    break;
                } else {
                    sv.up_i();
                    break;
                }
            }
        case 'z': 
            if (direction === -1) {
                if (level === -1) {
                    sv.back();
                    break;
                } else {
                    sv.front();
                    break;
                }
            } else {
                if (level === -1) {
                    sv.back_i();
                    break;
                } else {
                    sv.front_i();
                    break;
                }
            }
    }
}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, CANVAS_SIZE.width / CANVAS_SIZE.height, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#c')!,
    antialias: true,
    alpha: true,
});

scene.background = new THREE.Color(0xa0a0a0);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enablePan = false;
controls.enableZoom = false;

// configs
renderer.setSize(CANVAS_SIZE.width, CANVAS_SIZE.height);

camera.position.x = 3;
camera.position.y = 4;
camera.position.z = 5;
camera.lookAt(0, 0, 0);

const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
GLOBAL.cubes = []
for (let x of [-1, 0, 1]) {
    for (let y of [-1,  0, 1]) {
        for (let z of [-1, 0, 1]) {
            const cube = new THREE.Mesh(cubeGeometry, generateCubeMaterial(x, y, z));
            cube.position.x = x;
            cube.position.y = y;
            cube.position.z = z;
            GLOBAL.cubes.push(cube);
            scene.add(cube);
        }
    }
}


// render function

function render() {
    controls.update();

    renderer.render(scene, camera);

    requestAnimationFrame(render);
};

render()
// const sv = new SOLVER(['b','y','y','b','y','w','r','o','o'], 
//     ['o','w','w','r','w','g','y','b','y'], 
//     ['o','r','b','w','g','o','g','g','g'], 
//     ['o','w','b','y','b','r','w','b','g'], 
//     ['y','b','g','y','r','r','w','o','r'], 
//     ['r','y','b','g','o','o','r','g','w']);

const btn = document.querySelector('#solve')!;
btn.addEventListener('click', sv.solve);

