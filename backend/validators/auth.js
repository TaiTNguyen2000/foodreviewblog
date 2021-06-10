const { check } = require('express-validator');

exports.userSignupValidator = [
  check('name').not().isEmpty().withMessage('Vui lòng điền tên'),
  check('email').isEmail().withMessage('Email không hợp lệ'),
  check('password')
    .isLength({ min: 6 })
    .withMessage('Mật khẩu phải có ít nhất 6 ký tự'),
];

exports.userSigninValidator = [
  check('email').isEmail().withMessage('Email không hợp lệ'),
  check('password')
    .isLength({ min: 6 })
    .withMessage('Mật khẩu phải có ít nhất 6 ký tự'),
];
