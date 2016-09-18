/**
 * Created by wangjian5 on 2016/9/12.
 */
$(function(){
    var location = window.location.href;
    var href= location+"";
    var href_part=href.split("?");
    var numB=(href_part[1]*1);
//黑名单判别
    $(".nextBtn").click(function(){
        var cardNo = document.getElementById('card_no').value.toUpperCase();
        var valCredit=$(".credit").val();
        $.ajax({
            type: "get",
            url: "/loanapply/validateIdentity.do",
            data:{"idCard":cardNo},
            dataType: "json",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            success: function(data){
                if(data.isBlank=='Y'&& valCredit==4){
                    $(".supplementData").hide();
                    $(".failProduct").show();
                }else {
                    $(".basicInfo").hide();
                    $(".supplementProduct").show();
                }
            }
        });

    });
//查询客户是否新名单
    if(numB==6){
        $.ajax({
            type: "get",
            url: "/loanapply/init.do",
            dataType: "json",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            success: function(data){
                    if(data.number=="1"){
                        $(".basicInfo").show();

                    }

            }
        });
    }else if(numB!=6){
        $.ajax({
            type: "get",
            url: "/loanapply/init.do",
            dataType: "json",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            success: function(data){
                    if(data.number=="1"){
                        $(".basicInfo").show();

                    }

            }
        });
    }


});