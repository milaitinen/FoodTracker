// Redux action creators

export const INSERT_FIRSTNAME   = 'INSERT_FIRSTNAME';
export const INSERT_LASTNAME    = 'INSERT_LASTNAME';
export const INSERT_ID          = 'INSERT_ID';

export const insertFirstname = (name) => ({
    type: INSERT_FIRSTNAME,
    firstName: name
});

export const insertLastname = (name) => ({
    type: INSERT_LASTNAME,
    lastName: name
});

export const insertID = (ID) => ({
    type: INSERT_ID,
    customerID: ID
});
