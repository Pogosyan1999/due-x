function RegisterValidate(values) {
    let errors = {};
  
    let reg_name_lastName = /^[A-Za-z\s]+$/;
    let email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // let date =/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
    let password =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;



    // firsName validate
    if (!values.firstName.trim()) {
      errors.firstName = "Username requiared";
    } else if (values.firstName.length < 2 || values.firstName.length > 15) {
      errors.firstName =
        "The name must be a minimum of 2 letters and a maximum of 15 letters";
    } else if (!reg_name_lastName.test(values.firstName)) {
      errors.firstName = "Correct your First Name: only letters and spaces.";
    }

    //LastName validate
  
    if (!values.lastName.trim()) {
      errors.lastName = "Lastname requiared";
    } else if (values.lastName.length < 2 || values.lastName.length > 15) {
      errors.lastName =
        "The lastname must be a minimum of 2 letters and a maximum of 15 letters";
    } else if (!reg_name_lastName.test(values.lastName)) {
      errors.lastName = "Correct your Last Name: only letters and spaces.";
    }

    //Email validate
  
    if (!values.email.trim()) {
      errors.email = "Email required";
    } else if (!email.test(values.email)) {
      errors.email = "Email address is invalid";
    }
  
    //Date validate
   
    if (!isNaN(values.date)) {
        errors.date = "Fill in the date";
    }


    //password validate
    if(!values.password.trim()){
      errors.password = "Password required";
    }else if(values.password.length < 6 || values.password.length > 15){
      errors.password = 'Password length must be minimum 6 and maximum 15'
    }else if((!password.test(values.password))){
      errors.password = 'Password must contain uppercase, lowercase, numbers '
    }


    //confirm password validate
    

    if(!values.confirmPassword.trim()){
      errors.confirmPassword = "Confirm Password requared";
    }else if(values.password !== values.confirmPassword){
      errors.confirmPassword = 'Password does not match'
    }


    
  
   
  
    return errors;
  }
  
  export default RegisterValidate;
  