import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  try {
    const allContacts = await fs.readFile(PATH_DB, 'utf8');
    // console.log(PATH_DB);
    // console.log(allContacts, 'console from readContacts');
    return JSON.parse(allContacts);
  } catch (error) {
    console.error('Помилка читання', error);
  }
};

// console.log(readContacts());
