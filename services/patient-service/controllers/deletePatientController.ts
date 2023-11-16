import { type Request, type Response } from 'express';
import database from '../db/config';
import { sendServerError, sendNotFound } from './controllerUtils';

export const deletePatientController = (req: Request, res: Response): Response<any, Record<string, any>> => {
  try {
    const email = req.params.email;

    if (database === undefined) {
      sendServerError(res);
      return res.sendStatus(500);
    }

    const query = database.prepare('DELETE FROM patients WHERE email = ?');
    const result = query.run(email);

    if (result.changes === 0) {
      sendNotFound(res, 'Patient not found');
      return res.sendStatus(500);
    }

    return res.json({ message: 'Patient deleted successfully' });
  } catch (error) {
    console.error('Error deleting patient:', error);
    sendServerError(res);
    return res.sendStatus(500);
  }
};
