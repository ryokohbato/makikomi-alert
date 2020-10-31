export interface RuntimeInformation
{
  text: string,
  from: "popup"|"background"|"contents",
  time: number,
  type: "log",
}

export const tabsInformation = {
  colorConfigChanged: 0,
}
