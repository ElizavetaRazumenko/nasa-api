const generateID = (): string => {
    const idString = '0123456789abcdef';
    let id = '';
    for (let i = 0; i < 6; i += 1) {
        id += idString[Math.floor(Math.random() * idString.length)];
    }
    return id;
}

export default generateID;