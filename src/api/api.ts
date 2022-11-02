// Менять data.json нельзя :)
import * as dataSchedule from "./data.json";

export function getSchedule(params?: any) {
  return new Promise(function (resolve, reject) {
    resolve(dataSchedule);
  });
}
