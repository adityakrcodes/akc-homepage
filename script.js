import bookmarks from './bookmarks.json' assert { type: "json" };

let hour = document.getElementsByClassName("hour")[0];
let minute = document.getElementsByClassName("min")[0];

let curHout = new Date().getHours();
let curMin = new Date().getMinutes();

hour.innerHTML = curHout;
minute.innerHTML = curMin;

let bookmarkList = document.getElementsByClassName("bookmarks")[0];

console.log(bookmarkList.innerHTML);