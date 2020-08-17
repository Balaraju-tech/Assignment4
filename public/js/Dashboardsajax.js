$(document).ready(function(){

    $(".sendemail").on("click",function(){

        var idofelement = this.id; 
        var status = $('[id="'+idofelement+'parent"]').children('td').eq(8).html();
        var statustext = status.substring(3,status.length-4);
        console.log("The status of order is "+statustext);
        $.ajax({
            type: "POST",
            url: "/Dashboard/sendemail",
            data: {
                'email': idofelement,
                'status': statustext
            },
            success: function(dataString){

                $('[id="'+idofelement+'"]').html(dataString);
                $('[id="'+idofelement+'"]').attr("class","btn btn-success");
                $().children('td').eq(1);
            }
        });
    });

});


