import {
  addNewContact,
  getContacts,
  getContactWithID,
  updateContact,
  deleteContact,
} from '../controllers/crmController';
import { login, register, loginRequired } from '../controllers/userControllers';

const routes = (app) => {
  app
    .route('/contact')
    .get(
      (req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`);
        console.log(`Request type: ${req.method}`);
        next();
      },
      loginRequired,
      getContacts
    )
    // Post endpoint
    .post(loginRequired, addNewContact);

  app
    .route('/contact/:contactID')
    // GET Contact by ID
    .get(loginRequired, getContactWithID)
    // UPDATE Contact by ID
    .put(loginRequired, updateContact)
    // DELETE Contact by ID
    .delete(loginRequired, deleteContact);

  // registration
  app.route('/auth/register').post(register);

  // login
  app.route('/login').post(login);
};

export default routes;
