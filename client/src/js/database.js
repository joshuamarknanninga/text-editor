import { openDB } from 'idb';

const initdb = async () => {
  try {
    return openDB('jate', 1, {
      upgrade(db) {
        if (!db.objectStoreNames.contains('content')) {
          db.createObjectStore('content', { keyPath: 'id', autoIncrement: true });
        }
      },
    });
  } catch (error) {
    console.error('Error initializing database:', error);
  }
};

// Method to PUT data
export const putDb = async (content) => {
  try {
    const db = await initdb();
    const tx = db.transaction('content', 'readwrite');
    const store = tx.objectStore('content');
    const request = store.put({ id: 1, value: content });
    const result = await request;
    await tx.done;
    console.log('Data saved to the database:', result);
  } catch (error) {
    console.error('Error saving to database:', error);
  }
};

// Method to GET data
export const getDb = async () => {
  try {
    const db = await initdb();
    const tx = db.transaction('content', 'readonly');
    const store = tx.objectStore('content');
    const request = store.get(1);
    const result = await request;
    console.log('Data retrieved from the database:', result);
    return result?.value;
  } catch (error) {
    console.error('Error retrieving data from database:', error);
  }
};
