export interface IRuntimeInformation
{
  text: string,
  from: "popup"|"background"|"contents",
  time: number,
  type: "log",
}

export const ITabsInformation = {
  colorConfigChanged: 0,
}
