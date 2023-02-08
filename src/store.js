import { Store } from 'pullstate';

const LOCAL_STORAGE_KEY = 'reports';

let initialStore = {
  reports: []
};

try {
  const savedStore = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if (savedStore !== null) {
    initialStore = savedStore;
  }
} catch (e) {
  console.error(e);
}

console.log(initialStore);

const store = new Store(initialStore);

store.subscribe((s) => s, (s) => {
  console.debug('saving store', s);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(s));
});

export default store;