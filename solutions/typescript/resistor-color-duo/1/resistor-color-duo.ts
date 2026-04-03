export function decodedValue(colors: string[]): number {
  let value1 = 0;
  let value2 = 0;

  switch (colors[0]) {
    case "black": value1 = 0; break;
    case "brown": value1 = 1; break;
    case "red": value1 = 2; break;
    case "orange": value1 = 3; break;
    case "yellow": value1 = 4; break;
    case "green": value1 = 5; break;
    case "blue": value1 = 6; break;
    case "violet": value1 = 7; break;
    case "grey": value1 = 8; break;
    case "white": value1 = 9; break;
    default: value1 = 0;
  }

  switch (colors[1]) {
    case "black": value2 = 0; break;
    case "brown": value2 = 1; break;
    case "red": value2 = 2; break;
    case "orange": value2 = 3; break;
    case "yellow": value2 = 4; break;
    case "green": value2 = 5; break;
    case "blue": value2 = 6; break;
    case "violet": value2 = 7; break;
    case "grey": value2 = 8; break;
    case "white": value1 = 9; break;
    default: value2 = 0;
  }

  return value1 * 10 + value2;
}