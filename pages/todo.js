import Amplify, { Auth } from "aws-amplify";
import awsmobile from '../aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
import '@aws-amplify/ui/dist/style.css';

// Amplifyの設定を行う
Amplify.configure(awsmobile)

// SingUp時に、メールアドレスとパスワードを要求する
const signUpConfig = {
  header: 'Sign Up',
  hideAllDefaults: true,
  defaultCountyCode: '1',
  signUpFields: [
    {
      label: 'User Name',
      key: 'username',
      required: true,
      displayOrder: 1,
      type: 'string'
    },
    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 2,
      type: 'string'
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 3,
      type: 'password'
    }
  ]
}

// SingOut
function signOut() {
  Auth.signOut()
    .then()
    .catch();
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={signOut}>Sign out</button>
        <div>
          Hello World
      </div>
      </header>
    </div>
  );
}

export default withAuthenticator(App, { signUpConfig });
