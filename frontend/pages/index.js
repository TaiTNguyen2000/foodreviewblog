import Layout from '../components/Layout';
import Link from 'next/link';
import { API, APP_NAME } from '../config';
import React from 'react';
import Head from 'next/head';

const Index = () => {
  const head = () => (
    <Head>
      <title>{APP_NAME}</title>
    </Head>
  );

  return (
    <React.Fragment>
      {head()}
      <Layout>
        <article className='overflow-hidden'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12 text-center'>
                <h1 className='display-4 font-weight-bold'>
                  BLOG ẨM THỰC FOODIE
                </h1>
              </div>
            </div>
          </div>

          <div className='container'>
            <div className='row'>
              <div className='col-md-12 text-center pt-4 pb-5'>
                <p className='lead'>Gửi yêu thương trong từng món ăn</p>
              </div>
            </div>
          </div>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-4'>
                <div className='flip flip-horizontal'>
                  <div
                    className='front'
                    style={{
                      backgroundImage:
                        'url(' +
                        'https://i.pinimg.com/564x/d3/42/1f/d3421fedf1f7648ca7c7f1879c397c4b.jpg ' +
                        ')',
                    }}
                  >
                    <h2 className='text-shadow text-center h1'>
                      Ẩm thực thế giới
                    </h2>
                  </div>
                  <div className='back text-center'>
                    <Link href='/categories/am-thuc-the-gioi'>
                      <a>
                        <h3 className='h1'>Ẩm thực thế giới</h3>
                      </a>
                    </Link>
                    <p className='lead'></p>
                  </div>
                </div>
              </div>

              <div className='col-md-4'>
                <div className='flip flip-horizontal'>
                  <div
                    className='front'
                    style={{
                      backgroundImage:
                        'url(' +
                        'https://www.itourvn.com/images/easyblog_articles/390/local-places-eat-in-SG.jpg' +
                        ')',
                    }}
                  >
                    <h2 className='text-shadow text-center h1'>
                      Địa điểm ăn uống
                    </h2>
                  </div>
                  <div className='back text-center'>
                    <Link href='/categories/djia-djiem-an-uong'>
                      <a>
                        <h3 className='h1'>Địa điểm ăn uống</h3>
                      </a>
                    </Link>
                    <p className='lead'></p>
                  </div>
                </div>
              </div>

              <div className='col-md-4'>
                <div className='flip flip-horizontal'>
                  <div
                    className='front'
                    style={{
                      backgroundImage:
                        'url(' +
                        'https://i.pinimg.com/564x/b2/0a/fb/b20afb6b53abe182112d8f26dbb4d415.jpg' +
                        ')',
                    }}
                  >
                    <h2 className='text-shadow text-center h1'>
                      Công thức đáng nhớ
                    </h2>
                  </div>
                  <div className='back text-center'>
                    <Link href='/categories/cong-thuc-djang-nho'>
                      <a>
                        <h3 className='h1'>Công thức đáng nhớ</h3>
                      </a>
                    </Link>
                    <p className='lead'></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </Layout>
    </React.Fragment>
  );
};

export default Index;
