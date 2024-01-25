import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExample() {
    const [formData, setFormData] = useState({
        contactValue: '',
        emailValue: '',
        passwordValue: '',
    });

    const [errorFormData, setErrorFormData] = useState({
        contactValue: '',
        emailValue: '',
        passwordValue: '',
    })

    const handleContactChange = (e) => {
        const {name, value} = e.target

        setFormData((prevState) => ({
            ...prevState,
            [name] : value,               
        }))
        
        setErrorFormData((prevError) => ({
            ...prevError,
            [`${name}Error`] : '',
        }))
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();

    let isValid = true;
    const newErrors = {};

    if (!formData?.contactValue) {
        newErrors.contactError = 'Contact is required!';
        isValid = false;
    }

    if (!formData?.emailValue) {
        newErrors.emailError = 'Email is required!';
        isValid = false;
    }

    if (!formData?.passwordValue) {
        newErrors.passwordError = 'Password is required!';
        isValid = false;
    }

    if (!isValid) {
        setErrorFormData(newErrors);
    }
    }

  return (
    <div className='formParent'>
        <Form style={{width: '60%'}}>
        <Form.Group className="mb-3" controlId="formBasicContact">
            <Form.Label>Contact</Form.Label>
            <Form.Control className={`${!formData?.contactValue ? 'inputError' : ""}`} type="number" placeholder="Contact" name='contactValue' value={formData?.contactValue} onChange={(e) => handleContactChange(e)}/>

            {!formData?.contactValue && <Form.Text className="text-muted errorMsg">
                {errorFormData?.contactError}
            </Form.Text>}

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control className={`${!formData?.emailValue ? 'inputError' : ""}`} type="email" placeholder="Enter email" name='emailValue' value={formData?.emailValue} onChange={(e) => handleContactChange(e)}/>

            {!formData?.emailValue && <Form.Text className="text-muted errorMsg">
                {errorFormData?.emailError}
            </Form.Text>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control className={`${!formData?.passwordValue ? 'inputError' : ""}`} type="password" placeholder="Password" name='passwordValue' value={formData?.passwordValue} onChange={(e) => handleContactChange(e)}/>
        </Form.Group>

        {!formData?.passwordValue && <Form.Text className="text-muted errorMsg">
                {errorFormData?.passwordError}
            </Form.Text>}

            <br />

        <Button className='mt-5' variant="primary" type="submit" onClick={(e) => handleSubmitForm(e)}>
            Submit
        </Button>
        </Form>
    </div>
  );
}

export default BasicExample;