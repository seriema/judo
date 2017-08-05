const saveUserData = (propertyName, value) => {
    // Not really needed for simple types, but absolutely needed otherwise.
    localStorage[propertyName] = JSON.stringify(value);
}

const loadUserData = (propertyName, fallbackValue) => {
     // JSON.parse is needed even for simple types as otherwise null value become the string "null".
    let userData = localStorage[propertyName];
    return userData ? JSON.parse(userData) : fallbackValue;
}

const propertyName = 'userState';

export const getState = () => {
    return loadUserData(propertyName, null);
};

export const saveState = ({selected, show}) => {
    saveUserData(propertyName, {
        selected,
        show
    });
};
