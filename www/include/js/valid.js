$(document).ready(function () {
  $('form').each(function () {
    $(this).validate({
      rules: {
        employee_name: {
          required: true,
        },
        email: {
          required: true,
          email: true,
			
        },
        franchisee_phone: {
          required: true,
          digits: true,
          minlength: 10,
          maxlength: 10,
        },
        empcontact: {
          required: true,
          digits: true,
          minlength: 10,
          maxlength: 10,
        },
        mobile: {
          required: true,
          digits: true,
          minlength: 10,
          maxlength: 10,
        },
        project: {
          required: true,
        },
        comment: {
          required: true,
        },
        store_code: {
          required: true,
        } 
      },
      messages: {
        employee_name: {
          required: "Please Enter Employee Name",
        },
        email: {
          required: "Please enter your email address",
          email: "Please enter a VALID email address",
        },
        mobile: {
          required: "Please enter VALID no",
          digits: "Phone should be number format only",
          minlength: "Phone No should be minimum 10 digit",
          maxlength: "Phone No should be maximum 10 digit",
        },
        phone_lead: {
          required: "Please enter VALID no",
          digits: "Phone should be number format only",
          minlength: "Phone No should be minimum 10 digit",
          maxlength: "Phone No should be maximum 10 digit",
        } ,
        project: {
          required: "Please select project name",
        },
        comment: {
          required: "Please enter your comment",
        },
        store_code: {
          required: "Please enter store code",
        }  
      },
      submitHandler: function (form) {
        form.submit();
      },
    });
  });
});
