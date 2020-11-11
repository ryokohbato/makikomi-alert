import { IRuntimeInformation } from "./RuntimeInformationInterface";

export class RuntimeLog
{
  private static runtimeLog: Array<IRuntimeInformation> = [];

  public static Add(log: IRuntimeInformation): Array<IRuntimeInformation>
  {
    RuntimeLog.runtimeLog = [...RuntimeLog.runtimeLog, log];

    if (this.GetLogCount() > 150)
      RuntimeLog.runtimeLog = this._GetRecent();

    return RuntimeLog.runtimeLog;
  }

  public static GetLogCount()
  {
    return RuntimeLog.runtimeLog ? RuntimeLog.runtimeLog?.length : 0;
  }

  private static _GetRecent(): Array<IRuntimeInformation>
  {
    return RuntimeLog.runtimeLog.filter((value, index, array) => index > array.length - 100)
  }
}
