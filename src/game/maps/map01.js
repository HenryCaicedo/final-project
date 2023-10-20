const map01 = {
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
  start: [5, 0],
  finish: [4, 3],
  orientation: "east",
  trafficLights: [
    {row: 3, column: 1, orientation: 'north', value: 1, isGreen: true },
    {row: 1, column: 3, orientation: 'east', value: -1, isGreen: false },
    {row: 2, column: 7, orientation: 'south', value: 1, isGreen: true },
    {row: 5, column: 6, orientation: 'east', value: 1, isGreen: false },
]
};

export default map01;