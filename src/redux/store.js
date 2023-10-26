import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer,PERSIST } from 'reduxjs-toolkit-persist';
import storage from 'reduxjs-toolkit-persist/lib/storage';
import { contactsReducer } from "./contacts/contactsSlice";
import { filterReducer } from "./filter/filterSlice";

const persistConfig = {
    key: 'root',
    storage,
};

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [PERSIST],
        },
    }),
    // logger,
];

export const store = configureStore({
    reducer: {
        contacts: persistReducer(persistConfig, contactsReducer),
        filter: filterReducer,
    },
    middleware,
});

export const persistor = persistStore(store);

