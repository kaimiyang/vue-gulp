export const browserJudgment = () => {
  const system = { 
    win: false, 
    mac: false, 
    xll: false, 
    ipad: false
  }; 
  const p = navigator.platform;
  system.win = p.indexOf("Win") == 0; 
  system.mac = p.indexOf("Mac") == 0; 
  system.xll = (p == "X11") || (p.indexOf("Linux") == 0); 
  system.ipad = (navigator.userAgent.match(/iPad/i) != null) ? true : false; 
  if (system.win || system.mac || system.xll || system.ipad) { 
    return 'pc'
  } else { 
    const ua = navigator.userAgent.toLowerCase();  
    if((/MicroMessenger/i).test(ua)) {
      return 'wx'
    }
    if ((/DingTalk/i).test(ua)) {
      return 'ding'
    }
    return 'other'
  }
}