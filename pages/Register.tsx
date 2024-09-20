import React from 'react';
import { useState } from 'react';
import { IonPage, IonContent, IonAvatar } from '@ionic/react';
import { IonBackButton, IonButtons, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory } from "react-router-dom";
import './Register.css'; // Assuming you save the CSS as Register.css

interface RegisterProps {
    setIsRegisteredIn: (status: boolean) => void; // Prop to set login status
  }

const Register: React.FC<RegisterProps> = ({ setIsRegisteredIn }) => {

    const [emailOrPhone, setEmailOrPhone] = useState<string>(""); // For username or email
    const [password, setPassword] = useState<string>(""); // For password
    const [name, setName] = useState<string>(""); // For password
    const [phoneNumber, setPhoneNumber] = useState<string>(""); // For password

    const history = useHistory();

    const handleRegister = () => {
        // Example login validation (add real authentication logic here)
        if (emailOrPhone && password && name && phoneNumber) {
          setIsRegisteredIn(true); // Update the global login state
          history.push("/preview"); // Redirect to Tab1
        } else {
          alert("Invalid credentials. Please try again.");
        }
      };

  return (
    <IonPage>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/" style={{"color": "tomato"}}></IonBackButton>
        </IonButtons>
        <IonTitle id='register-heading'>Register</IonTitle>
      </IonToolbar>
      <IonContent>
        <div id="register-container">
            <div>
                <IonAvatar>
                    <img id='register-image' alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                </IonAvatar>
            </div>
          <input id='register-input-box' type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
          <input id='register-input-box' type="text" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
          <input id='register-input-box' type="text" placeholder="Email" value={emailOrPhone} onChange={(e) => setEmailOrPhone(e.target.value)} />
          <input id='register-input-box' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}  />
          <button onClick={handleRegister}>Create Account</button>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Register;
