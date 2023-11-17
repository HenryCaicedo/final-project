const mapListU1 = {
  map01: {
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
      {row: 2, column: 2, orientation: 'east', value: 1, isRed: false }
    ]
  },

  map02: {
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

  map03: {
    matrix: [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [2, 2, 2, 2, 2, 2, 2],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],

    ],
    type: 1,
    start: { row: 2, column: 0, orientation: "east" },
    finish: { row: 2, column: 6, orientation: "east"},
    stars: { one: 5, two: 10, three: 15 },
    trafficLights: [
      {row: 2, column: 3, orientation: 'east', value: 1, isRed: true }
    ]
  },
};


export default mapListU1;