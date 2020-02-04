var currentCourse="course1";
$(".showcourse2").css("display","none");
$(".showcourse3").css("display","none");
$(".showcourse4").css("display","none");
$(".course").click(function(){
  $(this).css("backgroundColor","#36b5b0");
  $("#"+currentCourse).css("backgroundColor","#9dd8c8");
  $("."+currentCourse).css("display","none");
  $(".show"+currentCourse).css("display","none");
  var veryCurrentCourse=$(this).attr("id");
  $("."+veryCurrentCourse).css("display","block");
  $(".show"+veryCurrentCourse).css("display","block");
  currentCourse=$(this).attr("id");
});
$(".menu").click(function(){
  $(".leaderBoard").toggle();
  $(".leaderBoard").css("display","inline-block");
  $(".menu").css("display","none");
  $(".delete").toggle();


});

$(".delete").click(function(){
  $(".menu").css("display","inline-block");
  $(".delete").toggle();
    $(".leaderBoard").toggle();
});
var num1= document.querySelectorAll(".download").length;
var show=document.querySelectorAll(".showNum");
var show1=document.querySelectorAll(".showNum1");
var title1=document.querySelectorAll(".titleHeading1");
var show2=document.querySelectorAll(".showNum2");
var title2=document.querySelectorAll(".titleHeading2");
var show3=document.querySelectorAll(".showNum3");
var title3=document.querySelectorAll(".titleHeading3");
var show4=document.querySelectorAll(".showNum4");
var title4=document.querySelectorAll(".titleHeading4");

var downloadArray= document.querySelectorAll(".download");
for(var i=0;i<num1;i++)
{
  downloadArray[i].addEventListener("click",function(event){
    for (var j = 0; j < num1; j++) {
      if (downloadArray[j]===this) {
        break;
      }
    }
    var n=Number(show[j].textContent);
    n++;
    show[j].textContent=n;
    //document.querySelectorAll(".count")[j].textContent=n;
    var title=document.querySelectorAll(".titleHeading");

leaderBoard1(title1,show1);
leaderBoard2(title2,show2);
leaderBoard3(title3,show3);
leaderBoard4(title4,show4);
  });
}

// function swaping(ar,f_index,s_index)
// {
//   var temp = ar[f_index];
//   ar[f_index]=ar[s_index];
//   ar[s_index]=temp;
// }


// $(".download").click(function(){
//   var sorted=document.querySelectorAll(".count");
//
//   var headerSorter=document.querySelectorAll(".subjectHeading");
//
//   // var collection=[];
//   // for (var i = 0; i < sorted.length; i++) {
//   //   var m=Number(sorted[i].textContent);
//   //   collection.push(m);
//   // }
//   bubble_Sort(sorted,headerSorter);
// });

function leaderBoard1(title,downloadNum)
{
  var lBoard=[];
  var lCode=[];
  for (var n = 0; n < downloadNum.length; n++) {
    lBoard[n]=title[n].textContent;
    lCode[n]=Number(downloadNum[n].textContent);
  }
  let len = title.length,
      i, j, stop;

  for (i=0; i < len; i++){
      for (j=i, stop=len; j < stop; j++){
          //if (arr1[j]<arr1[j+1] ){
            if (lCode[j]>lCode[i]) {
              var temp=lCode[i];
              var tempName=lBoard[i];
              lCode[i]=lCode[j];
              lBoard[i]=lBoard[j];
              lCode[j]=temp;
              lBoard[j]=tempName;
            }
      }
  }
  for (var m = 0; m < lCode.length; m++) {
    document.querySelectorAll(".count1")[m].textContent=lCode[m];
    document.querySelectorAll(".subjectHeading1")[m].textContent=lBoard[m];
  }
}
function leaderBoard2(title,downloadNum)
{
  var lBoard=[];
  var lCode=[];
  for (var n = 0; n < downloadNum.length; n++) {
    lBoard[n]=title[n].textContent;
    lCode[n]=Number(downloadNum[n].textContent);
  }
  let len = title.length,
      i, j, stop;

  for (i=0; i < len; i++){
      for (j=i, stop=len; j < stop; j++){
          //if (arr1[j]<arr1[j+1] ){
            if (lCode[j]>lCode[i]) {
              var temp=lCode[i];
              var tempName=lBoard[i];
              lCode[i]=lCode[j];
              lBoard[i]=lBoard[j];
              lCode[j]=temp;
              lBoard[j]=tempName;
            }
      }
  }
  for (var m = 0; m < lCode.length; m++) {
    document.querySelectorAll(".count2")[m].textContent=lCode[m];
    document.querySelectorAll(".subjectHeading2")[m].textContent=lBoard[m];
  }
}
function leaderBoard3(title,downloadNum)
{
  var lBoard=[];
  var lCode=[];
  for (var n = 0; n < downloadNum.length; n++) {
    lBoard[n]=title[n].textContent;
    lCode[n]=Number(downloadNum[n].textContent);
  }
  let len = title.length,
      i, j, stop;

  for (i=0; i < len; i++){
      for (j=i, stop=len; j < stop; j++){
          //if (arr1[j]<arr1[j+1] ){
            if (lCode[j]>lCode[i]) {
              var temp=lCode[i];
              var tempName=lBoard[i];
              lCode[i]=lCode[j];
              lBoard[i]=lBoard[j];
              lCode[j]=temp;
              lBoard[j]=tempName;
            }
      }
  }
  for (var m = 0; m < lCode.length; m++) {
    document.querySelectorAll(".count3")[m].textContent=lCode[m];
    document.querySelectorAll(".subjectHeading3")[m].textContent=lBoard[m];
  }
}
function leaderBoard4(title,downloadNum)
{
  var lBoard=[];
  var lCode=[];
  for (var n = 0; n < downloadNum.length; n++) {
    lBoard[n]=title[n].textContent;
    lCode[n]=Number(downloadNum[n].textContent);
  }
  let len = title.length,
      i, j, stop;

  for (i=0; i < len; i++){
      for (j=i, stop=len; j < stop; j++){
          //if (arr1[j]<arr1[j+1] ){
            if (lCode[j]>lCode[i]) {
              var temp=lCode[i];
              var tempName=lBoard[i];
              lCode[i]=lCode[j];
              lBoard[i]=lBoard[j];
              lCode[j]=temp;
              lBoard[j]=tempName;
            }
      }
  }
  for (var m = 0; m < lCode.length; m++) {
    document.querySelectorAll(".count4")[m].textContent=lCode[m];
    document.querySelectorAll(".subjectHeading4")[m].textContent=lBoard[m];
  }
}
