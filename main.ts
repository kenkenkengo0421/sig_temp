
import { HTMLMOV } from './HTMLMOV.js';


function outSig(
  inTemp: number,
  sigL: number,
  sigH: number,
  tempL: number,
  tempH: number
): number {
  const out = sigL + ((inTemp - tempL) * (sigH - sigL)) / (tempH - tempL);
  return out;
}



let btn = document.getElementById("sub_btn") as HTMLElement;
btn.onclick = function() {

  const sigMin = HTMLMOV.get_num("sigMin");    // 信号の下限
  const sigMax = HTMLMOV.get_num("sigMax");   // 信号の上限  
  const tempMin = HTMLMOV.get_num("tempMin");   // 温度の下限
  const tempMax = HTMLMOV.get_num("tempMax"); // 温度の上限
  const currentTemp = HTMLMOV.get_num("currentTemp"); //現在温度

  const ans = outSig(currentTemp, sigMin, sigMax, tempMin, tempMax);

  HTMLMOV.set_num("ans", ans);
}
  
