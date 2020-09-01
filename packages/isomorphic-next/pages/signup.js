import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import Input from '@iso/components/uielements/input';
import Checkbox from '@iso/components/uielements/checkbox';
import Button from '@iso/components/uielements/button';
import FirebaseSignUpForm from '@iso/containers/FirebaseForm/FirebaseForm';
import authAction from '@iso/redux/auth/actions';
import appActions from '@iso/redux/app/actions';
import Auth0 from '../authentication/Auth0';
import IntlMessages from '@iso/components/utility/intlMessages';
import SignUpStyleWrapper from '../styled/SignUp.styles';
import CampFireLogo from './CampfireLogo';

const { login } = authAction;
const { clearMenu } = appActions;

export default function SignUp() {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = (token = false) => {
    if (token) {
      dispatch(login(token));
    } else {
      dispatch(login());
    }
    dispatch(clearMenu());
    history.push('/dashboard');
  };
  return (
    <SignUpStyleWrapper className="isoSignUpPage">
      <div className="isoSignUpContentWrapper">
        <div className="isoSignUpContent">
          <div className="isoLogoWrapper">
            <Link href="/dashboard">
              <CampFireLogo />
            </Link>
          </div>

          <div className="isoSignUpForm">
            <div className="isoInputWrapper isoLeftRightComponent">
              <Input size="large" placeholder="First name" />
              <Input size="large" placeholder="Last name" />
            </div>

            <div className="isoInputWrapper">
              <Input size="large" placeholder="Username" />
            </div>

            <div className="isoInputWrapper">
              <Input size="large" placeholder="Email" />
            </div>

            <div className="isoInputWrapper">
              <Input size="large" type="password" placeholder="Password" />
            </div>

            <div className="isoInputWrapper">
              <Input
                size="large"
                type="password"
                placeholder="Confirm Password"
              />
            </div>

            <div className="isoInputWrapper" style={{ marginBottom: '50px' }}>
              <Checkbox>
                <IntlMessages id="page.signUpTermsConditions" />
              </Checkbox>
            </div>

            <div className="isoInputWrapper">
              <Button type="primary">
                <IntlMessages id="page.signUpButton" />
              </Button>
            </div>

            <p className="isoHelperText">
              <IntlMessages id="page.signInPreview" />
            </p>
            <div className="isoInputWrapper isoOtherLogin">
              <FirebaseSignUpForm
                signup={true}
                history={router}
                login={() => dispatch(login())}
              />
            </div>
            <div className="isoInputWrapper isoCenterComponent isoHelperWrapper">
              <Link href="/signin" as={`/signin`}>
                <a>
                  <IntlMessages id="page.signUpAlreadyAccount" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SignUpStyleWrapper>
  );
}
