export interface IRuntimeInformation
{
  text?: string,
  from?: "popup"|"background"|"contents",
  time?: number,
  type: "log"|"logCount",
}

export const ITabsInformation = {
  colorConfigChanged: 0,
}
