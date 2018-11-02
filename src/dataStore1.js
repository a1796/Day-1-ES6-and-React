export const text1 = "Hello";
export const text2 = "Hello World";
export const text3 = "Hello Wonderfull World";

export default function(str){
    if(str.length > 5){
    return str.toUpperCase();
    } else {
        return str.toLowerCase();
    }
  }
  