import { useState } from "react";

export const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.includes("@")) newErrors.email = "Invalid email format";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    setErrors(newErrors);
    // Return true if no errors exist
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formData);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
        {errors.name && <p>{errors.name}</p>}
        {/* Email Field */}
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
        {errors.email && <p>{errors.email}</p>}
        {/* Address Field */}
        <label>Address:</label>
        <textarea name="address" value={formData.address} onChange={handleChange} placeholder="Enter your address" />
        {errors.address && <p>{errors.address}</p>}
        {/* Submit Button */}
        <button type="submit">Checkout</button>
      </form>
    </>
  );
};
