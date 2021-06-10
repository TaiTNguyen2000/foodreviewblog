const { check } = require('express-validator');

exports.contactFormValidator = [
  check('name').not().isEmpty().withMessage('Vui lòng điền tên'),
  check('message')
    .not()
    .isEmpty()
    .isLength({ min: 20 })
    .withMessage('Lời nhắn phải có ít nhất 20 ký tự'),
];
