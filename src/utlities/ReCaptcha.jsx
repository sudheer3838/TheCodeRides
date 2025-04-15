import React, { useState, useRef, forwardRef, useImperativeHandle } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ReCaptcha = forwardRef(({ setVerified, onVerify }, ref) => {
  const recaptchaRef = useRef();
  const SITE_KEY = "6LefOworAAAAANcZzZzDOb8SNCy0gNomopjCLMnM";

  const [captchaValue, setCaptchaValue] = useState(null);

  const handleChange = (value) => {
    setCaptchaValue(value);
    const isValid = !!value;
    setVerified(isValid);
    if (isValid && typeof onVerify === "function") {
      onVerify(); // close modal or perform success action
    }
  };

  useImperativeHandle(ref, () => ({
    resetCaptcha: () => {
      recaptchaRef.current?.reset();
      setCaptchaValue(null);
      setVerified(false);
    },
  }));

  return (
    <div className="recaptcha-container mt-3">
      <ReCAPTCHA
        sitekey={SITE_KEY}
        onChange={handleChange}
        ref={recaptchaRef}
      />
    </div>
  );
});

export default ReCaptcha;
