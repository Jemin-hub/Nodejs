const msg=function(){
    console.log("after 3 sec")

}
setTimeout(msg,3000);
// anonemouse fun.
setTimeout(function(){console.log("direct function")},5000);
// arrow
setTimeout(()=>{console.log("arro fun using")},2000)
