import {SharedHistory, SharedProduct, User} from '../shared/shareddtypes';

export async function addUser(user:User):Promise<boolean>{
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/users/add', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({'name':user.name, 'email':user.email})
      });
    if (response.status===200)
      return true;
    else
      return false;
}

export async function getUsers():Promise<User[]>{
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/users/list');
    //The objects returned by the api are directly convertible to User objects
    return response.json()
}

export async function getProducts():Promise<SharedProduct[]>{
    const apiEndPoint = process.env.REACT_APP_API_URI || 'http://localhost:5000/api';
    let response = await fetch(apiEndPoint+'/productos');
    return response.json()
}

export async function getHistory():Promise<SharedHistory[]>{
  const apiEndPoint = process.env.REACT_APP_API_URI || 'http://localhost:5000/api';
  let response = await fetch(apiEndPoint+'/historiales', {
    body: JSON.stringify(
      {
       'username':localStorage.getItem("username")
      })
  });
  return response.json()
}