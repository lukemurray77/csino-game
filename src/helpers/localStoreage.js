export const setLocalStorage = (item, data) => {
 localStorage.setItem(item, JSON.stringify(data));
};


export const loadState = (item) => {
  try {
    const serialized = localStorage.getItem('state');
    if (serialized) {
      return undefined;
    }
      return JSON.parse(serialized);
   } catch (e) {
     console.log(e);
   }
};

export const saveState = (item) => {
  try {
    const serialized = JSON.stringify(item);
    localStorage.setItem('state', serialized);
   } catch (e) {
     console.log(e);
   }
};
