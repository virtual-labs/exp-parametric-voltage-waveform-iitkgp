/**
 * 
 *  Document     : model.js
 *  Created on   : Jan 26, 2017, 4:35:25 AM
 *  Author       : Subir Sekhar
 *  Co-Author    : Pabitra K Jana
 *  Organization : IIT Khatagpur
 *  
 */
var threeShapes = [
    {type: "material", color: {r: 1.0, g: 1.0, b: 1.0},
        nodes: [{type: "translate", y: -1.2, x: 6.8, z: 2.5,
                nodes: [{type: "rotate", id: "cube1", y: 0, z: 1.0, angle: 0,
                        nodes: [{type: "prims/box", xSize: 0.4, ySize: 0.4, zSize: 0.4}]
                    }]
            }]
    }
    ,
    {type: "material", color: {r: 0.0, g: 0.70, b: .70},
        nodes: [{type: "translate",
                y: -1.75, x: 6.8, z: 2.5,
                nodes: [{type: "rotate", id: "cube2", y: 0, z: 1.0, angle: 0,
                        nodes: [{type: "prims/box", xSize: 0.5, ySize: 0.2, zSize: 0.5}]
                    }]
            }]
    },
    {
        type: "material",
        color: {r: 0.0, g: 1.0, b: 1.0},
        nodes: [{type: "translate", y: -1.95, x: 4.75, z: 2.1,
                nodes: [{type: "rotate", id: "cube3", y: 1.0, angle: -45,
                        nodes: [{type: "prims/box", xSize: 0.2, ySize: 0.04, zSize: 1.2
                            }]
                    }]
            }]
    },
    {type: "material", color: {r: 0.0, g: 1.0, b: 1.0},
        nodes: [{type: "translate", y: -1.95, x: 9.15, z: 2.0,
                nodes: [{type: "rotate", id: "cube4", y: 1.0, angle: 25,
                        nodes: [{type: "prims/box", xSize: 0.2, ySize: 0.04, zSize: 0.7}]
                    }]
            }]
    },
    {type: "material",
        color: {r: 1.0, g: 1.0, b: 1.0},
        nodes: [{type: "translate", x: 4.75, y: 3.3, z: 2.2,
                nodes: [{type: "rotate", id: "sphere1", y: 1.0, angle: -0,
                        nodes: [{type: "prims/sphere", slices: 25, rings: 25, radius: 0.3}]
                    }]
            }]
    },
    {type: "material", color: {r: 1.0, g: 1.0, b: 1.0},
        nodes: [{type: "translate", x: 7.95, y: 3.2, z: 2.6,
                nodes: [{type: "rotate", id: "sphere2", y: 1.0, angle: 0,
                        nodes: [{type: "prims/sphere", slices: 25, rings: 25, radius: 0.25}]
                    }]
            }]
    },
    {type: "material", color: {r: 1.0, g: .7, b: 0.30},
        nodes: [{type: "translate", x: 6.6, y: 1.5, z: 2.36,
                nodes: [{type: "rotate", id: "sphere3", y: 1.0, angle: 0,
                        nodes: [{type: "prims/sphere", slices: 25, rings: 25, radius: 0.35}]
                    }]
            }]
    },
    {type: "material", color: {r: 1.0, g: .7, b: 0.30},
        nodes: [{
                type: "translate", x: 6.6, y: 0.6, z: 2.36,
                nodes: [{type: "rotate", id: "sphere4", y: 1.0, angle: 0,
                        nodes: [{type: "prims/sphere", slices: 25, rings: 25, radius: 0.35}]
                    }]
            }]
    },
    {type: "material", color: {r: 1.0, g: 0.20, b: 0.20},
        nodes: [{type: "translate", x: 5.15, y: 0.6, z: 1.80,
                nodes: [{type: "rotate", id: "cylinder1", x: 1.0, z: 1, angle: 10,
                        nodes: [{type: "prims/cylinder", radiusTop: 0.08, radiusBottom: 0.08, height: 5.1, radialSegments: 5, heightSegments: 1, openEnded: false}]
                    }]
            }]
    },
    {type: "material", color: {r: 1.0, g: .20, b: 0.20},
        nodes: [{type: "translate", x: 4.3, y: 0.6, z: 2.6,
                nodes: [{type: "rotate", id: "cylinder2", x: 1.0, z: 1.0, angle: -10,
                        nodes: [{type: "prims/cylinder", radiusTop: 0.08, radiusBottom: 0.08, height: 5.1, radialSegments: 5, heightSegments: 1, openEnded: false}]
                    }]
            }]
    },
    {type: "material", color: {r: 1.0, g: 0.20, b: 0.20},
        nodes: [{type: "translate", x: 8.45, y: 0.55, z: 2,
                nodes: [{type: "rotate", id: "cylinder3", x: 1.2, z: 1.0, angle: 15,
                        nodes: [{type: "prims/cylinder", radiusTop: 0.06, radiusBottom: 0.06, height: 5.2, radialSegments: 5, heightSegments: 1, openEnded: false}]}]
            }]
    },
    {type: "material", color: {r: 1.0, g: 0.20, b: 0.20},
        nodes: [{type: "translate", x: 8.7, y: 0.55, z: 2.5,
                nodes: [{type: "rotate", id: "cylinder4", x: 1.0, z: 10, angle: 16,
                        nodes: [{type: "prims/cylinder", radiusTop: 0.06, radiusBottom: 0.06, height: 5.2, radialSegments: 5, heightSegments: 1, openEnded: false}]
                    }]
            }]
    },
    {type: "material", color: {r: 1.0, g: 1.0, b: 1.0},
        nodes: [{type: "translate", x: 6.3, y: 3.3, z: 2.4,
                nodes: [{type: "rotate", id: "cylinder5", x: -0.15, z: 1.0, angle: 88,
                        nodes: [{type: "prims/cylinder", radiusTop: 0.08, radiusBottom: 0.08, height: 3.20, radialSegments: 50, heightSegments: 50, openEnded: false}]
                    }]
            }]
    },
    {type: "material", color: {r: 1.0, g: 1.0, b: 1.0},
        nodes: [{type: "translate", x: 6.5, y: 2.6, z: 2.4,
                nodes: [{type: "rotate", id: "cylinder6", x: 0.01, z: 1.0, angle: 5,
                        nodes: [{type: "prims/cylinder", radiusTop: 0.06, radiusBottom: 0.06, height: 1.5, radialSegments: 5, heightSegments: 1, openEnded: false}]
                    }]
            }]
    },
    {type: "material", color: {r: 1.0, g: 1.0, b: 1.0},
        nodes: [{type: "translate", x: 6.68, y: 0, z: 2.41,
                nodes: [{type: "rotate", id: "cylinder7", x: 0.01, z: 1.0, angle: 3,
                        nodes: [{type: "prims/cylinder", radiusTop: 0.06, radiusBottom: 0.06, height: 1.30, radialSegments: 5, heightSegments: 1, openEnded: false}]
                    }]
            }]
    },
    {type: "material", color: {r: 1.0, g: 0.0, b: 0.30},
        nodes: [{type: "translate", x: 6.7, y: -0.6, z: 2.4,
                nodes: [{type: "rotate", id: "cylinder8", x: 0.01, z: 1.0, angle: 2,
                        nodes: [{type: "prims/cylinder", radiusTop: 0.1, radiusBottom: 0.1, height: 0.5, radialSegments: 30, heightSegments: 1, openEnded: false}]
                    }]
            }]
    },
    {type: "material", color: {r: 1.0, g: 1.0, b: 0.20},
        nodes: [{type: "translate", x: 2.17, y: -1.8, z: 2.5,
                nodes: [{type: "rotate", id: "torus", x: 1.0, angle: 90,
                        nodes: [{type: "prims/torus", radius: 0.27, tube: 0.07, segmentsR: 32, segmentsT: 50, arc: Math.PI * 2, wire: false}]
                    }]
            }]
    },
    {type: "material", color: {r: 1.0, g: 1.0, b: 0.20},
        nodes: [{type: "translate", x: 2.05, y: 2.5, z: 2.5,
                nodes: [{type: "rotate", id: "torus1", x: 1.0, angle: 90,
                        nodes: [{type: "prims/torus", radius: 0.23, tube: 0.07, segmentsR: 32, segmentsT: 50, arc: Math.PI * 2, openEnded: false, wire: false}]
                    }]
            }]
    },
    {type: "material", color: {r: 1.0, g: 1.0, b: 1.0},
        nodes: [{type: "translate", x: 2.15, y: 0.25, z: 2.5,
                nodes: [
                    {
                        type: "rotate",
                        id: "cylinder9",
                        z: 1.0,
                        angle: 1,
                        nodes: [{type: "prims/cylinder", radiusTop: 0.04, radiusBottom: 0.04, height: 4.5, radialSegments: 30, heightSegments: 1, openEnded: false}]
                    }]
            }]
    },
    {
        type: "material", color: {r: 1.0, g: 1.0, b: 0.40},
        nodes: [{type: "translate", x: 2.21, y: -1.9, z: 2.5,
                nodes: [{type: "rotate", id: "cylinder10", x: 1.0, angle: 00,
                        nodes: [{type: "prims/cylinder", radiusTop: 0.35, radiusBottom: 0.45, height: 0.1, radialSegments: 50, heightSegments: 1, openEnded: false}]
                    }]
            }]
    },
    {type: "material", color: {r: 1.0, g: 1.0, b: 0.40},
        nodes: [{type: "translate", x: 2.08, y: 2.5, z: 2.5,
                nodes: [{type: "rotate", id: "cylinder11", x: 1.0, angle: 0,
                        nodes: [{type: "prims/cylinder", radiusTop: 0.35, radiusBottom: 0.35, height: 0.1, radialSegments: 50, heightSegments: 1, openEnded: false}]
                    }]
            }]
    },
    {type: "material", color: {r: 1.0, g: 1.0, b: 0.40},
        nodes: [{type: "translate", x: 2.18, y: -1.82, z: 2.5,
                nodes: [{type: "rotate", id: "cylinder12", x: 1.0, angle: 00,
                        nodes: [{type: "prims/cylinder", radiusTop: 0.35, radiusBottom: 0.35, height: 0.15, radialSegments: 50, heightSegments: 1, openEnded: false

                            }]
                    }]
            }]
    },
    {type: "material", color: {r: 0.30, g: 0.30, b: 0.30},
        nodes: [{type: "translate", x: -2.95, y: 0.7, z: 2.10,
                nodes: [{type: "rotate", id: "cylinder13", z: 1.0, angle: 0,
                        nodes: [{type: "prims/cylinder", radiusTop: 0.12, radiusBottom: 0.12, height: 5.1, radialSegments: 30, heightSegments: 1, openEnded: false}]
                    }]
            }]
    },
    {type: "material", color: {r: 0.30, g: 0.30, b: 1.0},
        nodes: [{type: "translate", x: -2.15, y: 0.65, z: 3.30,
                nodes: [{type: "rotate", id: "cylinder14", z: 1.0, angle: 0,
                        nodes: [{type: "prims/cylinder", radiusTop: 0.12, radiusBottom: 0.12, height: 5.2, radialSegments: 30, heightSegments: 1, openEnded: false}]
                    }]
            }]
    },
    {type: "material", color: {r: 0.3, g: 0.3, b: 1.0},
        nodes: [{type: "translate", id: "cylinder15", x: -3.75, y: 0.65, z: 3.15,
                nodes: [{type: "rotate", z: 1, angle: 0, nodes: [

                            {type: "prims/cylinder", radiusTop: 0.12, radiusBottom: 0.12, height: 5.1, radialSegments: 30, heightSegments: 1, openEnded: false}]
                    }]
            }]
    },
    {
        type: "material",
        color: {r: 0.0, g: 1.0, b: 1.0},
        nodes: [{type: "translate", y: -1.95, x: -2.95, z: 2.20,
                nodes: [{type: "rotate", id: "cube5", y: 1.0, angle: 40,
                        nodes: [{type: "prims/box", xSize: 0.3, ySize: 0.03, zSize: 1.8}]
                    }]
            }]
    },
    {type: "material", color: {r: 0.0, g: 1.0, b: 1.0},
        nodes: [{type: "translate", y: -1.95, x: -3.20, z: 2.20,
                nodes: [{type: "rotate", id: "cube6", y: 1.0, angle: -25,
                        nodes: [{type: "prims/box", xSize: 0.3, ySize: 0.03, zSize: 1.80}]
                    }]
            }]
    },
    {type: "material", color: {r: 1.0, g: 1.0, b: 1.0}, alpha: 0.7,
        nodes: [{type: "flags", id: "myFlags7", flags: {transparent: false},
        nodes: [{type: "translate", y: 2, x: -2.6, z: 2.0,
                nodes: [{type: "rotate", id: "cube7", y: 1.0, angle: 90,
                        nodes: [{type: "prims/box", xSize: 0.8, ySize: 0.03, zSize: 1.30}]
                    }]
            }]
    }]
    },
    {type: "material", color: {r: 1.0, g: 1.0, b: 1.0}, alpha: 0.7,
        nodes: [{type: "flags", id: "myFlags8", flags: {transparent: false},
        nodes: [{type: "translate", y: 0.5, x: -2.65, z: 2,
                nodes: [{type: "rotate", id: "cube8", y: 1.0, angle: 90,
                        nodes: [{type: "prims/box", xSize: 0.8, ySize: 0.03, zSize: 1.30}]
                    }]
            }]
    }]
    },
    {type: "material", color: {r: 1.0, g: 1.0, b: 1.0}, alpha: 0.7,
        nodes: [{type: "flags", id: "myFlags9", flags: {transparent: false}, 
        nodes: [{type: "translate", y: -1, x: -2.67, z: 2,
                nodes: [{type: "rotate", id: "cube9", y: 1.0, angle: 90,
                        nodes: [{type: "prims/box", xSize: 0.8, ySize: 0.03, zSize: 1.30}]
                    }]
            }]
    }]
    },
    {type: "material", color: {r: 1.0, g: 0, b: 0}, alpha: 0.8,
        nodes: [{type: "flags", id: "myFlags1", flags: {transparent: true},
                nodes: [{type: "translate", y: 2.2, x: -1.5, z: 2.1,
                        nodes: [{type: "rotate", id: "cube10", y: 1.0, angle: 0,
                                nodes: [{type: "prims/box", xSize: 0.2, ySize: 0.15, zSize: 0.80}]
                            }]
                    }]
            }]
    },
    {type: "material", color: {r: 1.0, g: 0, b: 0}, alpha: 0.8,
        nodes: [{type: "flags", id: "myFlags2", flags: {transparent: true},
                nodes: [{type: "translate", y: 2.2, x: -3.6, z: 2.2,
                        nodes: [{type: "rotate", id: "cube11", y: 1.0, angle: 0,
                                nodes: [{type: "prims/box", xSize: 0.2, ySize: 0.15, zSize: 0.80}]
                            }]
                    }]
            }]
    },
    {type: "material", color: {r: 1.0, g: 0, b: 0}, alpha: 0.8,
        nodes: [{type: "flags", id: "myFlags3", flags: {transparent: true},
                nodes: [{type: "translate", y: 0.7, x: -1.6, z: 2.2,
                        nodes: [{type: "rotate", id: "cube12", y: 1.0, angle: 0,
                                nodes: [{type: "prims/box", xSize: 0.2, ySize: 0.15, zSize: 0.80}]
                            }]
                    }]
            }]
    },
    {type: "material", color: {r: 1.0, g: 0, b: 0}, alpha: 0.8,
        nodes: [{type: "flags", id: "myFlags4", flags: {transparent: true},
                nodes: [{type: "translate", y: 0.7, x: -3.7, z: 2.2,
                        nodes: [{type: "rotate", id: "cube14", y: 1.0, angle: 0, z: 0, x: 0,
                                nodes: [{type: "prims/box", xSize: 0.2, ySize: 0.15, zSize: 0.80}]
                            }]
                    }]
            }]
    },
    {type: "material", color: {r: 1.0, g: 0, b: 0}, alpha: 0.8,
        nodes: [{type: "flags", id: "myFlags5", flags: {transparent: true},
                nodes: [{type: "translate", y: -0.8, x: -1.65, z: 2.2,
                        nodes: [{type: "rotate", id: "cube13", y: 1.0, angle: 0,
                                nodes: [{type: "prims/box", xSize: 0.2, ySize: 0.15, zSize: 0.80}]
                            }]
                    }]
            }]
    },
    {type: "material", color: {r: 1.0, g: 0, b: 0}, alpha: 0.8,
        nodes: [{type: "flags", id: "myFlags6", flags: {transparent: true},
                nodes: [{type: "translate", y: -0.8, x: -3.7, z: 2.2,
                        nodes: [{type: "rotate", id: "cube15", y: 1.0, angle: 0, nodes: [{type: "prims/box", xSize: 0.2, ySize: 0.15, zSize: 0.80}]
                            }]
                    }]
            }]
    },
    {type: "material", color: {r: 0, g: 1.0, b: 0.6},
        nodes: [{type: "translate", x: -2.9, y: 3.32, z: 2.9,
                nodes: [{type: "rotate", id: "pyramid1", y: 1.0, angle: -60,
                        nodes: [{type: "prims/cylinder", radiusTop: 0, radiusBottom: 1.6, height: 0.3, radialSegments: 3, openEnded: true}]
                    }]
            }]
    },
    {type: "material", color: {r: 0, g: 0.50, b: 1.0},alpha: 0.5,
        nodes: [{type: "flags", id: "myFlags11", flags: {transparent: true},
        nodes: [{type: "translate", y: -0.8, x: -1.75, z: 3.05, nodes: [{type: "rotate", id: "cylinder16", z: 1, angle: 80, x: 0.6, y: 0,
                        nodes: [{type: "prims/cylinder", radiusTop: 0.08, radiusBottom: 0.08, height: 0.6, radialSegments: 50, heightSegments: 1, openEnded: false}]
                    }]
            }]
    }]
    },
    {type: "material", color: {r: 0, g: 0.50, b: 1.0},alpha: 0.5,
        nodes: [{type: "flags", id: "myFlags12", flags: {transparent: true},
        nodes: [{type: "translate", y: 0.70, x: -1.7, z: 3.05,
                nodes: [{type: "rotate", id: "cylinder17", z: 1.0, angle: 93, x: 0.5,
                        nodes: [{type: "prims/cylinder", radiusTop: 0.08, radiusBottom: 0.08, height: 0.6, radialSegments: 50, heightSegments: 1, openEnded: false}]
                    }]
            }]
    }]
    },
    {
        type: "material", color: {r: 0, g: 0.50, b: 1.0},alpha: 0.5,
        nodes: [{type: "flags", id: "myFlags13", flags: {transparent: true},
        nodes: [{type: "translate", y: 2.25, x: -1.7, z: 3,
                nodes: [{type: "rotate", id: "cylinder18", z: 1.0, angle: 92, x: 0.70,
                        nodes: [{type: "prims/cylinder", radiusTop: 0.08, radiusBottom: 0.08, height: 0.7, radialSegments: 50, heightSegments: 1, openEnded: false}]
                    }]
            }]
    }]
    },
    {type: "material", color: {r: 1, g: 0.50, b: 0.0},alpha: 0.5,
        nodes: [{type: "flags", id: "myFlags14", flags: {transparent: true},
        nodes: [{type: "translate", y: -1.4, x: -1.8, z: 3.17,
                nodes: [{type: "rotate", id: "cylinder19", z: 1.0, angle: 150, x: 1.0,
                        nodes: [{type: "prims/cylinder", radiusTop: 0.08, radiusBottom: 0.08, height: 1.3, radialSegments: 50, heightSegments: 1, openEnded: false}]
                    }]
            }]
    }]
    },
    {type: "material", color: {r: 1, g: 0.50, b: 0.0},alpha: 0.5,
        nodes: [{type: "flags", id: "myFlags15", flags: {transparent: true},
        nodes: [{type: "translate", y: -0.05, x: -1.78, z: 3.05,
                nodes: [{type: "rotate", id: "cylinder20", z: 1.0, angle: 162, x: 0.65,
                        nodes: [{type: "prims/cylinder", radiusTop: 0.07, radiusBottom: 0.07, height: 1.6, radialSegments: 50, heightSegments: 1, openEnded: false}]
                    }]
            }]
    }]
    },
    {type: "material", color: {r: 1, g: 0.50, b: 0.0},alpha: 0.5,
        nodes: [{type: "flags", id: "myFlags16", flags: {transparent: true},
        nodes: [{type: "translate", y: 1.45, x: -1.8, z: 3.05,
                nodes: [{type: "rotate", id: "cylinder21", z: 1.0, angle: 162, x: 0.7,
                        nodes: [{type: "prims/cylinder", radiusTop: 0.07, radiusBottom: 0.07, height: 1.65, radialSegments: 50, heightSegments: 1, openEnded: false}]
                    }]
            }]
    }]
    },
    {type: "material", color: {r: 1, g: 1, b: 0.0},alpha: 0.7,
        nodes: [{type: "flags", id: "myFlags10", flags: {transparent: true},
        nodes: [{type: "translate", y: 0.7, x: -3.9, z: 3.1,
                nodes: [{type: "rotate", id: "cylinder22", z: 1.0, angle: 0, x: 0.01,
                        nodes: [{type: "prims/cylinder", radiusTop: 0.12, radiusBottom: 0.12, height: 3.22, radialSegments: 50, heightSegments: 1, openEnded: false}]
                    }]
            }]
    }]
    },
    {type: "material", color: {r: 1.0, g: 0.70, b: 0.50},
        nodes: [{type: "translate", id: "sphere5", x: -3.05, y: 2.3, z: 3.7,
                nodes: [{type: "rotate", y: 1.0, angle: -0,
                        nodes: [{type: "prims/sphere", slices: 25, rings: 25, radius: 0.22}]
                    }]
            }]
    },
    {type: "material", color: {r: 1.0, g: 0.70, b: 0.50}, nodes: [{type: "translate", id: "sphere6", x: -2.5, y: 2.22, z: 3.5,
                nodes: [{type: "rotate", y: 1.0, angle: -0,
                        nodes: [{type: "prims/sphere", slices: 25, rings: 25, radius: 0.22}]
                    }]
            }]
    },
    {type: "material", color: {r: 1.0, g: 0.70, b: 0.50},
        nodes: [{type: "translate", id: "sphere7", x: -3.15, y: 0.7, z: 3.7,
                nodes: [{type: "rotate", y: 1.0, angle: -0, nodes: [{type: "prims/sphere", slices: 25, rings: 25, radius: 0.22}]
                    }]
            }]
    },
    {type: "material", color: {r: 1.0, g: 0.70, b: 0.50},
        nodes: [{type: "translate", id: "sphere8", x: -2.6, y: 0.6, z: 3.5,
                nodes: [{type: "rotate", y: 1.0, angle: -0,
                        nodes: [{type: "prims/sphere", slices: 25, rings: 25, radius: 0.22}]
                    }]
            }]
    },
    {type: "material", color: {r: 1.0, g: 0.70, b: 0.50},
        nodes: [{type: "translate", id: "sphere10", x: -2.7, y: -0.75, z: 3.5,
                nodes: [{type: "rotate", y: 1.0, angle: -0,
                        nodes: [{type: "prims/sphere", slices: 25, rings: 25, radius: 0.23}]
                    }]
            }]
    },
    {type: "material", color: {r: 1.0, g: 0.70, b: 0.50},
        nodes: [{type: "translate", id: "sphere9", x: -3.2, y: -0.7, z: 3.7,
                nodes: [{type: "rotate", y: 1.0, angle: -0,
                        nodes: [{type: "prims/sphere", slices: 25, rings: 25, radius: 0.23}]
                    }]
            }]
    },
    {type: "material", color: {r: 1, g: 1, b: 1},
        nodes: [{type: "translate", y: -0.76, x: -2.3, z: 3.3,
                nodes: [{type: "rotate", id: "cylinder23", z: 1.0, angle: 90, x: 0.5,
                        nodes: [{type: "prims/cylinder", radiusTop: 0.03, radiusBottom: 0.03, height: 0.9, radialSegments: 50, heightSegments: 1, openEnded: false}]
                    }]
            }]
    },
    {type: "material", color: {r: 1, g: 1, b: 1},
        nodes: [{type: "translate", y: 0.65, x: -2.15, z: 3.30,
                nodes: [{type: "rotate", id: "cylinder24", z: 1.0, angle: 95, x: 0.8,
                        nodes: [{type: "prims/cylinder", radiusTop: 0.03, radiusBottom: 0.03, height: 1, radialSegments: 50, heightSegments: 1, openEnded: true}]
                    }]
            }]
    },
    {type: "material", color: {r: 1, g: 1, b: 1},
        nodes: [{type: "translate", y: 2.2, x: -2.15, z: 3.3,
                nodes: [{type: "rotate", id: "cylinder25", z: 1.0, angle: 95, x: 0.6,
                        nodes: [{type: "prims/cylinder", radiusTop: 0.03, radiusBottom: 0.03, height: 1, radialSegments: 50, heightSegments: 1, openEnded: true}]
                    }]
            }]
    },
    {type: "material", color: {r: 1, g: 1, b: 1},
        nodes: [{type: "translate", id: "tcylinder26", y: -0.65, x: -3.5, z: 3.40,
                nodes: [{type: "rotate", id: "cylinder26", z: 1.0, angle: 85, x: -0.9, y: 0,
                        nodes: [{type: "prims/cylinder", radiusTop: 0.03, radiusBottom: 0.03, height: 0.9, radialSegments: 50, heightSegments: 1, openEnded: false}]
                    }]
            }]
    },
    {type: "material", color: {r: 1, g: 1, b: 1},
        nodes: [{type: "translate", id: "tcylinder27", y: 0.75, x: -3.45, z: 3.4,
                nodes: [{type: "rotate", id: "cylinder27", z: 1.0, angle: 85, x: -1.0, y: 0,
                        nodes: [{type: "prims/cylinder", radiusTop: 0.03, radiusBottom: 0.03, height: 0.85, radialSegments: 50, heightSegments: 1, openEnded: true}]
                    }]
            }]
    },
    {type: "material", color: {r: 1, g: 1, b: 1},
        nodes: [{type: "translate", id: "tcylinder28", y: 2.25, x: -3.3, z: 3.40,
                nodes: [{type: "rotate", id: "cylinder28", z: 1.0, angle: 100, x: -0.75, y: 0,
                        nodes: [{type: "prims/cylinder", radiusTop: 0.03, radiusBottom: 0.03, height: 0.9, radialSegments: 50, heightSegments: 1, openEnded: true}]
                    }]
            }]
    },
    {type: "material", color: {r: 0.0, g: 1.0, b: 1.0},
        nodes: [{type: "translate", y: -1.95, x: -7.37, z: 3,
                nodes: [{type: "rotate", id: "cube16", y: 1.0, angle: 90,
                        nodes: [{type: "prims/box", xSize: 0.5, ySize: 0.03, zSize: 1.5}]
                    }]
            }]
    },
    {type: "material", color: {r: 1, g: 1, b: 1},
        nodes: [{type: "translate", y: -1.7, x: -6.5, z: 3.1,
                nodes: [{type: "rotate", id: "cube17", y: 1.0, angle: 0,
                        nodes: [{type: "prims/box", xSize: 0.6, ySize: 0.2, zSize: 0.4}]
                    }]
            }]
    },
    {type: "material", color: {r: 0, g: 0.5, b: 1},
        nodes: [{type: "translate", y: -1.3, x: -7.95, z: 3,
                nodes: [{type: "rotate", id: "cylinder29", z: 1.0, angle: 0,
                        nodes: [{type: "prims/cylinder", radiusTop: 0.4, radiusBottom: 0.4, height: 1.3, radialSegments: 50, heightSegments: 1, openEnded: false}]
                    }]
            }]
    },
    {type: "material", color: {r: 1, g: 1, b: 1},
        nodes: [{type: "translate", y: -0.65, x: -7.94, z: 3,
                nodes: [{type: "rotate", id: "cylinder30", z: 1.0, angle: 0,
                        nodes: [{type: "prims/cylinder", radiusTop: 0.5, radiusBottom: 0.45, height: 0.05, radialSegments: 50, heightSegments: 1, openEnded: false}]
                    }]
            }]
    },
    {type: "material", color: {r: 1, g: 1, b: 1},
        nodes: [{type: "translate", y: -1.9, x: -7.94, z: 3.0,
                nodes: [{type: "rotate", id: "cylinder31", z: 1.0, angle: 0,
                        nodes: [{type: "prims/cylinder", radiusTop: 0.42, radiusBottom: 0.5, height: 0.08, radialSegments: 50, heightSegments: 1, openEnded: false}]
                    }]
            }]
    },
    {type: "material", color: {r: 1, g: 1, b: 0},
        nodes: [{type: "translate", y: -1.55, x: -4.1, z: 3.5,
                nodes: [{type: "rotate", id: "cylinder32", z: 1.0, angle: 0, x: 0.1,
                        nodes: [{type: "prims/cylinder", radiusTop: 0.07, radiusBottom: 0.07, height: 0.88, radialSegments: 50, heightSegments: 1, openEnded: false}]
                    }]
            }]
    },
    {type: "material", color: {r: 0.3, g: 0.3, b: 1},
        nodes: [{type: "translate", y: -1.1, x: -4.05, z: 3.25,
                nodes: [{type: "rotate", id: "cylinder33", z: 1.0, angle: 90, x: 8,
                        nodes: [{type: "prims/cylinder", radiusTop: 0.07, radiusBottom: 0.07, height: 0.5, radialSegments: 50, heightSegments: 1, openEnded: false}]
                    }]
            }]
    },
    {type: "material", color: {r: 1, g: 0.5, b: 0.5},
        nodes: [{type: "translate", y: -1.55, x: -4.15, z: 2.7,
                nodes: [{type: "rotate", id: "cylinder34", z: 1.0, angle: 0,
                        nodes: [{type: "prims/cylinder", radiusTop: 0.07, radiusBottom: 0.07, height: 0.8, radialSegments: 50, heightSegments: 1, openEnded: false}]
                    }]
            }]
    },
    {type: "material", color: {r: 0.4, g: 0.4, b: 1},
        nodes: [{type: "translate", y: -1.15, x: -4.52, z: 2.5,
                nodes: [{type: "rotate", id: "cylinder35", z: 1.0, angle: 90, x: -0.7,
                        nodes: [{type: "prims/cylinder", radiusTop: 0.07, radiusBottom: 0.07, height: 0.4, radialSegments: 50, heightSegments: 1, openEnded: false}]
                    }]
            }]
    },
    {type: "material", color: {r: 1, g: 1, b: 1},
        nodes: [{type: "translate", y: -1.15, x: -4.5, z: 2.5,
                nodes: [{type: "rotate", id: "cylinder51", z: 1.0, angle: 90, x: -0.7,
                        nodes: [{type: "prims/cylinder", radiusTop: 0.02, radiusBottom: 0.02, height: 0.7, radialSegments: 50, heightSegments: 1, openEnded: false}]
                    }]
            }]
    },
    {type: "material", color: {r: 0.3, g: 0.3, b: 1},
        nodes: [{type: "translate", y: -1.55, x: -4.9, z: 2.5,
                nodes: [{type: "rotate", id: "cylinder36", z: 1.0, angle: 0, x: 0.1,
                        nodes: [{type: "prims/cylinder", radiusTop: 0.07, radiusBottom: 0.07, height: 0.9, radialSegments: 5, heightSegments: 4, openEnded: false}]
                    }]
            }]
    },
    {type: "material", color: {r: 1, g: 1, b: 1},
        nodes: [{type: "translate", y: -1.15, x: -4.9, z: 2.5,
                nodes: [{type: "rotate", id: "cylinder37", z: 1.0, angle: 90, x: 1.0,
                        nodes: [{type: "prims/cylinder", radiusTop: 0.03, radiusBottom: 0.03, height: 0.5, radialSegments: 50, heightSegments: 1, openEnded: false}]
                    }]
            }]
    },
    {type: "material", color: {r: 0.50, g: 0.5, b: 0.50},
        nodes: [{type: "translate", x: -4.8, y: -1.2, z: 1.8,
                nodes: [{type: "rotate", id: "sphere11", y: 1.0, angle: 0,
                        nodes: [{type: "prims/sphere", slices: 25, rings: 25, radius: 0.1}]
                    }]
            }]
    },
    {type: "material", color: {r: 0.50, g: 0.5, b: 0.50},
        nodes: [{type: "translate", x: -5.1, y: -1.15, z: 2.73,
                nodes: [{type: "rotate", id: "sphere12", y: 1.0, angle: 0,
                        nodes: [{type: "prims/sphere", slices: 25, rings: 25, radius: 0.1}]
                    }]
            }]
    },
    {type: "material", color: {r: 1, g: 1, b: 1},
        nodes: [{type: "translate", y: -1.55, x: -5.0, z: 2.6,
                nodes: [{type: "rotate", id: "cylinder38", z: 1, angle: 0, x: 0, y: 0,
                        nodes: [{type: "prims/cylinder", radiusTop: 0.03, radiusBottom: 0.03, height: 0.9, radialSegments: 50, heightSegments: 1, openEnded: false}]
                    }]
            }]
    },
    {type: "material", color: {r: 1, g: 1, b: 1},
        nodes: [{type: "translate", y: -1.55, x: -4.9, z: 1.65,
                nodes: [{type: "rotate", id: "cylinder39", z: 1, angle: 0, x: 0, y: 0,
                        nodes: [{type: "prims/cylinder", radiusTop: 0.03, radiusBottom: 0.03, height: 0.8, radialSegments: 50, heightSegments: 1, openEnded: false}]
                    }]
            }]
    },
    {type: "material", color: {r: 0.3, g: 0.3, b: 1},
        nodes: [{type: "translate", y: -1.5, x: -5.0, z: 1.5,
                nodes: [{type: "rotate", id: "cylinder40", z: 1.0, angle: 0, x: 0,
                        nodes: [{type: "prims/cylinder", radiusTop: 0.06, radiusBottom: 0.06, height: 0.8, radialSegments: 50, heightSegments: 1, openEnded: false}]
                    }]
            }]
    },
    {type: "material", color: {r: 0.2, g: 0.2, b: 0.2},
        nodes: [{type: "translate", y: -1.1, x: -4.4, z: 1.45,
                nodes: [{type: "rotate", id: "cylinder41", z: 1.0, angle: 100, x: 0, nodes: [{type: "prims/cylinder", radiusTop: 0.06, radiusBottom: 0.06, height: 0.7, radialSegments: 50, heightSegments: 1, openEnded: false}]
                    }]
            }]
    },
    {type: "material", color: {r: 1, g: 1, b: 1},
        nodes: [{type: "translate",
                y: -1.1, x: -4.5, z: 1.45,
                nodes: [{type: "rotate", id: "cylinder50", z: 1.0, angle: 100, x: 0,
                        nodes: [{type: "prims/cylinder", radiusTop: 0.02, radiusBottom: 0.02, height: 1.15, radialSegments: 50, heightSegments: 1, openEnded: false}]
                    }]
            }]
    },
    {type: "material", color: {r: 1, g: 1, b: 1},
        nodes: [{type: "translate", y: -1.2, x: -4.93, z: 1.6,
                nodes: [{type: "rotate", id: "cylinder42", z: 1.0, angle: 90, x: -2,
                        nodes: [{type: "prims/cylinder", radiusTop: 0.03, radiusBottom: 0.03, height: 0.45, radialSegments: 50, heightSegments: 1, openEnded: false}]
                    }]
            }]
    },
    {type: "material", color: {r: 0, g: 0, b: 1},
        nodes: [{type: "translate", y: -1, x: -6.1, z: 2.6,
                nodes: [{type: "rotate", id: "cylinder43", z: 1.0, angle: 0, x: 0,
                        nodes: [{type: "prims/cylinder", radiusTop: 0.1, radiusBottom: 0.1, height: 1.9, radialSegments: 50, heightSegments: 1, openEnded: false}]
                    }]
            }]
    },
    {type: "material", color: {r: 0.8, g: 0.8, b: 0.8},
        nodes: [{type: "translate", y: -0.4, x: -7.8, z: 3.0,
                nodes: [{type: "rotate", id: "cylinder44", z: 1.0, angle: 0, x: 0,
                        nodes: [{type: "prims/cylinder", radiusTop: 0.02, radiusBottom: 0.02, height: 0.5, radialSegments: 50, heightSegments: 1, openEnded: false}]
                    }]
            }]
    },
    {type: "material", color: {r: 1, g: 1, b: 1},
        nodes: [{type: "translate", y: -0.1, x: -6.9, z: 2.78,
                nodes: [{type: "rotate", id: "cylinder45", z: 1.0, angle: 95, x: 0.25, nodes: [{type: "prims/cylinder", radiusTop: 0.02, radiusBottom: 0.02, height: 1.8, radialSegments: 50, heightSegments: 1, openEnded: false}]
                    }]
            }]
    },
    {type: "material", color: {r: 1, g: 1, b: 0},
        nodes: [{type: "translate", y: -0.1, x: -7, z: 2.78,
                nodes: [{type: "rotate", id: "cylinder46", z: 1.0, angle: 95, x: 0.25,
                        nodes: [{type: "prims/cylinder", radiusTop: 0.1, radiusBottom: 0.1, height: 1.2, radialSegments: 50, heightSegments: 1, openEnded: false}]
                    }]
            }]
    },
    {type: "material", color: {r: 1, g: 1, b: 1},
        nodes: [{type: "translate", y: 0.0, x: -6.1, z: 2.6,
                nodes: [{type: "rotate", id: "cylinder47", z: 1.0, angle: 0, x: 0, nodes: [{type: "prims/cylinder", radiusTop: 0.12, radiusBottom: 0.15, height: 0.2, radialSegments: 50, heightSegments: 1, openEnded: false}]
                    }]
            }]
    },
    {type: "material", color: {r: 1, g: 1, b: 1},
        nodes: [{type: "translate", y: -0.50, x: -5.1, z: 2.7,
                nodes: [{type: "rotate", id: "cylinder48", z: 1.0, angle: 58, x: -0.02,
                        nodes: [{type: "prims/cylinder", radiusTop: 0.02, radiusBottom: 0.02, height: 2.2, radialSegments: 50, heightSegments: 1, openEnded: false}]
                    }]
            }]
    },
    {type: "material", color: {r: 1, g: 1, b: 1},
        nodes: [{type: "translate", y: -1.1, x: -4.15, z: 2.7,
                nodes: [{type: "rotate", id: "cylinder49", z: 1.0, angle: -5, x: 0.25,
                        nodes: [{type: "prims/cylinder", radiusTop: 0.15, radiusBottom: 0.2, height: 0.15, radialSegments: 50, heightSegments: 1, openEnded: false}]
                    }]
            }]
    },
    {type: "material", color: {r: 1, g: 1, b: 1},
        nodes: [{type: "translate", y: 2.35, x: -0.1, z: 2.9,
                nodes: [{type: "rotate", id: "cylinder52", z: 1.0, angle: 95, x: 0.15,
                        nodes: [{type: "prims/cylinder", radiusTop: 0.03, radiusBottom: 0.03, height: 4, radialSegments: 50, heightSegments: 1, openEnded: false}]
                    }]
            }]
    },
    {type: "material", color: {r: 1, g: 1, b: 1},
        nodes: [{type: "translate", y: 2.15, x: 4.4, z: 2.5,
                nodes: [{type: "rotate", id: "cylinder53", z: 1.0, angle: 80, x: 0.05,
                        nodes: [{type: "prims/cylinder", radiusTop: 0.03, radiusBottom: 0.03, height: 4.3, radialSegments: 50, heightSegments: 1, openEnded: false}]
                    }]
            }]
    },
    {type: "material", color: {r: 1, g: 1, b: 1},
        nodes: [{type: "translate", y: -0.27, x: -2.7, z: 1.25,
                nodes: [{type: "rotate", id: "cylinder54", z: 2.0, angle: 150, x: 0,
                        nodes: [{type: "prims/cylinder", radiusTop: 0.04, radiusBottom: 0.04, height: 1.8, radialSegments: 50, heightSegments: 1, openEnded: false}]
                    }]
            }]
    },
    {type: "material", color: {r: 1, g: 1, b: 1},
        nodes: [{type: "translate", y: 1.23, x: -2.7, z: 1.25,
                nodes: [{type: "rotate", id: "cylinder55", z: 2.0, angle: 150, x: 0,
                        nodes: [{type: "prims/cylinder", radiusTop: 0.04, radiusBottom: 0.04, height: 1.8, radialSegments: 50, heightSegments: 1, openEnded: false}]
                    }]
            }]
    },
    {type: "material", color: {r: 1, g: 0.3, b: 0.3},
        nodes: [{type: "translate", y: -1, x: -4, z: 2.9,
                nodes: [{type: "rotate", id: "cylinder56", z: 2.0, angle: 110, x: -2,
                        nodes: [{type: "prims/cylinder", radiusTop: 0.03, radiusBottom: 0.03, height: 0.5, radialSegments: 50, heightSegments: 1, openEnded: false}]
                    }]
            }]
    },
    {type: "material", color: {r: 0.0, g: 1.0, b: 1.0},
        nodes: [{type: "translate", y: -1.96, x: -5.0, z: 2.0,
                nodes: [{type: "rotate", id: "cube18", y: 1.0, angle: 90,
                        nodes: [{type: "prims/box", xSize: 0.8, ySize: 0.035, zSize: 0.5}]
                    }]
            }]
    },
    {type: "material", color: {r: 0.8, g: 0.80, b: 0.8},
        nodes: [{type: "translate", y: -1.72, x: -4.8, z: 1.65,
                nodes: [{type: "rotate", id: "cube19", y: 1.0, angle: 90, x: 0,
                        nodes: [{type: "prims/box", xSize: 0.05, ySize: 0.2, zSize: 0.3}]
                    }]
            }]
    },
    {type: "material", color: {r: 0.8, g: 0.80, b: 0.8},
        nodes: [{type: "translate", y: -1.72, x: -4.8, z: 2.6,
                nodes: [{type: "rotate", id: "cube20", y: 1.0, angle: 90,
                        nodes: [{type: "prims/box", xSize: 0.05, ySize: 0.22, zSize: 0.3}]
                    }]
            }]
    },
    {type: "material", color: {r: 1, g: 0.2, b: 0.2},
        nodes: [{type: "translate", x: -3.8, y: -0.6, z: 3.28,
                nodes: [{type: "rotate", id: "torus3", x: -0.3, angle: -90, z: 0.5, nodes: [{type: "prims/torus", radius: 0.5, tube: 0.02, segmentsR: 32, segmentsT: 5, arc: Math.PI * 0.48, wire: false, Openended: false}]
                    }]
            }]
    }
    ,
    {type: "material", color: {r: 1, g: 0.2, b: 0.2},
        nodes: [{type: "translate", x: -3.95, y: -1.1, z: 3.45,
                nodes: [{type: "rotate", id: "torus4", x: -3, angle: 90, z: 0.7,
                        nodes: [{type: "prims/torus", radius: 0.5, tube: 0.02, segmentsR: 32, segmentsT: 5, arc: Math.PI * 0.5, wire: false, Openended: false}]
                    }]
            }]
    },
    {type: "material", color: {r: 1.0, g: 1, b: 1}, specularColor: {r: 1.0, g: 1.0, b: 1.0}, specular: 1.0, shine: 1000, emit: 10, alpha: 0,
        nodes: [{type: "translate", id: "sphere13", x: -2.7, y: -0.75, z: 3.6,
                nodes: [{type: "rotate", y: 1.0, angle: 0,
                        nodes: [{type: "prims/sphere", slices: 1, rings: 1, radius: 0.12}]
                    }]
            }]
    },
    {type: "material", color: {r: 1.0, g: 1, b: 1}, specularColor: {r: 1.0, g: 1.0, b: 1.0}, specular: 1.0, shine: 1000, emit: 10, alpha: 0,
        nodes: [{type: "translate", id: "sphere14", x: -2.5, y: 2.25, z: 3.55,
                nodes: [{type: "rotate", y: 1.0, angle: 0,
                        nodes: [{type: "prims/sphere", slices: 1, rings: 1, radius: 0.12}]
                    }]
            }]
    },
    {type: "material", color: {r: 1.0, g: 1, b: 1}, specularColor: {r: 1.0, g: 1.0, b: 1.0}, specular: 1.0, shine: 1000, emit: 10, alpha: 0,
        nodes: [{type: "translate", id: "sphere15", x: -2.6, y: 0.6, z: 3.55,
                nodes: [{type: "rotate", y: 1.0, angle: 0,
                        nodes: [{type: "prims/sphere", slices: 1, rings: 1, radius: 0.12}]
                    }]
            }]
    },
    {type: "material", color: {r: 1.0, g: 1, b: 1}, specularColor: {r: 1.0, g: 1.0, b: 1.0}, specular: 1.0, shine: 1000, emit: 10, alpha: 0,
        nodes: [{type: "translate", id: "sphere16", x: 6.58, y: 0.72, z: 2.5,
                nodes: [{type: "rotate", y: 1.0, angle: 90,
                        nodes: [{type: "prims/cylinder", radiusTop: 0.07, radiusBottom: 0.07, height: 0.35, radialSegments: 2, heightSegments: 3}]
                    }]
            }]
    },
    {type: "material", color: {r: 0.30, g: 0.30, b: 0.30}, emit: 0.5,
        nodes: [{type: "translate", y: -2,
                nodes: [{type: "rotate", x: 1, angle: -90, multOrder: "pre",
                        nodes: [{type: "prims/plane", width: 500, height: 250}]
                    }]
            }]
    },
];

var sceneNodes = {
    nodes: [{type: "lights", id: "myLights", lights: [{mode: "dir", color: {r: 1.0, g: 1.0, b: 1.0}, diffuse: true, specular: true, dir: {x: -5, y: -2, z: -5}, space: "view"}],
            nodes: [{type: "rotate", y: 1, angle: 0, id: "multi", nodes: threeShapes,
                    nodes: [{type: "translate", x: 0, y: 0, z: -1, id: "multi2", nodes: threeShapes}]
                }]
        }]
};
var scene = undefined;
function setUp() {
    scene = SceneJS.createScene({
        canvasId: "shapecanvas2",
        nodes: [{type: "cameras/orbit", id: "mycamera", yaw: 0, pitch: 0, zoom: 16, zoomSensitivity: 1.0, eye: {x: 0, y: 0, z: 0}, look: {x: 0, y: 0, z: 0},
                nodes: [{type: "camera", optics: {type: "perspective", fovy: 40.0, aspect: 1024 / 500, near: 0.10, far: 100},
                        nodes: [sceneNodes]
                    }]
            }]
    });

    function moveObject(id, r1, r2, r3, r4, r5, r6) {
        scene.getNode(id,
                function (myTranslate) {
                    var x = r1;
                    var xInc = 0.03;
                    var y = r3;
                    var yInc = 0.03;
                    var z = r5;
                    var zInc = 0.03;
                    scene.on("tick",
                            function () {
                                if (x <= r2) {
                                    xInc *= 0.0;
                                }
                                x += xInc;
                                if (y <= r4) {
                                    yInc *= 0.0;
                                }
                                y += yInc;
                                if (z <= r6) {
                                    zInc *= 0.0;
                                }
                                z += zInc;
                                myTranslate.setXYZ({x: x, y: y, z: z});
                            });

                });
    }
    ;

    function moveObject1(id, q1, q2, q3, q4, q5, q6) {
        scene.getNode(id,
                function (myTranslate) {
                    var x = q1;
                    var xInc = 0.01;
                    var y = q3;
                    var yInc = 0.01;
                    var z = q5;
                    var zInc = 0.01;
                    scene.on("tick",
                            function () {
                                if (x >= q2) {
                                    xInc *= 0.0;
                                }
                                x += xInc;
                                if (y >= q4) {
                                    yInc *= 0.0;
                                }
                                y += yInc;
                                if (z >= q6) {
                                    zInc *= 0.0;
                                }
                                z += zInc;
                                myTranslate.setXYZ({x: x, y: y, z: z});
                            });

                });
    }
    ;

    window.setTimeout(function () {
        moveObject("multi2", -9, -10, -0.80, -0.80, 4.0, 4.0);
    }, 0000);    
    window.setTimeout(function () {
        moveObject("multi2", 0, 0, 0, 0, 0, 0);
        document.getElementById("bttn").innerHTML = "<input type='button' value='Trigger Generator' onclick='mycontrol()'>";
    }, 6000);
}



function setUP() {
    scene = SceneJS.createScene({
        canvasId: "shapecanvas2",
        nodes: [{type: "cameras/orbit", id: "mycamera", yaw: 0, pitch: 0, zoom: 16, zoomSensitivity: 1.0, eye: {x: 0, y: 0, z: 0}, look: {x: 0, y: 0, z: 0},
                nodes: [{type: "camera", optics: {type: "perspective", fovy: 40.0, aspect: 1024 / 500, near: 0.10, far: 100},
                        nodes: [sceneNodes]
                    }]
            }]
    });
}

  