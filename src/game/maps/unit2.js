const mapListU2 = {
  map01: {
    matrix: [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [2, 2, 2, 2, 2, 2, 2],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],

    ],
    type: 1,
    start: { row: 3, column: 0, orientation: "east" },
    finish: { row: 3, column: 6, orientation: "east"},
    stars: { one: 5, two: 10, three: 15 },
    trafficLights: [
      {row: 3, column: 3, orientation: 'east', value: 1, isRed: true },
    ]
  },

  map02: {
    matrix: [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 3, 2, 2, 4, 0],
      [0, 0, 1, 0, 0, 1, 0],
      [0, 0, 1, 0, 0, 1, 0],
      [2, 2, 6, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 1, 0],
    ],
    type: 1,
    start: { row: 4, column: 0 , orientation: "east" },
    finish: { row: 6, column: 5, orientation: "south"},
    stars: { one: 5, two: 10, three: 15 },
    trafficLights: [
      {row: 4, column: 5, orientation: 'south', value: 1, isRed: true },
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
      {row: 2, column: 3, orientation: 'east', value: 1, isRed: true },
      {row: 4, column: 5, orientation: 'south', value: 1, isRed: true },
    ]
  },

  map04: {
    matrix: [
      [0, 1, 0, 0, 0],
      [0, 1, 0, 0, 0],
      [0, 5, 2, 4, 0],
      [0, 0, 0, 1, 0],
      [0, 0, 0, 1, 0],
      [0, 3, 2, 6, 0],
      [0, 1, 0, 0, 0],
      [0, 1, 0, 0, 0],
    ],
    type: 1,
    start: { row: 0, column: 1 , orientation: "south" },
    finish: { row: 7, column: 1, orientation: "south"},
    stars: { one: 5, two: 10, three: 15 },
    trafficLights: [
      {row: 2, column: 2, orientation: 'east', value: 1, isRed: false },
      {row: 5, column: 2, orientation: 'west', value: -1, isRed: true },
    ],
  },

  map05: {
    matrix: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [2, 2, 2, 2, 2, 2, 2, 4, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 0],
      [0, 3, 2, 2, 2, 2, 2, 6, 0],
      [0, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 5, 2, 2, 2, 2, 2, 4, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 0],

    ],
    type: 1,
    start: { row: 1, column: 0, orientation: "east" },
    finish: { row: 6, column: 7, orientation: "south"},
    stars: { one: 5, two: 10, three: 15 },
    trafficLights: [
      {row: 1, column: 4, orientation: 'east', value: -1, isRed: true },
      {row: 3, column: 2, orientation: 'west', value: -1, isRed: true },
      {row: 5, column: 5, orientation: 'east', value: -1, isRed: true },
    ]
  },

  map06: {
    matrix: [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 3, 2, 4, 0, 0],
      [0, 0, 1, 0, 5, 4, 0],
      [2, 2, 6, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 1, 0],
      [0, 0, 3, 2, 2, 6, 0],
      [0, 0, 1, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 0],

    ],
    type: 1,
    start: { row: 3, column: 0, orientation: "east" },
    finish: { row: 7, column: 2, orientation: "south"},
    stars: { one: 5, two: 10, three: 15 },
    trafficLights: [
      {row: 1, column: 3, orientation: 'east', value: -1, isRed: true },
      {row: 3, column: 5, orientation: 'south', value: -1, isRed: false },
      {row: 5, column: 3, orientation: 'west', value: -1, isRed: true },      
    ]
  },


  map07: {
    matrix: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 3, 2, 4, 0, 3, 2, 4, 0],
      [0, 1, 0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 1, 0],
      [2, 6, 0, 5, 2, 6, 0, 5, 2],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],

    ],
    type: 1,
    start: { row: 5, column: 0, orientation: "east" },
    finish: { row: 5, column: 8, orientation: "east"},
    stars: { one: 5, two: 10, three: 15 },
    trafficLights: [
      {row: 3, column: 1, orientation: 'north', value: 1, isRed: true },
      {row: 3, column: 3, orientation: 'south', value: -1, isRed: false },
      {row: 3, column: 5, orientation: 'north', value: 1, isRed: true },
      {row: 3, column: 7, orientation: 'south', value: -1, isRed: false },
    ]
  },


  map08: {
    matrix: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 3, 2, 2, 2, 2, 2, 4, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 1, 0, 3, 2, 2, 2, 6, 0, 0],
      [0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
      [2, 6, 0, 5, 2, 2, 2, 2, 2, 2],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    type: 1,
    start: { row: 5, column: 0 , orientation: "east" },
    finish: { row: 5, column: 9, orientation: "east"},
    stars: { one: 5, two: 10, three: 15 },
    trafficLights: [
      {row: 3, column: 1, orientation: 'north', value: 1, isRed: false },
      {row: 1, column: 4, orientation: 'east', value: 1, isRed: true },
      {row: 2, column: 7, orientation: 'south', value: 1, isRed: false },
      {row: 5, column: 6, orientation: 'east', value: 1, isRed: true },
    ],
  },
};


export default mapListU2;