const getCurrentDate = () =>  new Date().toISOString().slice(0,10);
const getCurrentTime = () => new Date().toLocaleTimeString().slice(0,5);

export {getCurrentDate, getCurrentTime}