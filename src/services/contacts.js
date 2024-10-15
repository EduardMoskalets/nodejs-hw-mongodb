import { ContactsCollection } from '../db/models/contact.js';

export const getAllContacts = async () => {
  const contacts = await ContactsCollection.find();
  return contacts;
};

export const getContactById = async (contactId) => {
  const contact = await ContactsCollection.findById(contactId);
  return contact;
};

export const createContact = async (payload) => {
  const contact = await ContactsCollection.create(payload);
  return contact;
};

export const updateContact = async (contactId, payload, options = {}) => {
  const rawResult = await ContactsCollection.findOneAndUpdate(
    { _id: contactId },
    payload,
    {
      new: true,
      includeResultMetadata: true,
      ...options,
    },
  );

  if (!rawResult || !rawResult.value) return null;

  return {
    contact: rawResult.value,
    isNew: Boolean(rawResult?.lastErrorObject?.upserted),
  };
};

export const deleteContact = async (contactId) => {
  const contact = await ContactsCollection.findOneAndDelete({
    _id: contactId,
  });

  return contact;
};

// =============================================================================================================================================

// export const getAllContacts = async () => {
//   try {
//     const contacts = await Contact.find();

//     return contacts;
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const getContactById = async (contactId) => {
//   try {
//     const contact = await Contact.findById(contactId);

//     return contact;
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const createContact = async (contact) => {
//   return Contact.create(contact);
// };

// export const updateContact = async (contactId, contact) => {
//   return Contact.findByIdAndUpdate(contactId, contact, { new: true });
// };

// export const deleteContact = async (contactId) => {
//   return Contact.findByIdAndDelete(contactId);
// };