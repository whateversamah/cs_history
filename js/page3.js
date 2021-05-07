var windheight = $(window).height();
    var headerheight = $("#buttons").height();
    
    var codeheight = windheight - headerheight;
    
    $("#codecontainer").height(codeheight);
    
     var css = $("li").click(function(){
                  
                  
                 var activediv = $(this).html();
                 $("#"+activediv+"container").toggle();
                 
                 var showingdiv = $(".codecontainer").filter(function(){
                    return ($(this).css("display") != "none");
                     
                }).length;
                
                var width = 100/showingdiv;
                
                $(".codecontainer").width(width+"%");
     });
            
   $("#button").click(function() {
             
   
              $('#resultFrame').contents().find('html').html("<style>"+$('#css').val()+"</style>"+$("#html").val());
                  
    document.getElementById('resultFrame').contentWindow.eval( $
   ('#js').val() );
    });