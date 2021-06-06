import Layout from '../../components/Layout';
import Private from '../../components/auth/Private';
import Link from 'next/link';
import Head from 'next/head';
import { API, APP_NAME } from '../../config';
import React from 'react';

const UserIndex = () => {
  const head = () => (
    <Head>
      <title> User | {APP_NAME}</title>
    </Head>
  );

  return (
    <React.Fragment>
      {head()}
      <Layout>
        <Private>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-12 pt-5 pb-5'>
                <h2>Trang người dùng</h2>
              </div>
              <div className='col-md-4'>
                <ul class='list-group'>
                  <li className='list-group-item'>
                    <a href='/user/crud/blog'>Tạo bài viết mới</a>
                  </li>

                  <li className='list-group-item'>
                    <Link href='/user/crud/blogs'>
                      <a>Cập nhật/ Xoá bài viết</a>
                    </Link>
                  </li>

                  <li className='list-group-item'>
                    <a href='/user/update'>Cập nhật hồ sơ</a>
                  </li>
                </ul>
              </div>
              <div className='col-md-8'></div>
            </div>
          </div>
        </Private>
      </Layout>
    </React.Fragment>
  );
};

export default UserIndex;
