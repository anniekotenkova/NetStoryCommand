//= require jquery
//= require jquery_ujs
//= require jquery-ui/widgets/mouse
//= require jquery-ui/widgets/draggable
//= require jquery-ui/widgets/droppable
//= require jquery-ui/widgets/resizable
//= require jquery-ui/widgets/selectable
//= require jquery-ui/widgets/sortable
//= require rails_sortable
//= require_tree .

//ARTICLES PREVIEW
$(function() {
  $('.draggable').draggable();
  $('.draggable').mousedown(function() //associate mousedown event with developments
  {
    var maxZindex = 0; // keep traking max z-index
    $(this).siblings('.draggable').each(function() //find all the siblings of that development
    {
      var currentZindex = Number($(this).css('z-index')); //retrieve z-index of each development we are looping through
      maxZindex = currentZindex > maxZindex ? currentZindex : maxZindex;
    });
    $(this).css('z-index', maxZindex + 1);
  });
  $('.resizable').resizable();


 $("#Desktop span").click(function(e) {
	 	e.stopPropagation();
	 	if (e.shiftKey) {
	 			//Shift-Click
	 			$(this).addClass("focus");
	 	} else {
	 			$(".focus").removeClass("focus");
	 			$(this).addClass("focus");
	 	}
  });
 $("body:not(#Desktop span)").click(function() {
 		$("#Desktop span").removeClass("focus");

//FOLDERS
$( "#infofolder" ).dblclick(function() {
  $('#info').css('display','block');
});

 $( "#infofolder" ).dblclick(function() {
   $('#info').css('display','block');
 });

 $( "#computerfolder" ).dblclick(function() {
   $('#computer').css('display','block');
 });

 $( "#folderfolder" ).dblclick(function() {
   $('#folder').css('display','block');
 });

 $( "#trashfolder" ).dblclick(function() {
   $('#trash').css('display','block');
 });


 $( ".cbinfo" ).click(function() {
 $('#info').css('display','none');
 });

 $( ".cbcomputer" ).click(function() {
 $('#computer').css('display','none');
 });

 $( ".cbfolder" ).click(function() {
 $('#folder').css('display','none');
 });

 $( ".cberr" ).click(function() {
 $('#trash').css('display','none');
 });


//Background Color
// class Setting {
//     bgColors = ["9BC53D", "5BC0EB", "E55934", "FDE74C", "F7FFF7"];
//     windowColors = ["EBFFFA", "FFCDB2", "FFB4A2", "E5989B", "B5838D"];
//
//     constructor() {
//         this.initSetting("bg");
//     }
//
//     initSetting(type: "bg") {
//         const bgContainer = document.getElementById(`${type}-setting`);
//         const typeColor = type == "bg" ? this.bgColors;
//         typeColor.map((value) => {
//             const color = document.createElement("span");
//             color.setAttribute("style", `background: #${value};`);
//             color.onclick = () => this.changeColor(type, value);
//             bgContainer.appendChild(color);
//         })
//     }
//
//     changeColor(type: "bg", color: string) {
//         document.documentElement.style.setProperty(type === "bg" ? "--main-color", `#${color}`);
//     }
//
// }

$( "#er" ).click(function() {
  $('#err').css('display','block');
});
$( ".cberr" ).click(function() {
$('#err').css('display','none');
});

// $( ".article-icon" ).click(function() {
//   $(#article_ + article_id.css('display','block');
// });

// попап в статье
$('#popup-close').on('click', function(){
  $('.popup').toggleClass('isClosed')
});
$( function() {
    $( ".popup" ).draggable();
  });

  $( "#gui" ).click(function() {
    $('#guiewrise').css('display','block');
    $('#firstPage').css('display','block');
  });
  $( "#close" ).click(function() {
  $('#guiewrise').css('display','none');
  });

  $( ".next" ).click(function() {
  if ('#firstPage') {
            $('#firstPage').css('display','none');
            $('#secondPage').css('display','block');
  } else if ('#secondPage') {
            $('#secondPage').css('display','none');
            $('#thirdPage').css('display','block');
  } else {
            $('#secondPage').css('display','none');
            $('#firstPage').css('display','none');
  }
  });

  $( "#mailb" ).click(function() {
    $('#mailb').css('display','block');
  });
  // // $( ".cberr" ).click(function() {
  // // $('#err').css('display','none');
  // });

});
