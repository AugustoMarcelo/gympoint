import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import StudentController from './app/controllers/StudentController';
import PlanController from './app/controllers/PlanController';
import RegistrationController from './app/controllers/RegistrationController';
import CheckinController from './app/controllers/CheckinController';
import NoAnswerHelpOrderController from './app/controllers/NoAnswerHelpOrderController';
import StudentHelpOrderController from './app/controllers/StudentHelpOrderController';
import AnswerHelpOrderController from './app/controllers/AnswerHelpOrderController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);

// List all help order opened by student ID
routes.get('/students/:id/help-orders', StudentHelpOrderController.index);
// Allow the student create a help order
routes.post('/students/:id/help-orders', StudentHelpOrderController.store);

routes.use(authMiddleware);

routes.get('/students', StudentController.index);
routes.post('/students', StudentController.store);
routes.put('/students/:id', StudentController.update);
routes.get('/students/:id', StudentController.show);
routes.delete('/students/:id', StudentController.delete);

// Plan routes (available only for administrators)
routes.get('/plans', PlanController.index);
routes.get('/plans/:id', PlanController.show);
routes.post('/plans', PlanController.store);
routes.put('/plans/:id', PlanController.update);
routes.delete('/plans/:id', PlanController.delete);

// Registration routes (available only for administrators)
routes.get('/registrations', RegistrationController.index);
routes.get('/registrations/:id', RegistrationController.show);
routes.post(
  '/students/:student_id/registrations',
  RegistrationController.store
);
routes.put('/registrations/:id', RegistrationController.update);
routes.delete('/registrations/:id', RegistrationController.delete);

// Checkin routes
routes.get('/students/:id/checkins', CheckinController.index);
routes.post('/students/:id/checkins', CheckinController.store);

// List all the help orders without answers
routes.get('/help-orders/no-answers', NoAnswerHelpOrderController.index);
// Answer a help order
routes.put('/help-orders/:id/answers', AnswerHelpOrderController.update);

export default routes;
