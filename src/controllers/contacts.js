import createHttpError from 'http-errors';
import {
  createContact,
  deleteContact,
  getAllContacts,
  getContactById,
  updateContact,
} from '../services/contacts.js';


export const getContactsController = async (req, res) => {
  const contacts = await getAllContacts();
  res.status(200).json({
    status: 200,
    message: 'Successfully found contacts!',
    data: contacts,
  });
};

export const getContactByIdController = async (req, res) => {
  const { contactId } = req.params;
  const contact = await getContactById(contactId);

  if (!contact) {
    throw createHttpError(404, 'Contact not found');
  }

  res.status(200).json({
    status: 200,
    message: `Successfully found contact with id ${contactId}!`,
    data: contact,
  });
};

export const createContactController = async (req, res) => {
  const contact = await createContact(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully created a contact!',
    data: contact,
  });
};

export const patchContactController = async (req, res) => {
  const { contactId } = req.params;
  const result = await updateContact(contactId, req.body);
  if (!result) {
    next(createHttpError(404, 'Contact not found'));
    return;
  }
  res.json({
    status: 200,
    message: `Successfully patched a contact!`,
    data: result.contact,
  });
};

export const deleteContactController = async (req, res) => {
  const { contactId } = req.params;
  const contact = await deleteContact(contactId);
  if (!contact) {
    next(createHttpError(404, 'Contact not found'));
    return;
  }
  res.status(204).send();
};

// ===================================================================================================================================================
// export async function getAllContactsController(req, res) {
//   const contacts = await getAllContacts();

//   res.json({
//     status: 200,
//     message: 'Successfully found contacts!',
//     data: contacts,
//   });
// }

// export async function getContactByIdController(req, res, next) {
//   const { contactId } = req.params;

//   const contact = await getContactById(contactId);

//   if (contact === null) {
//     return next(createHttpError(404, 'Contact no found'));
//   }

//   res.json({
//     status: 200,
//     message: `Successfully found contact with id ${contactId}!`,
//     data: contact,
//   });
// }

// export async function createContactController(req, res) {
//   const contact = {
//     name: req.body.name,
//     phoneNumber: req.body.phoneNumber,
//     email: req.body.email || null,
//     isFavourite: req.body.isFavourite || false,
//     contactType: req.body.contactType,
//   };

//   const result = await createContact(contact);

//   res.status(201).json({
//     status: 201,
//     message: 'Successfully created a contact!',
//     data: result,
//   });
// }

// export async function updateContactController(req, res, next) {
//   const { contactId } = req.params;

//   const contact = {
//     name: req.body.name,
//     phoneNumber: req.body.phoneNumber,
//     email: req.body.email,
//     isFavourite: req.body.isFavourite,
//     contactType: req.body.contactType,
//   };

//   const result = await updateContact(contactId, contact);

//   if (result === null) {
//     next(createHttpError(404, 'Contact not found'));
//   }

//   res.status(200).json({
//     status: 200,
//     message: 'Successfully patched a contact!',
//     data: result,
//   });
// }

// export async function deleteContactController(req, res, next) {
//   const { contactId } = req.params;

//   const result = await deleteContact(contactId);

//   if (result === null) {
//     return next(createHttpError(404, 'Contact no found'));
//   }

//   res.status(204).end();
// }