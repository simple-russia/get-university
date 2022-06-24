type uniApiresponseType = object[];

const getUniAPI = (univercityName: string): Promise<uniApiresponseType> => {
    const url = `http://universities.hipolabs.com/search?name=${univercityName}`;
    return fetch(url).then((response) => response.json());
};

export { getUniAPI };
