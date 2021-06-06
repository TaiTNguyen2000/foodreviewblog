import Layout from '../components/Layout';
import Link from 'next/link';
import ContactForm from '../components/form/ContactForm';
import React from 'react';
import { APP_NAME } from '../config';
import Head from 'next/head';

const Contact = () => {
  const head = () => (
    <Head>
      <title>Liên hệ | {APP_NAME}</title>
    </Head>
  );

  return (
    <React.Fragment>
      {head()}
      <Layout>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-8 offset-md-2'>
              <h2>Liên hệ với tôi</h2>
              <hr />
              <ContactForm />
            </div>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default Contact;
