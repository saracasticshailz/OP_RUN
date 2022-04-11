// JavaScript Document
jQuery(document).ready(function($) {
    jQuery("#scroll").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
    });
    var characterReg = /^\s*[a-zA-Z\s]+\s*$/;
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var numericReg = /^\d*[0-9](|.\d*[0-9]|,\d*[0-9])?$/;
    if (jQuery('input[name="lead_from"]').length) {
        if (jQuery(window).width() > 767) {
            var device = 'Desktop';
        } else {
            var device = 'Mobile';
        }
        jQuery('input[name="lead_from"]').val(device);
    }
    jQuery("#submitLeadForm").on('click', function() {
        var result = true;
        var focus = false;
        var name = jQuery('#p_user_nm').val();
        var last_name = jQuery('#last_name').val();
        var email = jQuery('#emailid').val();
	var domain = email.substring(email.lastIndexOf("@") +1);
        var mobile = jQuery('#p_user_mob').val();
        var city = jQuery('#city').val();
        var company = jQuery('#company').val();
        //var lat = jQuery('#lat').val();
        //var long = jQuery('#long').val();
       	var query = jQuery('#query').val();
        var ud1 = jQuery('#ud1').val();
        var selectstate = jQuery('#selectstate').val();
        if (!jQuery('#leadForm #p_user_mob').hasClass('verified')) {
            jQuery("#leadForm #send_otp").html('Send OTP');
        }
        jQuery("#leadForm .otp-wrapper").removeClass('active');
        jQuery('#leadForm #p_user_mob').closest('.form-group').find('.error').removeClass('blue');
        if (name == '') {
            jQuery('#leadForm #p_user_nm').closest('.form-group').find('.error').html('The First Name field is required.');
            if (!focus) {
                focus = 'p_user_nm';
            }
            result = false;
        } else if (!characterReg.test(name)) {
            jQuery('#leadForm #p_user_nm').closest('.form-group').find('.error').html('Please Enter a Valid Name');
            if (!focus) {
                focus = 'p_user_nm';
            }
            result = false;
        } else {
            jQuery('#leadForm #p_user_nm').closest('.form-group').find('.error').html('');
        }
        if (last_name == '') {
            jQuery('#leadForm #last_name').closest('.form-group').find('.error').html('The Last Name field is required.');
            if (!focus) {
                focus = 'last_name';
            }
            result = false;
        } else if (!characterReg.test(last_name)) {
            jQuery('#leadForm #last_name').closest('.form-group').find('.error').html('Please Enter a Valid Last Name');
            if (!focus) {
                focus = 'last_name';
            }
            result = false;
        } else {
            jQuery('#leadForm #last_name').closest('.form-group').find('.error').html('');
        }
        if (email == '') {
            jQuery('#leadForm #emailid').closest('.form-group').find('.error').html('The Email field is required.');
            if (!focus) {
                focus = 'emailid';
            }
            result = false;
        } else if (!emailReg.test(email)) {
            jQuery('#leadForm #emailid').closest('.form-group').find('.error').html('Please Enter a Valid Email Address');
            if (!focus) {
                focus = 'emailid';
            }
            result = false;
        }
	/*else if (domain == 'gmail.com' || domain == 'gmail.co.in' || domain == 'yahoo.com' || domain == 'yahoo.co.in' || domain == 'hotmail.com') {
  	 jQuery('#leadForm #emailid').closest('.form-group').find('.error').html('Please Enter Your Company Email Id');

  		 if (!focus) {
     		 focus = 'emailid';
  		 }
  	 result = false;
	
	}*/ else {
            jQuery('#leadForm #emailid').closest('.form-group').find('.error').html('');
        }
        if (mobile == '') {
            jQuery('#leadForm #p_user_mob').closest('.form-group').find('.error').html('The Mobile Number field is required.');
            if (!focus) {
                focus = 'p_user_mob';
            }
            result = false;
        } else if (!numericReg.test(mobile)) {
            jQuery('#leadForm #p_user_mob').closest('.form-group').find('.error').html('Please Enter a Valid Mobile Number');
            if (!focus) {
                focus = 'p_user_mob';
            }
            result = false;
        } else if (mobile.length != 10) {
            jQuery('#leadForm #p_user_mob').closest('.form-group').find('.error').html('Please Enter 10 Digit Mobile Number');
            if (!focus) {
                focus = 'p_user_mob';
            }
            result = false;
        } else if (!jQuery('#p_user_mob').hasClass('verified')) {
            jQuery('#leadForm #p_user_mob').closest('.form-group').find('.error').html('Mobile Number is not verified.');
            if (!focus) {
                focus = 'p_user_mob';
            }
            result = false;
        } else {
            jQuery('#leadForm #p_user_mob').closest('.form-group').find('.error').html('');
        }
        if(selectstate == '-1' || selectstate == null) {
            jQuery('#leadForm #selectstate').closest('.form-group').find('.error').html('The State field is required.');
            if(!focus){ focus = 'selectstate'; }
            result = false;
        }
        else{
            jQuery('#leadForm #selectstate').closest('.form-group').find('.error').html('');
        }
        if (city == '') {
            jQuery('#leadForm #city').closest('.form-group').find('.error').html('The City field is required.');
            if (!focus) {
                focus = 'city';
            }
            result = false;
        } else if (!characterReg.test(city)) {
            jQuery('#leadForm #city').closest('.form-group').find('.error').html('Please Enter a Valid City Name');
            if (!focus) {
                focus = 'city';
            }
            result = false;
        } else {
            jQuery('#leadForm #city').closest('.form-group').find('.error').html('');
        }
        if (company == '') {
            jQuery('#leadForm #company').closest('.form-group').find('.error').html('The Company Name is required.');
            if (!focus) {
                focus = 'company';
            }
            result = false;
        } else {
            jQuery('#leadForm #company').closest('.form-group').find('.error').html('');
        }
        if (query == '') {
            jQuery('#leadForm #query').closest('.form-group').find('.error').html('The Message is required.');
            if (!focus) {
                focus = 'query';
            }
            result = false;
        } else {
            jQuery('#leadForm #query').closest('.form-group').find('.error').html('');
        }

       /* if (query == '') {
            jQuery('#leadForm #query').closest('.form-group').find('.error').html('The Message is required.');
            if (!focus) {
                focus = 'query';
            }
            result = false;
        } else {
            jQuery('#leadForm #query').closest('.form-group').find('.error').html('');
        }*/
        if (result) {
            //Validation Success
            jQuery("#submitLeadForm").attr('disabled', 'disabled');
            if (jQuery('.formloader').length) {
                jQuery('.formloader').removeClass('hidden');
            }

            jQuery.ajax({
                type: 'POST',
                url: 'submitData.php',
                data: {
                    name:name, last_name:last_name, email:email, mobile:mobile, selectstate:selectstate, city:city, company:company, query:query
                },
                cache: false
            })
            .done(function(resp) {
                if (JSON.parse(resp) == 'Success') {
                    jQuery("#leadForm").submit();
                } else{
                    if (jQuery('.formloader').length) {
                        jQuery('.formloader').addClass('hidden');
                    }
                    jQuery("#submitLeadForm").removeAttr('disabled');
                    jQuery("#api_resp").html(JSON.parse(resp));
                }
            })
            .fail(function() {
                if (jQuery('.formloader').length) {
                    jQuery('.formloader').addClass('hidden');
                }
                jQuery("#submitLeadForm").removeAttr('disabled');
                jQuery("#api_resp").html(JSON.parse(resp));
            });
        }
        if (focus) {
            jQuery('#leadForm #' + focus).focus();
        }
        return result;
    });
jQuery("#leadForm #p_user_mob").on('change', function() {
    var mobile = jQuery("#leadForm #p_user_mob").val();
    jQuery("#leadForm #p_user_mob").removeClass('verified');
    jQuery("#leadForm #send_otp").html('Send OTP');
    jQuery("#leadForm .otp-wrapper").removeClass('active');
    jQuery('#leadForm #p_user_mob').closest('.form-group').find('.error').html('');
    jQuery("#leadForm #ud2").val('');
    jQuery("#leadForm #ud3").val('');
    jQuery("#leadForm #send_otp").removeAttr('disabled');
    jQuery.ajax({
        type: 'POST',
        url: 'ajaxMobileChange.php',
        data: {
            mobile: mobile,
        },
        cache: false
    })
    .done(function(resp) {
        if(resp){
            jQuery('#leadForm  #csrf_token').val(resp);
        }
    })
    .fail(function() {});
});
jQuery("#leadForm #send_otp").on('click', function() {
    if (!jQuery('#p_user_mob').hasClass('verified')) {
        var result = true;
        var focus = false;
        var mobile = jQuery('#p_user_mob').val();
        var csrf_token = jQuery('#csrf_token').val();
        jQuery("#leadForm .otp-wrapper").removeClass('active');
        jQuery('#leadForm #p_user_mob').closest('.form-group').find('.error').html('').removeClass('blue');
        jQuery("#leadForm #p_user_mob").removeClass('verified');
        if (mobile == '') {
            jQuery('#leadForm #p_user_mob').closest('.form-group').find('.error').html('The Mobile Number field is required.');
            if (!focus) {
                focus = 'p_user_mob';
            }
            result = false;
        } else if (!numericReg.test(mobile)) {
            jQuery('#leadForm #p_user_mob').closest('.form-group').find('.error').html('Please Enter a Valid Mobile Number.');
            if (!focus) {
                focus = 'p_user_mob';
            }
            result = false;
        } else if (mobile.length != 10) {
            jQuery('#leadForm #p_user_mob').closest('.form-group').find('.error').html('Please Enter 10 Digit Mobile Number.');
            if (!focus) {
                focus = 'p_user_mob';
            }
            result = false;
        } else {
            jQuery("#leadForm #send_otp").html('Sending OTP').attr('disabled','disabled');
            setTimeout(function(){
                var ajxresp = '';
                jQuery.ajax({
                    type: 'POST',
                    url: 'ajaxSendOTP.php',
                    data: {
                        mobile: mobile,
                        csrf_token: csrf_token
                    },
                    cache: false
                })
                .done(function(resp) {
                    ajxresp = resp;
                    if (jQuery.isNumeric(resp)) {
                        jQuery("#leadForm #send_otp").html('Re-Send OTP');
                        jQuery('#leadForm #p_user_mob').closest('.form-group').find('.error').html('OTP Sent on ' + mobile + ' at ' + getTime()).addClass('blue');
                        jQuery("#leadForm #user_otp").val('');
                        jQuery("#leadForm .otp-wrapper").addClass('active');
                        jQuery("#leadForm #send_otp").attr('disabled','disabled');
                        setTimeout(function(){
                            jQuery("#leadForm #send_otp").removeAttr('disabled');
                        }, 10000);
                    }
                    else if(resp == 'ivm'){
                        jQuery("#leadForm #send_otp").html('Send OTP');
                        jQuery('#leadForm #p_user_mob').closest('.form-group').find('.error').html('Invalid mobile number');
                        result = false;
                        setTimeout(function(){
                            jQuery("#leadForm #send_otp").removeAttr('disabled');
                        }, 10000);
                    }
                    else if(resp == 'nh'){
                        jQuery("#leadForm #send_otp").html('Send OTP');
                        jQuery('#leadForm #p_user_mob').closest('.form-group').find('.error').html('You are not a human');
                        result = false;
                        setTimeout(function(){
                            jQuery("#leadForm #send_otp").removeAttr('disabled');
                        }, 10000);
                    }
                    else if(resp == 'ole'){
                        jQuery("#leadForm #send_otp").html('Send OTP');
                        jQuery('#leadForm #p_user_mob').closest('.form-group').find('.error').html('Send OTP limit exceeded, try after some time');
                        jQuery("#leadForm #send_otp").attr('disabled','disabled');
                        result = false;
                    }
                    else {
                        jQuery("#leadForm #send_otp").html('Send OTP');
                        jQuery('#leadForm #p_user_mob').closest('.form-group').find('.error').html('Failed to send OTP');
                        result = false;
                        setTimeout(function(){
                            jQuery("#leadForm #send_otp").removeAttr('disabled');
                        }, 10000);
                    }
                })
                .fail(function() {
                    jQuery("#leadForm #send_otp").html('Send OTP');
                    jQuery('#leadForm #p_user_mob').closest('.form-group').find('.error').html('Failed to send OTP');
                    result = false;
                    setTimeout(function(){
                        jQuery("#leadForm #send_otp").removeAttr('disabled');
                    }, 10000);
                });
            }, 2000);
        }
        if (focus) {
            jQuery('#leadForm #' + focus).focus();
        }
        return result;
    }
});
jQuery("#leadForm #submit_otp").on('click', function() {
    var result = true;
    var focus = false;
    var user_otp = jQuery('#user_otp').val();
    jQuery("#leadForm #p_user_mob").removeClass('verified');
    if (user_otp == '') {
        jQuery('#leadForm #user_otp').closest('.form-group').find('.error').html('The OTP field is required.');
        if (!focus) {
            focus = 'user_otp';
        }
        result = false;
    } else if (!numericReg.test(user_otp)) {
        jQuery('#leadForm #user_otp').closest('.form-group').find('.error').html('Please Enter a Valid OTP.');
        if (!focus) {
            focus = 'user_otp';
        }
        result = false;
    } else if (user_otp.length != 4) {
        jQuery('#leadForm #user_otp').closest('.form-group').find('.error').html('Please Enter 4 Digit OTP.');
        if (!focus) {
            focus = 'user_otp';
        }
        result = false;
    } else {
        jQuery.ajax({
            type: 'POST',
            url: 'ajaxSubmitOTP.php',
            data: {
                user_otp: user_otp
            },
            cache: false
        })
        .done(function(resp) {
            if (resp) {
                jQuery('#leadForm #p_user_mob').closest('.form-group').find('.error').html('');
                jQuery('#leadForm #user_otp').closest('.form-group').find('.error').html('');
                jQuery("#leadForm .otp-wrapper").removeClass('active');
                jQuery("#leadForm #send_otp").html('Verified');
                jQuery("#leadForm #p_user_mob").addClass('verified');
                jQuery("#leadForm #ud3").val('verified');
            } else {
                jQuery('#leadForm #user_otp').closest('.form-group').find('.error').html('Invalid OTP');
                jQuery("#leadForm #ud2").val('');
                jQuery("#leadForm #ud3").val('');
                if (!focus) {
                    focus = 'user_otp';
                }
                result = false;
            }
        })
        .fail(function() {
            jQuery('#leadForm #user_otp').closest('.form-group').find('.error').html('Failed to verify OTP');
            jQuery("#leadForm #ud2").val('');
            jQuery("#leadForm #ud3").val('');
            if (!focus) {
                focus = 'user_otp';
            }
            result = false;
        });
    }
    if (focus) {
        jQuery('#leadForm #' + focus).focus();
    }
    return result;
});
});
jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > 100) {
        jQuery('#scroll').fadeIn();
    } else {
        jQuery('#scroll').fadeOut();
    }
});
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
function getTime() {
    var d = new Date();
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    var s = addZero(d.getSeconds());
    return h + ":" + m + ":" + s;
}
function showPosition() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var lat = position.coords.latitude ;
            var long = position.coords.longitude ;
            jQuery("#lat").val(lat);
            jQuery("#long").val(long);
        /*  var locAPI = "https://maps.googleapis.com/maps/api/geocode/json?latlng="+position.coords.latitude+","+position.coords.longitude+"&key=AIzaSyDTj_5tLG9qVj1VNpdERWYf-nT7NY7bz_M"
            $.ajax({
                url : locAPI,
                success : function(data){
                    console.log(data);
                    var location =  data.results[0].formatted_address;
                    jQuery("#location").val(location);
                    }
                });*/
            });
    } else {
        alert("Sorry, your browser does not support HTML5 geolocation.");
    }
}
window.alert = function() {};
jQuery(window).unbind();
