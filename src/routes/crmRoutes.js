import {
  addNewContact,
  getContacts,
  getContactWithID,
  updateContact,
  deleteContact,
} from '../controllers/crmController';

const routes = (app) => {
  app
    .route('/contact')
    .get((req, res, next) => {
      // middleware
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, getContacts)
    // Post endpoint
    .post(addNewContact);

  app
    .route('/contact/:contactID')
    // GET Contact by ID
    .get(getContactWithID)
    // UPDATE Contact by ID
    .put(updateContact)
    // DELETE Contact by ID
    .delete(deleteContact);
};

export default routes;
