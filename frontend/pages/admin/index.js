import Layout from '../../components/Layout';
import Admin from '../../components/auth/Admin';
import Link from 'next/link';
import Head from 'next/head';
import React from 'react';
import { API, APP_NAME } from '../../config';

const AdminIndex = () => {
  const head = () => (
    <Head>
      <title> Admin | {APP_NAME}</title>
    </Head>
  );

  return (
    <React.Fragment>
      {head()}
      <Layout>
        <Admin>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-12 pt-5 pb-5'>
                <h2>Trang Admin</h2>
              </div>
              <div className='col-md-4'>
                <ul class='list-group'>
                  <li className='list-group-item'>
                    <Link href='/admin/crud/category-tag'>
                      <a>Quản lý chủ đề và thẻ</a>
                    </Link>
                  </li>

                  <li className='list-group-item'>
                    <a href='/admin/crud/blog'>Tạo bài viết mới</a>
                  </li>

                  <li className='list-group-item'>
                    <Link href='/admin/crud/blogs'>
                      <a>Cập nhật/ Sửa bài viết</a>
                    </Link>
                  </li>

                  <li className='list-group-item'>
                    <Link href='/user/update'>
                      <a>Cập nhật hồ sơ</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='col-md-8'></div>
            </div>
          </div>
        </Admin>
      </Layout>
    </React.Fragment>
  );
};

export default AdminIndex;
