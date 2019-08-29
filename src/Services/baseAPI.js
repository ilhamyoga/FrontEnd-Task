import axios from 'axios';

export function getTodos() {
    // `axios` function returns promise, you can use any ajax lib, which can
    // return promise, or wrap in promise ajax call
    return axios.get('https://my-json-server.typicode.com/ilhamyoga/fake-api/todos');
  };