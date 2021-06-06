import Layout from '../components/Layout';
import SignupComponent from '../components/auth/SignupComponent';
import Link from 'next/link';
import React from 'react';
import { API, APP_NAME } from '../config';
import Head from 'next/head';

const Signup = () => {
  const head = () => (
    <Head>
      <title> Đăng ký | {APP_NAME}</title>
    </Head>
  );

  return (
    <React.Fragment>
      {head()}
      <Layout>
        <h2 className='text-center pt-4 pb-4'>Đăng ký</h2>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
            <SignupComponent />
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default Signup;
