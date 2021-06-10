const { check } = require('express-validator');

exports.categoryCreateValidator = [
  check('name').not().isEmpty().withMessage('Vui lòng điền tên'),
];
