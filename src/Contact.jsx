import { useState } from "react";


const Contact = (props) => {
    const [data, setData] = useState({
        fullname:'',
        phone: '',
        email: '',
        msg: '',
    });

    const inputEvent = (event) => {
        const {name, value} = event.target;
        setData((prev) => {
            return {
                ...prev, 
                [name] : value
            }
        })
    }
    
    const formSubmit = (e) => {
        e.preventDefault();
        alert (
            `My name is ${data.fullname}. My mobile number is ${data.phone}. email : ${data.email}. Msg is sent.`
        )
    };

    return (
       <>
        <div className = 'my-5'>
            <h1 className = 'text-center'>Contact US </h1> 
        </div>
        <div className = 'container contact_div'>
            <div className = 'row'>
                <div className = 'col-md-6 col-10 mx-auto'>
                <form onSubmit = {formSubmit}>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Full Name</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" 
                    name = 'fullname'
                    value = {data.fullname}
                    onChange = {inputEvent}
                    placeholder="enter your name"/>
                </div><br/>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Phone</label>
                    <input type="number" class="form-control" id="exampleFormControlInput1" 
                    name = 'phone'
                    value = {data.phone}
                    onChange = {inputEvent}
                    placeholder="Mobile Number"/>
                </div><br/>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" 
                    name = 'email'
                    value = {data.email}
                    onChange = {inputEvent}
                    placeholder="name@example.com"/>
                </div><br/>
                
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                    name = 'msg'
                    value = {data.msg}
                    onChange = {inputEvent}></textarea>
                </div><br/>
                <div class = 'col-12'>
                    <button class = 'btn btn-outline-primary' 

                    type = 'submit'> Submit form </button>
                </div>
                </form>
                </div>
            </div>
        </div>
       </>
    );
}

export default Contact;