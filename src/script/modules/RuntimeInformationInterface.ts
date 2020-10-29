export interface RuntimeInformation
{
  text: string,
  from: "popup"|"background"|"contents",
  to: "popup"|"background"|"contents",
  time: number,
  type: "log",
}
