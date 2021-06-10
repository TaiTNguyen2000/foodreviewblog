const { check } = require('express-validator');

exports.createTagValidator = [
  check('name').not().isEmpty().withMessage('Vui lòng điền tên'),
];
