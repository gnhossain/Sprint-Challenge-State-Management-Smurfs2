import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";

const SmurfForm = ({ status }) => {

    const [smurf, setSmurf] = useState([]);

    useEffect( () => {
        if (status) {
            setSmurf([...smurf, status]);
        }
    }, [status]);

    return (
        <div className='smurf-form'>
            <h3>Add a Smurf!</h3>
            <Form>
                <Field type="text" name="name" placeholder="Name" />

                <Field type="text" name="age" placeholder="Age" />

                <Field type="text" name="height" placeholder="Height" />

                <button type='submit' 
                    onClick={()=> window.location.reload()}>
                    Submit!</button>
            </Form>
        </div>
    )
}

  const FormikUserForm = withFormik({

    mapPropsToValues({ name, age, height}) {
      return {
        name: name || "",
        age: age || '',
        height: height || "",
        id: Date.now(),
      };
    },
  
    handleSubmit(values, { setStatus }) {

    axios
      .post("http://localhost:3333/smurfs", values)
      .then(res => {
        setStatus(res.data);
      })
      .catch(err => console.log(err.response));
  }

  })(SmurfForm);
  
  export default FormikUserForm;

