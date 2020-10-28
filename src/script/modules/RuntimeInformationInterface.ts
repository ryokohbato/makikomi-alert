export interface RuntimeInformation
{
  text: string,
  from: "popup"|"background"|"contents",
  to: "popup"|"background"|"contents",
  time: number,
  type: "log",
}
/*
export interface StorageDataInformation
{
  text: {method: "get", key: Array<string>}|{method: "set", values: Array<{key: string, value: string}>},
  from: "popup"|"background"|"contents",
  to: "popup"|"background"|"contents",
  time: number,
  type: "storage",
}
*/