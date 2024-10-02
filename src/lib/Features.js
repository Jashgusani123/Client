import moment from "moment";

const fileFormat = (url) => {
    const fileExtension = url.split(".").pop();
    if (fileExtension === "mp4" || fileExtension === "webm" || fileExtension === "ogg") {
        return "Video";
    } else if (fileExtension === "mp3" || fileExtension === "wav") {
        return "Audio";
    } else if (fileExtension === "png" || fileExtension === "jpg" || fileExtension === "jpeg" || fileExtension === "gif") {
        return "Image";
    } else {
        return "File";
    }
};

const transformImage = (url = "", width = 100) => {
    
    const newUrl = url.replace("upload/" , `upload/dpr_auto/w_${width}/`)
    return newUrl;
};  

const getlast7Days = ()=>{
    const today = moment();
    const last7Days = [];
    for(let i =0 ; i<7;i++){
        const dayDate = today.clone().subtract(i,"days");
        const dayName = dayDate.format("dddd");
        last7Days.unshift(dayName);
    }
    return last7Days;
}
const getOrSaveFromStorage = ({ key, value, get }) => {
    if (get){
        const dataIsSaveOrNot = localStorage.getItem(key);
            
        if(dataIsSaveOrNot == "undefined"){
            return [];
        }
        if(dataIsSaveOrNot){
            return JSON.parse(localStorage.getItem(key))
         
        }
    }
    else localStorage.setItem(key,JSON.stringify(value));    
  };
export { fileFormat, transformImage ,getOrSaveFromStorage, getlast7Days};  // Correctly export both functions
