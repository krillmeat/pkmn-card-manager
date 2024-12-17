/**
 * 
 * @returns string value of the Format, sent in by the Query Param
 */
export const getFormatParam = () => {
  let queryParam = window.location.search.substring(1);
  let splitParams = queryParam.split("&");
  for(let p of splitParams){
    if(p.indexOf("format") !== -1) return p.split("=")[1]
  }

  return "";
}

export const showOwnedParam = () =>  window.location.search.substring(1).indexOf("show-owned=true") !== -1;
