import { IRuntimeInformation } from "./RuntimeInformationInterface";

export class RuntimeLog
{
  private static runtimeLog: Array<IRuntimeInformation>;
  
  constructor()
  {
    RuntimeLog.runtimeLog = [];
  }

  public Add(log: IRuntimeInformation): Array<IRuntimeInformation>
  {
    RuntimeLog.runtimeLog = [...RuntimeLog.runtimeLog, log];
    return RuntimeLog.runtimeLog;
  }
}