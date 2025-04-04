import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

function ReCaptcha() {
  const SITE_KEY = "6LefOworAAAAANcZzZzDOb8SNCy0gNomopjCLMnM";
  console.log(SITE_KEY, 'your site key ');
  
	const [captchaValue, setCaptchaValue] = useState(null);
  
	const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
    console.log("Captcha value:", value);
  };
	const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("Please verify you are human!");
      return;
    }

    // Proceed with form submission (API, Firebase, etc.)
    console.log("Form submitted!");
  };
	return (
		<div className="recaptcha-container">
			<ReCAPTCHA
        state={captchaValue}
        sitekey={SITE_KEY}
        onChange={handleCaptchaChange}
      />
		</div>
	)
}

export default ReCaptcha