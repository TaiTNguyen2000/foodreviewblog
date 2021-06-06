import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { userPublicProfile } from '../../actions/user';
import { API, APP_NAME } from '../../config';
import moment from 'moment';
import ContactForm from '../../components/form/ContactForm';

const UserProfile = ({ user, blogs, query }) => {
  const head = () => (
    <Head>
      <title>
        {user.username} | {APP_NAME}
      </title>
    </Head>
  );

  const showUserBlogs = () => {
    return blogs.map((blog, i) => {
      return (
        <div className='mt-4 mb-4' key={i}>
          <Link href={`/blogs/${blog.slug}`}>
            <a className='lead'>{blog.title}</a>
          </Link>
        </div>
      );
    });
  };

  return (
    <React.Fragment>
      {head()}
      <Layout>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='card'>
                <div className='card-body'>
                  <div className='row'>
                    <div className='col-md-8'>
                      <h5>{user.name}</h5>
                      <p className='text-muted'>
                        Tham gia vào {moment(user.createdAt).fromNow()}
                      </p>
                      <p className=''>{user.about}</p>
                    </div>
                    <div className='col-md-4'>
                      <img
                        src={`${API}/user/photo/${user.username}`}
                        className='img img-fluid img-thumbnail mb-3'
                        style={{ maxHeight: '100px', maxWidth: '100%' }}
                        alt='user profile'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />

        <div className='container pb-5'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='card'>
                <div className='card-body'>
                  <h5 className='card-title bg-primary pt-4 pb-4 pl-4 pr-4 text-white'>
                    Những bài viết gần đây của {user.name}
                  </h5>

                  {showUserBlogs()}
                </div>
              </div>
            </div>

            <div className='col-md-6'>
              <div className='card'>
                <div className='card-body'>
                  <h5 className='card-title bg-primary pt-4 pb-4 pl-4 pr-4 text-light'>
                    Nhắn cho {user.name}
                  </h5>
                  <br />
                  <ContactForm authorEmail={user.email} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

UserProfile.getInitialProps = ({ query }) => {
  // console.log(query);
  return userPublicProfile(query.username).then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      // console.log(data);
      return { user: data.user, blogs: data.blogs, query };
    }
  });
};

export default UserProfile;
