import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const arrOfContacts = [];
    for (let index = 0; index < number; index++) {
      const element = createFakeContact();
      arrOfContacts.push(element);
    }
    // console.log(arrOfContacts, 'contacts');
    const currentContacts = await readContacts();
    // console.log(currentContacts, 'current');
    const allContact = [...currentContacts, ...arrOfContacts];
    console.log(allContact, 'all');
    await writeContacts(JSON.stringify(allContact));
  } catch (error) {
    console.log('Error', error);
  }
};
generateContacts(5);
// console.log(await );
