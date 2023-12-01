import { useState } from "react";

export default function AuthPage() {
  const [countryCode, setCountryCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verifyPage, setVerifyPage] = useState(false);

  const handleSubmit = () => {
    setVerifyPage(true);
  };
  return (
    <>
      {verifyPage ? (
        <div>
          <p>We have sent the code to your Phone Number</p>
          <input type="number"></input>
          <button onClick={() => setVerifyPage(false)}>Back</button>
        </div>
      ) : (
        <div id="auth">
          <div className="wrapper">
            <div className="logo">
              <img src="/src/images/logo.png" />
            </div>
            <div className="name">
              <h1>ChatEase</h1>
            </div>
            <div className="instruction">
              <p>
                Please confirm your country code and enter your phone number
              </p>
            </div>
            <div className="inputForm">
              <select
                onChange={(e) => setCountryCode(e.target.value)}
                value={countryCode}
              >
                <option value="">Select Country</option>
                <option value="+60">Malaysia</option>
                <option value="+44">United Kingdom</option>
                {/* Add more countries... */}
              </select>

              <input
                type="tel"
                placeholder="Enter Phone Number"
                defaultValue={countryCode}
                // value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />

              <button onClick={handleSubmit}>Next</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
