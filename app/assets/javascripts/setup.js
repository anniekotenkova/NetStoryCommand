console.log("loaded")

$(window).on("load", function() {
  console.log("ready")
  console.log("Yo")
  console.log(document.getElementsByTagName('body')[0].dataset.layer)
  document.getElementsByTagName('body')[0].dataset.layer = 1
  // console.log(document.getElementsByTagName('body')[0].dataset.layer)
  $(".draggable").draggable()
  //
  // $("#Desktop span").click(function(e) {
  //   e.stopPropagation();
  //   if (e.shiftKey) {
  //     //Shift-Click
  //     $(this).addClass("focus");
  //   } else {
  //     $(".focus").removeClass("focus");
  //     $(this).addClass("focus");
  //   }
  // });
  //
  // $("body:not(#Desktop span)").click(function() {
  //   $("#Desktop span").removeClass("focus");
  // });
});
//
// $(document).ready(function() {
//   console.log("ready")
//   console.log("Yo")
//   console.log(document.getElementsByTagName('body')[0].dataset.layer)
//   document.getElementsByTagName('body')[0].dataset.layer = 1
//   console.log(document.getElementsByTagName('body')[0].dataset.layer)
//   $(".draggable").draggable()
//
//   $("#Desktop span").click(function(e) {
//     e.stopPropagation();
//     if (e.shiftKey) {
//       //Shift-Click
//       $(this).addClass("focus");
//     } else {
//       $(".focus").removeClass("focus");
//       $(this).addClass("focus");
//     }
//   });
//
//   $("body:not(#Desktop span)").click(function() {
//     $("#Desktop span").removeClass("focus");
//   });
// });
