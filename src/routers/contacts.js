import { Router } from 'express';
import {
  createContactController,
  deleteContactController,
  getContactByIdController,
  getContactsController,
  patchContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/contacts', ctrlWrapper(getContactsController));

router.get('/contacts/:contactId', ctrlWrapper(getContactByIdController));

router.post('/contacts', ctrlWrapper(createContactController));

router.patch('/contacts/:contactId', ctrlWrapper(patchContactController));

router.delete('/contacts/:contactId', ctrlWrapper(deleteContactController));

export default router;
// ==================================================================================================================================================


// const router = express.Router();
// const jsonParser = express.json();

// router.get('/contacts', ctrlWrapper(getAllContactsController));

// router.get('/contacts/:contactId', ctrlWrapper(getContactByIdController));

// router.post('/contacts', jsonParser, ctrlWrapper(createContactController));

// router.patch(
//   '/contacts/:contactId',
//   jsonParser,
//   ctrlWrapper(updateContactController),
// );

// router.delete('/contacts/:contactId', ctrlWrapper(deleteContactController));

// export default router;