function validation(){
    var name=document.myform.name.value;
    var DOB=document.myform.dob.value;
    var email=document.myform.mail.value;
    var index=email.indexOf('@');
    var domain=email.split("@")[1];
    var contact=document.myform.contact.value;
    var address=document.myform.address.value;
    var order=document.myform.order.value;
    function len(n){
        var count=0;
         if (n >= 1) ++count;
        while (n / 10 >= 1) {
        n /= 10;
        ++count;
    }
    return count;
    }
    if(name==null||name=="" &&DOB==null||DOB=="" && email==null||email=="" && contact==null||contact=="" && address==null||address=="" && order==null||order==""){
        alert("Fill the order!");
        return false;
    }else if(name==null||name==""){
        alert("Name can't be empty!");
        return false;
    }else if(DOB==null||DOB==""){
        alert("Date of birth has to be filled!");
        return false;
    }else if(email==null||email==""){
            alert("Email can't be empty");
            return false;
        }else if(index<1){
            alert("Provide a valid email id");
            return false
        }else if(domain!="nitk.edu.in"){
            alert("Provide only nitk email id!");
            return false;
        }
    else if(contact==null||contact==""){
        alert("Enter the Phone Number");
        return false;
    }
    else if(len(contact)<10 || len(contact)>10){
        alert("Enter a valid  Contact Number");
        return false;
    }
    else if(address==null||address==""){
        alert("Enter Your Address");
        return false;
    }
    else if(order==null||order==""){
        alert("Enter Your Order!");
        return false;
    }
    else{
        alert("Thank You for Ordering! \n Visit Again");
        return true;
    }

}