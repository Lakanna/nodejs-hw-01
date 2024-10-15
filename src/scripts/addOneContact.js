import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const newContact = createFakeContact();

    const currentContacts = await readContacts();

    const data = [...currentContacts, newContact];

    await writeContacts(data);
  } catch (error) {
    console.error(error);
  }
};

// const respons = await addOneContact();
// console.log(respons);
