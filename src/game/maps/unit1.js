const mapListU1 = {
  map01: {
    unit: 1,
    map: 1,
    matrix: [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [2, 2, 2, 2, 2],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],

    ],
    type: 1,
    start: { row: 2, column: 0, orientation: "east" },
    finish: { row: 2, column: 4, orientation: "east"},
    stars: { one: 5, two: 10, three: 15 },
    trafficLights: [
    ]
  },

  map02: {
    matrix: [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 3, 2, 2, 2, 2],
      [0, 0, 1, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 0],
      [2, 2, 6, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ],
    type: 1,
    start: { row: 4, column: 0 , orientation: "east" },
    finish: { row: 1, column: 6, orientation: "east"},
    stars: { one: 5, two: 10, three: 15 },
    trafficLights: [
    ],
  },

  map03: {
    matrix: [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [2, 2, 2, 2, 2, 4, 0],
      [0, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 1, 0],
      [0, 0, 3, 2, 2, 6, 0],
      [0, 0, 1, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 0],

    ],
    type: 1,
    start: { row: 2, column: 0, orientation: "east" },
    finish: { row: 7, column: 2, orientation: "south"},
    stars: { one: 5, two: 10, three: 15 },
    trafficLights: [
    ]
  },

  map04: {
    matrix: [
      [0, 0, 0, 0, 0, 0, 0],
      [2, 2, 2, 2, 2, 4, 0],
      [0, 0, 0, 0, 0, 1, 0],
      [0, 3, 2, 2, 2, 6, 0],
      [0, 1, 0, 0, 0, 0, 0],
      [0, 5, 2, 4, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0],
    ],
    type: 1,
    start: { row: 1, column: 0 , orientation: "east" },
    finish: { row: 6, column: 3, orientation: "south"},
    stars: { one: 5, two: 10, three: 15 },
    trafficLights: [
    ],
  },

  
  map05: {
    matrix: [
      [0, 1, 0, 0, 0, 0, 0],
      [0, 1, 0, 3, 2, 4, 0],
      [0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 1, 0],
      [0, 5, 2, 6, 0, 1, 0],
      [0, 0, 0, 0, 0, 1, 0],
      
    ],
    type: 1,
    start: { row: 0, column: 1, orientation: "south" },
    finish: { row: 7, column: 5, orientation: "south"},
    stars: { one: 5, two: 10, three: 15 },
    trafficLights: [
    ]
  },
  
  map06: {
    matrix: [
      [0, 1, 0, 0, 0],
      [0, 5, 2, 4, 0],
      [0, 0, 0, 1, 0],
      [0, 3, 2, 6, 0],
      [0, 1, 0, 0, 0],
      [0, 5, 2, 4, 0],
      [0, 0, 0, 1, 0],

    ],
    type: 1,
    start: { row: 0, column: 1, orientation: "south" },
    finish: { row: 6, column: 3, orientation: "south"},
    stars: { one: 5, two: 10, three: 15 },
    trafficLights: [
    ]
  },

  map07: {
    matrix: [
      [0, 0, 0, 0, 0, 0, 0],
      [2, 2, 2, 2, 2, 4, 0],
      [0, 0, 0, 0, 0, 1, 0],
      [0, 3, 2, 4, 0, 1, 0],
      [0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 5, 2, 6, 0],
      [0, 1, 0, 0, 0, 0, 0],
      

    ],
    type: 1,
    start: { row: 1, column: 0, orientation: "east" },
    finish: { row: 6, column: 1, orientation: "south"},
    stars: { one: 5, two: 10, three: 15 },
    trafficLights: [
    ]
  },


  map08: {
    matrix: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 3, 2, 2, 2, 2, 2, 2, 4, 0],
      [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
      [0, 1, 0, 3, 2, 2, 2, 2, 6, 0],
      [0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
      [2, 6, 0, 5, 2, 2, 4, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],

    ],
    type: 1,
    start: { row: 5, column: 0, orientation: "east" },
    finish: { row: 7, column: 6, orientation: "south"},
    stars: { one: 5, two: 10, three: 15 },
    trafficLights: [
    ]
  },
};


export default mapListU1;