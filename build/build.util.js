export const getRootElem = () => document.getElementById("content");

/**
 * Builds a Table Element to be used for the Core Display
 * @returns table element node
 */
export const buildCoreTableElem = () => {
  let tableElem = document.createElement("div");
      tableElem.classList.add("core");

  return tableElem;
}
