import React, { useState } from 'react';
import styles from './Form.module.css';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    Name: '',
    UserName: '',
    Email: '',
    PhoneNo: '',
    Checkbox: false,
  });
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.Name.length === 0 ||
      formData.UserName.length === 0 ||
      formData.Email.length === 0 ||
      formData.PhoneNo.length === 0 ||
      !formData.Checkbox
    ) {
      setError(true);
    } else {
      localStorage.setItem('UserData', JSON.stringify(formData));
      navigate('/category');
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.super}>
        <h4>Super app</h4>
        <p>Create Your New Account</p>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="Name"
          placeholder="Name"
          value={formData.Name.replace(/[^a-zA-Z]/g, '')}
          onChange={handleChange}
        />
        {error && formData.Name.length === 0 ? (
          <label className={styles.errormessage}>Name is Required</label>
        ) : (
          ' '
        )}
        <input
          type="text"
          name="UserName"
          placeholder="UserName"
          value={formData.UserName}
          onChange={handleChange}
        />
        {error && formData.UserName.length === 0 ? (
          <label className={styles.errormessage}>UserName is Required</label>
        ) : (
          ' '
        )}
        <input
          type="email"
          name="Email"
          placeholder="Email"
          value={formData.Email}
          onChange={handleChange}
        />
        {error && formData.Email.length === 0 ? (
          <label className={styles.errormessage}>Email is Required</label>
        ) : (
          ' '
        )}
        <input
          type="tel"
          maxLength={10}
          name="PhoneNo"
          placeholder="Mobile"
          value={formData.PhoneNo.replace(/[^0-9]/g, '')}
          onChange={handleChange}
        />
        {error && formData.PhoneNo.length === 0 ? (
          <label className={styles.errormessage}>Mobile No. is Required</label>
        ) : (
          ' '
        )}
        <label>
          <input
            type="checkbox"
            name="Checkbox"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.checked })
            }
          />
          <span>Share my registration data with Superapp</span>
          {error && !formData.Checkbox ? (
            <label className={styles.errormessage}>Please check the box</label>
          ) : (
            ' '
          )}
        </label>
        <button>SIGN UP</button>
      </form>
      <div className={styles.footertext}>
        <p>
          By clicking on Sign up. you agree to Superapp{' '}
          <a href="/">Terms and Conditions of Use</a>
        </p>
        <p>
          To learn more about how Superapp collects, uses, shares and protects
          your personal data please head Superapp{' '}
          <a href="/"> Privacy Policy</a>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
