$(function(){
    $(".applyBtn").click(function(){
        $(".inputAge").find("#ageError").remove();
        var val = $('.inputAge select option:selected').val();
        if(0 == val)
        {
            var error=$("<p id='ageError' class='error'>请选择年龄段</p>");
            $(".inputAge").append(error);
            $(".inputAge .error").css("display","block")
        }
        var numError=$("form #ageError").length;
        if(numError){
            return false
        }
    });

    $("#nextBtn_bao").click(function(){
        s.linkTrackVars = "eVar75,events";
        s.linkTrackEvents = "event100";
        s.eVar75 = "嘉保贷下一步2";
        s.events = "event100";
        s.tl(this, 'o', 'custom');
        $(".inputOneself").find("#oneselfError").remove();
        var val1 = $('.inputOneself select option:selected').val();
        if(0 == val1)
        {
            var error1=$("<p id='oneselfError' class='error'>请选择</p>");
            $(".inputOneself").append(error1);
            $(".inputOneself .error").css("display","block")
        }

        $(".inputCurrent").find("#currentError").remove();
        var val2 = $('.inputCurrent select option:selected').val();
        if(0 == val2)
        {
            var error2=$("<p id='currentError' class='error'>请选择</p>");
            $(".inputCurrent").append(error2);
            $(".inputCurrent .error").css("display","block")
        }

        $(".inputPayOff").find("#payOffError").remove();
        var val3 = $('.inputPayOff select option:selected').val();
        if(0 == val3)
        {
            var error3=$("<p id='payOffError' class='error'>请选择</p>");
            $(".inputPayOff").append(error3);
            $(".inputPayOff .error").css("display","block")
        }
        $(".inputMode").find("#modeError").remove();
        var val4 = $('.inputMode select option:selected').val();
        if(0 == val4)
        {
            var error4=$("<p id='modeError' class='error'>请选择</p>");
            $(".inputMode").append(error4);
            $(".inputMode .error").css("display","block")
        }

        $(".inputTerm #term").trigger("blur");
        $(".inputPremium #premium").trigger("blur");

        var numbError1=$("#oneselfError").length,numbError2=$("#currentError").length,numbError3=$("#payOffError").length,numbError4=$("#modeError").length,numbError5=$("#termError").length,numbError6=$("#premiumError").length;

        if(numbError1 || numbError2 || numbError3 || numbError4 || numbError5 || numbError6){
            return false
        }else{
            $(".supplementData").hide();
            $(".successful").show();
        }

    });

    $("#nextBtn_ying").click(function(){

        s.linkTrackVars = "eVar75,events";
        s.linkTrackEvents = "event100";
        s.eVar75 = "嘉英贷下一步2";
        s.events = "event100";
        s.tl(this, 'o', 'custom');
        $(".inputSecurity").find("#securityError").remove();
        var val1 = $('.inputSecurity select option:selected').val();
        if(0 == val1)
        {
            var error1=$("<p id='securityError' class='error'>请选择</p>");
            $(".inputSecurity").append(error1);
            $(".inputSecurity .error").css("display","block")
        }

        $(".inputFund").find("#fundError").remove();
        var val2 = $('.inputFund select option:selected').val();
        if(0 == val2)
        {
            var error2=$("<p id='fundError' class='error'>请选择</p>");
            $(".inputFund").append(error2);
            $(".inputFund .error").css("display","block")
        }

        var numbError1=$("#securityError").length,numbError2=$("#fundError").length;
        if(numbError1||numbError2){
            return false
        }else if($(".inputFundYear").css("display")=="block" && $(".inputSecurityYear").css("display")=="block"){
            $(".inputFundYear #fundYear").trigger("blur");
            $(".inputFundNum #fundNum").trigger("blur");
            $(".inputSecurityYear #securityYear").trigger("blur");
            $(".inputSecurityNum #securityNum").trigger("blur");
            var numError11=$("#securityNumError").length;
            var numError12=$("#securityYearError").length;
            var numError13=$("#fundYearError").length;
            var numError14=$("#fundNumError").length;
            if(numError11||numError12||numError13||numError14){
                return false
            }else {
                $(".supplementData").hide();
                $(".successful").show();
            }
        }else if($(".inputSecurityYear").css("display")=="block"){
            $(".inputSecurityYear #securityYear").trigger("blur");
            $(".inputSecurityNum #securityNum").trigger("blur");
            var numError8=$("#securityNumError").length;
            var numError7=$("#securityYearError").length;
            if(numError7||numError8){
                return false
            }else {
                $(".supplementData").hide();
                $(".successful").show();
            }
        }else if($(".inputFundYear").css("display")=="block"){
            $(".inputFundYear #fundYear").trigger("blur");
            $(".inputFundNum #fundNum").trigger("blur");
            var numError9=$("#fundYearError").length;
            var numError10=$("#fundNumError").length;
            if(numError9||numError10){
                return false
            }else {
                $(".supplementData").hide();
                $(".successful").show();
            }
        }else {
            $(".supplementData").hide();
            $(".successful").show();
        }
    });

    $("#nextBtn_fang").click(function(){
        s.linkTrackVars = "eVar75,events";
        s.linkTrackEvents = "event100";
        s.eVar75 = "嘉房贷下一步2";
        s.events = "event100";
        s.tl(this, 'o', 'custom');
        $(".inputHouses").find("#housesError").remove();
        var val1 = $('.inputHouses select option:selected').val();
        if(0 == val1)
        {
            var error1=$("<p id='housesError' class='error'>请选择住房类型</p>");
            $(".inputHouses").append(error1);
            $(".inputHouses .error").css("display","block")
        }

        $(".inputHouseMort").find("#houseMortError").remove();
        var val2 = $('.inputHouseMort select option:selected').val();
        if(0 == val2)
        {
            var error2=$("<p id='houseMortError' class='error'>请选择房按揭情况</p>");
            $(".inputHouseMort").append(error2);
            $(".inputHouseMort .error").css("display","block")
        }

        var numbError1=$("#housesError").length,numbError2=$("#houseMortError").length;
        if(numbError1||numbError2){
            return false
        }else if($(".inputMortgage").css("display")=="block"){
            $(".inputMortgage #mortgage").trigger("blur");
            $(".inputRepayment #repayment").trigger("blur");
            var numError8=$("#mortgageError").length;
            var numError7=$("#repaymentError").length;
            if(numError7||numError8){
                return false
            }else {
                $(".supplementData").hide();
                $(".successful").show();
            }
        }else {
            $(".supplementData").hide();
            $(".successful").show();
        }
    });

    $("#nextBtn_che").click(function(){
        s.linkTrackVars = "eVar75,events";
        s.linkTrackEvents = "event100";
        s.eVar75 = "嘉车贷下一步2";
        s.events = "event100";
        s.tl(this, 'o', 'custom');
        $(".inputOperation").find("#operationError").remove();
        var val1 = $('.inputOperation select option:selected').val();
        if(0 == val1)
        {
            var error1=$("<p id='operationError' class='error'>请选择</p>");
            $(".inputOperation").append(error1);
            $(".inputOperation .error").css("display","block")
        }

        $(".inputCarMort").find("#carMortError").remove();
        var val2 = $('.inputCarMort select option:selected').val();
        if(0 == val2)
        {
            var error2=$("<p id='carMortError' class='error'>请选择</p>");
            $(".inputCarMort").append(error2);
            $(".inputCarMort .error").css("display","block")
        }

        var numbError1=$("#operationError").length,numbError2=$("#carMortError").length;
        if(numbError1||numbError2){
            return false
        }else if(val2==1){
            $(".inputinsurancePolicy #insurancePolicy").trigger("blur");
            $(".inputRepayments #repayments").trigger("blur");

            $(".inputCarLoanType").find("#carLoanTypeError").remove();
            var val3 = $('.inputCarLoanType select option:selected').val();
            if(0 == val3)
            {
                var error3=$("<p id='carLoanTypeError' class='error'>请选择车贷类型</p>");
                $(".inputCarLoanType").append(error3);
                $(".inputCarLoanType .error").css("display","block");
                $(".inputAlreadyRepay,.inputCardInstall,.inputRepayPeriod").hide();
            }else if(val3==1){
                $(".inputAlreadyRepay #alreadyRepay").trigger("blur");
                $(".inputCardInstall #cardInstall").trigger("blur");
                var numError11=$("#alreadyRepayError").length;
                var numError12=$("#cardInstallError").length;
                if(numError11||numError12){
                    return false
                }else {
                    $(".supplementData").hide();
                    $(".successful").show();
                }
            }else if (val3==2){
                $(".inputRepayPeriod #repayPeriod").trigger("blur");
                var numError13=$("#repayPeriodError").length;
                if(numError13){
                    return false
                }else {
                    $(".supplementData").hide();
                    $(".successful").show();
                }

            }
            var numError8=$("#insurancePolicyError").length;
            var numError7=$("#repaymentsError").length;
            var numError9=$("#carLoanTypeError").length;

            if(numError7||numError8||numError9){
                return false
            }else {
                $(".supplementData").hide();
                $(".successful").show();
            }
        }else {
            $(".supplementData").hide();
            $(".successful").show();
        }
    });

    $(".inputCredit,.inputJob,.inputJobType").change(function(){
        $(".inputCredit").find("#creditError").remove();
        var val1 = $('.inputCredit select option:selected').val();
        if(0 == val1)
        {
            var error1=$("<p id='creditError' class='error'>请选择信用情况</p>");
            $(".inputCredit").append(error1);
            $(".inputCredit .error").css("display","block")
        }

        $(".inputJob").find("#jobError").remove();
        var val2 = $('.inputJob select option:selected').val();
        if(0 == val2)
        {
            var error2=$("<p id='jobError' class='error'>请选择职业</p>");
            $(".inputJob").append(error2);
            $(".inputJob .error").css("display","block");
            $(".inputYear,.inputJobType,.inputWorkYear").hide();
            $(".inputJobType").find("#jobTypeError").remove();

        }else if(1==val2){
            $(".inputYear,.inputJobType").show();
        }else if(2==val2){
            $(".inputYear,.inputJobType").hide();
            $(".inputWorkYear").show();
        }else if(3==val2){
            $(".inputYear,.inputJobType,.inputWorkYear").hide();
        }

        $(".inputJobType").find("#jobTypeError").remove();
        var val3 = $('.inputJobType select option:selected').val();
        if(0 == val3)
        {
            var error3=$("<p id='jobTypeError' class='error'>请选择自雇类型</p>");
            $(".inputJobType").append(error3);
            $(".inputJobType .error").css("display","block");

        }

    });

    $(".inputOneself,.inputCurrent,.inputPayOff,.inputMode").change(function(){
        $(".inputOneself").find("#oneselfError").remove();
        var val1 = $('.inputOneself select option:selected').val();
        if(0 == val1)
        {
            var error1=$("<p id='oneselfError' class='error'>请选择</p>");
            $(".inputOneself").append(error1);
            $(".inputOneself .error").css("display","block")
        }

        $(".inputCurrent").find("#currentError").remove();
        var val2 = $('.inputCurrent select option:selected').val();
        if(0 == val2)
        {
            var error2=$("<p id='currentError' class='error'>请选择</p>");
            $(".inputCurrent").append(error2);
            $(".inputCurrent .error").css("display","block")
        }

        $(".inputPayOff").find("#payOffError").remove();
        var val3 = $('.inputPayOff select option:selected').val();
        if(0 == val3)
        {
            var error3=$("<p id='payOffError' class='error'>请选择</p>");
            $(".inputPayOff").append(error3);
            $(".inputPayOff .error").css("display","block")
        }
        $(".inputMode").find("#modeError").remove();
        var val4 = $('.inputMode select option:selected').val();
        if(0 == val4)
        {
            var error4=$("<p id='modeError' class='error'>请选择</p>");
            $(".inputMode").append(error4);
            $(".inputMode .error").css("display","block")
        }



    });

    $(".security,.fund").change(function(){
        $(".inputSecurity").find("#securityError").remove();
        var val1 = $('.inputSecurity select option:selected').val();
        if(0 == val1)
        {
            var error1=$("<p id='securityError' class='error'>请选择</p>");
            $(".inputSecurity").append(error1);
            $(".inputSecurity .error").css("display","block");
            $(".inputSecurityYear,.inputSecurityNum").hide();

        }else if(1 == val1){
            $(".inputSecurityYear,.inputSecurityNum").show();
        }else if(2 == val1){
            $(".inputSecurityYear,.inputSecurityNum").hide();
        }

        $(".inputFund").find("#fundError").remove();
        var val2 = $('.inputFund select option:selected').val();
        if(0 == val2)
        {
            var error2=$("<p id='fundError' class='error'>请选择</p>");
            $(".inputFund").append(error2);
            $(".inputFund .error").css("display","block");
            $(".inputFundYear,.inputFundNum").hide();
        }else if(1 == val2){
            $(".inputFundYear,.inputFundNum").show();
        }else if(2 == val2){
            $(".inputFundYear,.inputFundNum").hide();
        }
    });

    $(".operation,.carMort").change(function(){
        $(".inputOperation").find("#operationError").remove();
        var val1 = $('.inputOperation select option:selected').val();
        if(0 == val1)
        {
            var error1=$("<p id='operationError' class='error'>请选择</p>");
            $(".inputOperation").append(error1);
            $(".inputOperation .error").css("display","block");
        }

        $(".inputCarMort").find("#carMortError").remove();
        var val2 = $('.inputCarMort select option:selected').val();
        if(0 == val2)
        {
            var error2=$("<p id='carMortError' class='error'>请选择</p>");
            $(".inputCarMort").append(error2);
            $(".inputCarMort .error").css("display","block");
            $(".inputinsurancePolicy,.inputRepayments,.inputCarLoanType,.inputAlreadyRepay,.inputCardInstall").hide();
        }else if(1 == val2){
            $(".inputinsurancePolicy,.inputRepayments,.inputCarLoanType").show();
        }else if(2 == val2){
            $(".inputinsurancePolicy,.inputRepayments,.inputCarLoanType,.inputAlreadyRepay,.inputCardInstall").hide();
        }
    });

    $(".inputPremium #premium").blur(function(){
        var $parent=$(this).parent();
        $parent.find("#premiumError").remove();
        if ($(this).is($("#premium"))){
            if (this.value==""){
                var error=$("<p id='premiumError'>请输入年缴纳保费额</p>");
                $parent.append(error)
            }else if (this.value<10000|| this.value>500000){
                var error02=$("<p id='premiumError'>请输入10-50万之间的整数</p>");
                $parent.append(error02)
            }else if(!isNaN(this.value)){
                $parent.find("#premiumError").remove();
            }else {
                var error03=$("<p id='premiumError'>请输入数字</p>");
                $parent.append(error03)
            }
        }
    }).focus(function(){
        $(this).triggerHandler("blur")
    });

    $(".inputTerm #term").blur(function(){
        var $parent=$(this).parent();
        $parent.find("#termError").remove();
        if ($(this).is($("#term"))){
            if (this.value==""){
                var error=$("<p id='termError'>请输入期限</p>");
                $parent.append(error)
            }else if (this.value<12|| this.value>999){
                var error02=$("<p id='termError'>请输入12-999之间的整数</p>");
                $parent.append(error02)
            }else if(!isNaN(this.value)){
                $parent.find("#premiumError").remove();
            }else {
                var error03=$("<p id='termError'>请输入数字</p>");
                $parent.append(error03)
            }
        }
    }).focus(function(){
        $(this).triggerHandler("blur")
    });
    $(".inputYear  #manageYear").blur(function(){
        var $parent=$(this).parent();
        $parent.find("#manageYearError").remove();
        if ($(this).is($("#manageYear"))){
            if (this.value==""){
                var error=$("<p id='manageYearError'>请输入期限</p>");
                $parent.append(error)
            }else if (this.value<12|| this.value>999){
                var error02=$("<p id='manageYearError'>请输入12-999之间的整数</p>");
                $parent.append(error02)
            }else if(!isNaN(this.value)){
                $parent.find("#manageYearError").remove();
            }else {
                var error03=$("<p id='manageYearError'>请输入数字</p>");
                $parent.append(error03)
            }
        }
    }).focus(function(){
        $(this).triggerHandler("blur")
    });
    $(".inputWorkYear  #workYear").blur(function(){
        var $parent=$(this).parent();
        $parent.find("#workYearError").remove();
        if ($(this).is($("#workYear"))){
            if (this.value==""){
                var error=$("<p id='workYearError'>请输入期限</p>");
                $parent.append(error)
            }else if (this.value<12|| this.value>999){
                var error02=$("<p id='workYearError'>请输入12-999之间的整数</p>");
                $parent.append(error02)
            }else if(!isNaN(this.value)){
                $parent.find("#workYearError").remove();
            }else {
                var error03=$("<p id='workYearError'>请输入数字</p>");
                $parent.append(error03)
            }
        }
    }).focus(function(){
        $(this).triggerHandler("blur")
    });
    $(".inputSecurityYear  #securityYear").blur(function(){
        var $parent=$(this).parent();
        $parent.find("#securityYearError").remove();
        if ($(this).is($("#securityYear"))){
            if (this.value==""){
                var error=$("<p id='securityYearError'>请输入期限</p>");
                $parent.append(error)
            }else if (this.value<12|| this.value>999){
                var error02=$("<p id='securityYearError'>请输入12-999之间的整数</p>");
                $parent.append(error02)
            }else if(!isNaN(this.value)){
                $parent.find("#securityYearError").remove();
            }else {
                var error03=$("<p id='securityYearError'>请输入数字</p>");
                $parent.append(error03)
            }
        }
    }).focus(function(){
        $(this).triggerHandler("blur")
    });
    $(".inputSecurityNum  #securityNum").blur(function(){
        var $parent=$(this).parent();
        $parent.find("#securityNumError").remove();
        if ($(this).is($("#securityNum"))){
            if (this.value==""){
                var error=$("<p id='securityNumError'>请输入基数</p>");
                $parent.append(error)
            }else if (this.value<12|| this.value>999){
                var error02=$("<p id='securityNumError'>请输入12-999之间的整数</p>");
                $parent.append(error02)
            }else if(!isNaN(this.value)){
                $parent.find("#securityNumError").remove();
            }else {
                var error03=$("<p id='securityNumError'>请输入数字</p>");
                $parent.append(error03)
            }
        }
    }).focus(function(){
        $(this).triggerHandler("blur")
    });
    $(".inputFundYear #fundYear").blur(function(){
        var $parent=$(this).parent();
        $parent.find("#fundYearError").remove();
        if ($(this).is($("#fundYear"))){
            if (this.value==""){
                var error=$("<p id='fundYearError'>请输入期限</p>");
                $parent.append(error)
            }else if (this.value<12|| this.value>999){
                var error02=$("<p id='fundYearError'>请输入12-999之间的整数</p>");
                $parent.append(error02)
            }else if(!isNaN(this.value)){
                $parent.find("#securityNumError").remove();
            }else {
                var error03=$("<p id='fundYearError'>请输入数字</p>");
                $parent.append(error03)
            }
        }
    }).focus(function(){
        $(this).triggerHandler("blur")
    });
    $(".inputFundNum #fundNum").blur(function(){
        var $parent=$(this).parent();
        $parent.find("#fundNumError").remove();
        if ($(this).is($("#fundNum"))){
            if (this.value==""){
                var error=$("<p id='fundNumError'>请输入基数</p>");
                $parent.append(error)
            }else if (this.value<12|| this.value>999){
                var error02=$("<p id='fundNumError'>请输入12-999之间的整数</p>");
                $parent.append(error02)
            }else if(!isNaN(this.value)){
                $parent.find("#fundNumError").remove();
            }else {
                var error03=$("<p id='fundNumError'>请输入数字</p>");
                $parent.append(error03)
            }
        }
    }).focus(function(){
        $(this).triggerHandler("blur")
    });
    $(".inputHouseMort,.inputHouses").change(function(){
        $(".inputHouseMort").find("#houseMortError").remove();
        var val2 = $('.inputHouseMort select option:selected').val();
        if(0 == val2)
        {
            var error2=$("<p id='houseMortError' class='error'>请选择按揭情况</p>");
            $(".inputHouseMort").append(error2);
            $(".inputHouseMort .error").css("display","block");
            $(".inputMortgage,.inputRepayment").hide();

        }else if(1==val2){
            $(".inputMortgage,.inputRepayment").show();
        }else if(2==val2){
            $(".inputMortgage,.inputRepayment").hide();

        }


        $(".inputHouses").find("#housesError").remove();
        var val1 = $('.inputHouses select option:selected').val();
        if(0 == val1)
        {
            var error1=$("<p id='housesError' class='error'>请选择住房类型</p>");
            $(".inputHouses").append(error1);
            $(".inputHouses .error").css("display","block");
        }
    });

    $(".inputMortgage #mortgage").blur(function(){
        var $parent=$(this).parent();
        $parent.find("#mortgageError").remove();
        if ($(this).is($("#mortgage"))){
            if (this.value==""){
                var error=$("<p id='mortgageError'>请输入按揭总期数</p>");
                $parent.append(error)
            }else if (this.value<12|| this.value>999){
                var error02=$("<p id='mortgageError'>请输入12-999之间的整数</p>");
                $parent.append(error02)
            }else if(!isNaN(this.value)){
                $parent.find("#mortgageError").remove();
            }else {
                var error03=$("<p id='mortgageError'>请输入数字</p>");
                $parent.append(error03)
            }
        }
    }).focus(function(){
        $(this).triggerHandler("blur")
    });
    $(".inputRepayment #repayment").blur(function(){
        var $parent=$(this).parent();
        $parent.find("#repaymentError").remove();
        if ($(this).is($("#repayment"))){
            if (this.value==""){
                var error=$("<p id='repaymentError'>请输入已还款期数</p>");
                $parent.append(error)
            }else if (this.value<12|| this.value>999){
                var error02=$("<p id='repaymentError'>请输入12-999之间的整数</p>");
                $parent.append(error02)
            }else if(!isNaN(this.value)){
                $parent.find("#repaymentError").remove();
            }else {
                var error03=$("<p id='repaymentError'>请输入数字</p>");
                $parent.append(error03)
            }
        }
    }).focus(function(){
        $(this).triggerHandler("blur")
    });
    $(".inputinsurancePolicy #insurancePolicy").blur(function(){
        var $parent=$(this).parent();
        $parent.find("#insurancePolicyError").remove();
        if ($(this).is($("#insurancePolicy"))){
            if (this.value==""){
                var error=$("<p id='insurancePolicyError'>请输入发放间隔</p>");
                $parent.append(error)
            }else if (this.value<12|| this.value>999){
                var error02=$("<p id='insurancePolicyError'>请输入12-999之间的整数</p>");
                $parent.append(error02)
            }else if(!isNaN(this.value)){
                $parent.find("#insurancePolicyError").remove();
            }else {
                var error03=$("<p id='insurancePolicyError'>请输入数字</p>");
                $parent.append(error03)
            }
        }
    }).focus(function(){
        $(this).triggerHandler("blur")
    });
    $(".inputRepayments #repayments").blur(function(){
        var $parent=$(this).parent();
        $parent.find("#repaymentsError").remove();
        if ($(this).is($("#repayments"))){
            if (this.value==""){
                var error=$("<p id='repaymentsError'>请输入还款月供</p>");
                $parent.append(error)
            }else if (this.value<12|| this.value>999){
                var error02=$("<p id='repaymentsError'>请输入12-999之间的整数</p>");
                $parent.append(error02)
            }else if(!isNaN(this.value)){
                $parent.find("#repaymentsError").remove();
            }else {
                var error03=$("<p id='repaymentsError'>请输入数字</p>");
                $parent.append(error03)
            }
        }
    }).focus(function(){
        $(this).triggerHandler("blur")
    });
    $(".carLoan").change(function(){
        $(".inputCarLoanType").find("#carLoanTypeError").remove();
        var val2 = $('.inputCarLoanType select option:selected').val();
        if(0 == val2)
        {
            var error2=$("<p id='carLoanTypeError' class='error'>请选择车贷类型</p>");
            $(".inputCarLoanType").append(error2);
            $(".inputCarLoanType .error").css("display","block");
            $(".inputAlreadyRepay,.inputCardInstall,.inputRepayPeriod").hide();

        }else if(1==val2){
            $(".inputAlreadyRepay,.inputCardInstall").show();
            $(".inputRepayPeriod").hide();
        }else if(2==val2){
            $(".inputAlreadyRepay,.inputCardInstall").hide();
            $(".inputRepayPeriod").show();
        }


        $(".inputHouses").find("#housesError").remove();
        var val1 = $('.inputHouses select option:selected').val();
        if(0 == val1)
        {
            var error1=$("<p id='housesError' class='error'>请选择住房类型</p>");
            $(".inputHouses").append(error1);
            $(".inputHouses .error").css("display","block");
        }
    });
    $(".inputAlreadyRepay #alreadyRepay").blur(function(){
        var $parent=$(this).parent();
        $parent.find("#alreadyRepayError").remove();
        if ($(this).is($("#alreadyRepay"))){
            if (this.value==""){
                var error=$("<p id='alreadyRepayError'>请输入已还款期限</p>");
                $parent.append(error)
            }else if (this.value<12|| this.value>999){
                var error02=$("<p id='alreadyRepayError'>请输入12-999之间的整数</p>");
                $parent.append(error02)
            }else if(!isNaN(this.value)){
                $parent.find("#alreadyRepayError").remove();
            }else {
                var error03=$("<p id='alreadyRepayError'>请输入数字</p>");
                $parent.append(error03)
            }
        }
    }).focus(function(){
        $(this).triggerHandler("blur")
    });
    $(".inputCardInstall #cardInstall").blur(function(){
        var $parent=$(this).parent();
        $parent.find("#cardInstallError").remove();
        if ($(this).is($("#cardInstall"))){
            if (this.value==""){
                var error=$("<p id='cardInstallError'>请输入分期期限</p>");
                $parent.append(error)
            }else if (this.value<12|| this.value>999){
                var error02=$("<p id='cardInstallError'>请输入12-999之间的整数</p>");
                $parent.append(error02)
            }else if(!isNaN(this.value)){
                $parent.find("#cardInstallError").remove();
            }else {
                var error03=$("<p id='cardInstallError'>请输入数字</p>");
                $parent.append(error03)
            }
        }
    }).focus(function(){
        $(this).triggerHandler("blur")
    });
    $(".inputRepayPeriod #repayPeriod").blur(function(){
        var $parent=$(this).parent();
        $parent.find("#repayPeriodError").remove();
        if ($(this).is($("#repayPeriod"))){
            if (this.value==""){
                var error=$("<p id='repayPeriodError'>请输入已还款期限</p>");
                $parent.append(error)
            }else if (this.value<12|| this.value>999){
                var error02=$("<p id='repayPeriodError'>请输入12-999之间的整数</p>");
                $parent.append(error02)
            }else if(!isNaN(this.value)){
                $parent.find("#repayPeriodError").remove();
            }else {
                var error03=$("<p id='repayPeriodError'>请输入数字</p>");
                $parent.append(error03)
            }
        }
    }).focus(function(){
        $(this).triggerHandler("blur")
    });

    var oLis=$(".proApplyBtn");
    for(var index=0;index<oLis.length;index++){
        oLis[index].onclick=function(){
            showID=this.id;
            if(showID=="btn_bao"){
                $(".nextBtn").click(function(){
                    $(".inputCredit").find("#creditError").remove();
                    var val1 = $('.inputCredit select option:selected').val();
                    if(0 == val1)
                    {
                        var error1=$("<p id='creditError' class='error'>请选择信用情况</p>");
                        $(".inputCredit").append(error1);
                        $(".inputCredit .error").css("display","block")
                    }

                    $(".inputJob").find("#jobError").remove();
                    var val2 = $('.inputJob select option:selected').val();
                    if(0 == val2)
                    {
                        var error2=$("<p id='jobError' class='error'>请选择职业</p>");
                        $(".inputJob").append(error2);
                        $(".inputJob .error").css("display","block")
                    }


                    var numError1=$("#creditError").length,numError2=$("#jobError").length,numError3=$("#codeError");

                    if(numError1 || numError2||numError3.css("display")=="block"){
                        return false
                    }else if($(".inputJobType").css("display")=="block"){
                        $(".inputYear #manageYear").trigger("blur");

                        $(".inputJobType").find("#jobTypeError").remove();
                        var val3 = $('.inputJobType select option:selected').val();
                        if(0 == val3)
                        {
                            var error3=$("<p id='jobTypeError' class='error'>请选择自雇类型</p>");
                            $(".inputJobType").append(error3);
                            $(".inputJobType .error").css("display","block");

                        }
                        var numError4=$("#jobTypeError").length,numError5=$("#manageYearError").length;
                        if(numError4||numError5){
                            return false
                        }else{
                            $(".basicInfo").hide();
                            $(".loan_bao").show();
                        }

                    }else if($(".inputWorkYear").css("display")=="block"){
                        $(".inputWorkYear #workYear").trigger("blur");
                        var numError6=$("#workYearError").length;
                        if(numError6){
                            return false
                        }else{
                            $(".basicInfo").hide();
                            $(".loan_bao").show();
                        }
                    }

                    else{
                        $(".basicInfo").hide();
                        $(".loan_bao").show();
                    }



                });
                s.linkTrackVars = "eVar75,events";
                s.linkTrackEvents = "event100";
                s.eVar75 = "嘉保贷选择";
                s.events = "event100";
                s.tl(this, 'o', 'custom');
            }else if(showID=="btn_ying"){
                $(".nextBtn").click(function(){
                    $(".inputCredit").find("#creditError").remove();
                    var val1 = $('.inputCredit select option:selected').val();
                    if(0 == val1)
                    {
                        var error1=$("<p id='creditError' class='error'>请选择信用情况</p>");
                        $(".inputCredit").append(error1);
                        $(".inputCredit .error").css("display","block")
                    }

                    $(".inputJob").find("#jobError").remove();
                    var val2 = $('.inputJob select option:selected').val();
                    if(0 == val2)
                    {
                        var error2=$("<p id='jobError' class='error'>请选择职业</p>");
                        $(".inputJob").append(error2);
                        $(".inputJob .error").css("display","block")
                    }


                    var numError1=$("#creditError").length,numError2=$("#jobError").length,numError3=$("#codeError");

                    if(numError1 || numError2||numError3.css("display")=="block"){
                        return false
                    }else if($(".inputJobType").css("display")=="block"){
                        $(".inputYear #manageYear").trigger("blur");

                        $(".inputJobType").find("#jobTypeError").remove();
                        var val3 = $('.inputJobType select option:selected').val();
                        if(0 == val3)
                        {
                            var error3=$("<p id='jobTypeError' class='error'>请选择自雇类型</p>");
                            $(".inputJobType").append(error3);
                            $(".inputJobType .error").css("display","block");

                        }
                        var numError4=$("#jobTypeError").length,numError5=$("#manageYearError").length;
                        if(numError4||numError5){
                            return false
                        }else{
                            $(".basicInfo").hide();
                            $(".loan_ying").show();
                        }

                    }else if($(".inputWorkYear").css("display")=="block"){
                        $(".inputWorkYear #workYear").trigger("blur");
                        var numError6=$("#workYearError").length;
                        if(numError6){
                            return false
                        }else{
                            $(".basicInfo").hide();
                            $(".loan_ying").show();
                        }
                    }

                    else{
                        $(".basicInfo").hide();
                        $(".loan_ying").show();
                    }



                });
                s.linkTrackVars = "eVar75,events";
                s.linkTrackEvents = "event100";
                s.eVar75 = "嘉英贷选择";
                s.events = "event100";
                s.tl(this, 'o', 'custom');
            }else if(showID=="btn_fang"){
                $(".nextBtn").click(function(){
                    $(".inputCredit").find("#creditError").remove();
                    var val1 = $('.inputCredit select option:selected').val();
                    if(0 == val1)
                    {
                        var error1=$("<p id='creditError' class='error'>请选择信用情况</p>");
                        $(".inputCredit").append(error1);
                        $(".inputCredit .error").css("display","block")
                    }

                    $(".inputJob").find("#jobError").remove();
                    var val2 = $('.inputJob select option:selected').val();
                    if(0 == val2)
                    {
                        var error2=$("<p id='jobError' class='error'>请选择职业</p>");
                        $(".inputJob").append(error2);
                        $(".inputJob .error").css("display","block")
                    }


                    var numError1=$("#creditError").length,numError2=$("#jobError").length,numError3=$("#codeError");

                    if(numError1 || numError2||numError3.css("display")=="block"){
                        return false
                    }else if($(".inputJobType").css("display")=="block"){
                        $(".inputYear #manageYear").trigger("blur");

                        $(".inputJobType").find("#jobTypeError").remove();
                        var val3 = $('.inputJobType select option:selected').val();
                        if(0 == val3)
                        {
                            var error3=$("<p id='jobTypeError' class='error'>请选择自雇类型</p>");
                            $(".inputJobType").append(error3);
                            $(".inputJobType .error").css("display","block");

                        }
                        var numError4=$("#jobTypeError").length,numError5=$("#manageYearError").length;
                        if(numError4||numError5){
                            return false
                        }else{
                            $(".basicInfo").hide();
                            $(".loan_fang").show();
                        }

                    }else if($(".inputWorkYear").css("display")=="block"){
                        $(".inputWorkYear #workYear").trigger("blur");
                        var numError6=$("#workYearError").length;
                        if(numError6){
                            return false
                        }else{
                            $(".basicInfo").hide();
                            $(".loan_fang").show();
                        }
                    }

                    else{
                        $(".basicInfo").hide();
                        $(".loan_fang").show();
                    }



                });
                s.linkTrackVars = "eVar75,events";
                s.linkTrackEvents = "event100";
                s.eVar75 = "嘉房贷选择";
                s.events = "event100";
                s.tl(this, 'o', 'custom');
            }else if(showID=="btn_che"){
                $(".nextBtn").click(function(){
                    $(".inputCredit").find("#creditError").remove();
                    var val1 = $('.inputCredit select option:selected').val();
                    if(0 == val1)
                    {
                        var error1=$("<p id='creditError' class='error'>请选择信用情况</p>");
                        $(".inputCredit").append(error1);
                        $(".inputCredit .error").css("display","block")
                    }

                    $(".inputJob").find("#jobError").remove();
                    var val2 = $('.inputJob select option:selected').val();
                    if(0 == val2)
                    {
                        var error2=$("<p id='jobError' class='error'>请选择职业</p>");
                        $(".inputJob").append(error2);
                        $(".inputJob .error").css("display","block")
                    }


                    var numError1=$("#creditError").length,numError2=$("#jobError").length,numError3=$("#codeError");

                    if(numError1 || numError2||numError3.css("display")=="block"){
                        return false
                    }else if($(".inputJobType").css("display")=="block"){
                        $(".inputYear #manageYear").trigger("blur");

                        $(".inputJobType").find("#jobTypeError").remove();
                        var val3 = $('.inputJobType select option:selected').val();
                        if(0 == val3)
                        {
                            var error3=$("<p id='jobTypeError' class='error'>请选择自雇类型</p>");
                            $(".inputJobType").append(error3);
                            $(".inputJobType .error").css("display","block");

                        }
                        var numError4=$("#jobTypeError").length,numError5=$("#manageYearError").length;
                        if(numError4||numError5){
                            return false
                        }else{
                            $(".basicInfo").hide();
                            $(".loan_che").show();
                        }

                    }else if($(".inputWorkYear").css("display")=="block"){
                        $(".inputWorkYear #workYear").trigger("blur");
                        var numError6=$("#workYearError").length;
                        if(numError6){
                            return false
                        }else{
                            $(".basicInfo").hide();
                            $(".loan_che").show();
                        }
                    }

                    else{
                        $(".basicInfo").hide();
                        $(".loan_che").show();
                    }



                });
                s.linkTrackVars = "eVar75,events";
                s.linkTrackEvents = "event100";
                s.eVar75 = "嘉车贷选择";
                s.events = "event100";
                s.tl(this, 'o', 'custom');
            }

        }
    }
    var btnnext=$(".nextBtn");
    var btnnext2=$(".nextBtn2");
    btnnext.click(function(){
        if(showID=="btn_bao"){
            s.linkTrackVars = "eVar75,events";
            s.linkTrackEvents = "event100";
            s.eVar75 = "嘉保贷下一步";
            s.events = "event100";
            s.tl(this, 'o', 'custom');
        }else if(showID=="btn_ying"){
            s.linkTrackVars = "eVar75,events";
            s.linkTrackEvents = "event100";
            s.eVar75 = "嘉英贷下一步";
            s.events = "event100";
            s.tl(this, 'o', 'custom');
        }else if(showID=="btn_fang"){
            s.linkTrackVars = "eVar75,events";
            s.linkTrackEvents = "event100";
            s.eVar75 = "嘉房贷下一步";
            s.events = "event100";
            s.tl(this, 'o', 'custom');
        }else if(showID=="btn_che"){
            s.linkTrackVars = "eVar75,events";
            s.linkTrackEvents = "event100";
            s.eVar75 = "嘉车贷下一步";
            s.events = "event100";
            s.tl(this, 'o', 'custom');
        }
    });
    btnnext2.click(function(){
        if(showID=="btn_bao"){
            s.linkTrackVars = "eVar75,events";
            s.linkTrackEvents = "event100";
            s.eVar75 = "嘉保贷下一步2";
            s.events = "event100";
            s.tl(this, 'o', 'custom');
        }else if(showID=="btn_ying"){
            s.linkTrackVars = "eVar75,events";
            s.linkTrackEvents = "event100";
            s.eVar75 = "嘉英贷下一步2";
            s.events = "event100";
            s.tl(this, 'o', 'custom');
        }else if(showID=="btn_fang"){
            s.linkTrackVars = "eVar75,events";
            s.linkTrackEvents = "event100";
            s.eVar75 = "嘉房贷下一步2";
            s.events = "event100";
            s.tl(this, 'o', 'custom');
        }else if(showID=="btn_che"){
            s.linkTrackVars = "eVar75,events";
            s.linkTrackEvents = "event100";
            s.eVar75 = "嘉车贷下一步2";
            s.events = "event100";
            s.tl(this, 'o', 'custom');
        }
    });

    var btnFail=$(".againCon ul.againBtn li");
    btnFail.click(function(){
        var nubs=$(this).index();
        if(nubs==0){
            s.linkTrackVars = "eVar75,events";
            s.linkTrackEvents = "event100";
            s.eVar75 = "嘉保贷重新申请";
            s.events = "event100";
            s.tl(this, 'o', 'custom');
        }else if(nubs==1){
            s.linkTrackVars = "eVar75,events";
            s.linkTrackEvents = "event100";
            s.eVar75 = "嘉英贷重新申请";
            s.events = "event100";
            s.tl(this, 'o', 'custom');
        }else if(nubs==2){
            s.linkTrackVars = "eVar75,events";
            s.linkTrackEvents = "event100";
            s.eVar75 = "嘉房贷重新申请";
            s.events = "event100";
            s.tl(this, 'o', 'custom');
        }else if(nubs==3){
            s.linkTrackVars = "eVar75,events";
            s.linkTrackEvents = "event100";
            s.eVar75 = "嘉车贷重新申请";
            s.events = "event100";
            s.tl(this, 'o', 'custom');
        }
        $(".applyLoan").show();
        $(".successful,.supplementData,.failProduct").hide();
    });

    $(".suppleBtnLeft a.supple").click(function(){
        s.linkTrackVars = "eVar75,events";
        s.linkTrackEvents = "event100";
        s.eVar75 = "继续补充资料";
        s.events = "event100";
        s.tl(this, 'o', 'custom');
    })



})
