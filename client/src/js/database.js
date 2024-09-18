import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('content')) {
        db.createObjectStore('content', { keyPath: 'id', autoIncrement: true });
      }
    },
  });

// Method to PUT data
export const putDb = async (content) => {
  const db = await initdb();
  const tx = db.transaction('content', 'readwrite');
  const store = tx.objectStore('content');
  await store.put({ id: 1, value: content });
  await tx.done;
};

// Method to GET data
export const getDb = async () => {
  const db = await initdb();
  const tx = db.transaction('content', 'readonly');
  const store = tx.objectStore('content');
  const result = await store.get(1);
  return result?.value;
};
