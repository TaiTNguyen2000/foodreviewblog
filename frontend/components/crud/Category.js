import { useState, useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { getCookie } from '../../actions/auth';
import { create, getCategories, removeCategory } from '../../actions/category';

const Category = () => {
  const [values, setValues] = useState({
    name: '',
    error: false,
    success: false,
    categories: [],
    removed: false,
    reload: false,
  });

  const { name, error, success, categories, removed, reload } = values;
  const token = getCookie('token');

  useEffect(() => {
    loadCategories();
  }, [reload]);

  const loadCategories = () => {
    getCategories().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setValues({ ...values, categories: data });
      }
    });
  };

  const showCategories = () => {
    return categories.map((c, i) => {
      return (
        <button
          onDoubleClick={() => deleteConfirm(c.slug)}
          title='Nhấp đôi chuột để xoá'
          key={i}
          className='btn btn-outline-primary mr-1 ml-1 mt-3'
        >
          {c.name}
        </button>
      );
    });
  };

  const deleteConfirm = (slug) => {
    let answer = window.confirm('Bạn có chắc chắn muốn xoá chủ đề này?');
    if (answer) {
      deleteCategory(slug);
    }
  };

  const deleteCategory = (slug) => {
    // console.log('delete', slug);
    removeCategory(slug, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setValues({
          ...values,
          error: false,
          success: false,
          name: '',
          removed: !removed,
          reload: !reload,
        });
      }
    });
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    // console.log('create category', name);
    create({ name }, token).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({
          ...values,
          error: false,
          success: false,
          name: '',
          removed: !removed,
          reload: !reload,
        });
      }
    });
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      name: e.target.value,
      error: false,
      success: false,
      removed: '',
    });
  };

  const showSuccess = () => {
    if (success) {
      return <p className='text-success'>Chủ đề đã được tạo</p>;
    }
  };

  const showError = () => {
    if (error) {
      return <p className='text-danger'>Chủ đề đã tồn tại</p>;
    }
  };

  const showRemoved = () => {
    if (removed) {
      return <p className='text-danger'>Chủ đề đã được xoá</p>;
    }
  };

  const mouseMoveHandler = (e) => {
    setValues({ ...values, error: false, success: false, removed: '' });
  };

  const newCategoryFom = () => (
    <form onSubmit={clickSubmit}>
      <div className='form-group'>
        <label className='text-muted'>Tên</label>
        <input
          type='text'
          className='form-control'
          onChange={handleChange}
          value={name}
          required
        />
      </div>
      <div>
        <button type='submit' className='btn btn-primary'>
          Tạo
        </button>
      </div>
    </form>
  );

  return (
    <React.Fragment>
      {showSuccess()}
      {showError()}
      {showRemoved()}
      <div onMouseMove={mouseMoveHandler}>
        {newCategoryFom()}
        {showCategories()}
      </div>
    </React.Fragment>
  );
};

export default Category;
