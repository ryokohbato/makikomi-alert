import { RuntimeInformation } from "./RuntimeInformationInterface";

export class RuntimeLog
{
  private static runtimeLog: Array<RuntimeInformation>;
  
  constructor()
  {
    RuntimeLog.runtimeLog = [];
  }

  public Add(log: RuntimeInformation): Array<RuntimeInformation>
  {
    RuntimeLog.runtimeLog = [...RuntimeLog.runtimeLog, log];
    return RuntimeLog.runtimeLog;
  }
}