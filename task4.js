

// how to chnage the title of web page when user is not on page;

 let doc_title = document.title;
 console.log(doc_title);
 window.addEventListener("blur",()=>{
    document.title = "come back soon :(";
 });

 window.addEventListener("focus",()=>{
    document.title = doc_title;
 });