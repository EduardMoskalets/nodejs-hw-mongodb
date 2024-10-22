// import { isValidObjectId } from 'mongoose';
// import { HttpError } from 'http-errors';

// export const isValidId = (req, res, next) => {
//   const { id } = req.params;
//   if (!isValidObjectId(id)) {
//     throw HttpError(404, 'Not found');
//   }

//   next();
// };

// =========================================================================

import { isValidObjectId } from 'mongoose';
import createHttpError, { HttpError } from 'http-errors';

export const isValidId = (req, res, next) => {
  const {contactId}  = req.params;
  if (!isValidObjectId(contactId)) {
    throw createHttpError(404, 'Not found');
  }

  next();
};