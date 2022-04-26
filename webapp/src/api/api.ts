import {SharedHistory, SharedProduct, User} from '../shared/shareddtypes';


const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'

export async function addUser(user:User):Promise<boolean>{
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
    let response = await fetch(apiEndPoint+'/users/list');
    //The objects returned by the api are directly convertible to User objects
    return response.json()
}

export async function getProducts():Promise<SharedProduct[]>{
    let response = await fetch(apiEndPoint+'/productos');
    return response.json()
}

export async function addHistory(cartItem: SharedProduct, order: Number):Promise<boolean>{
    let response = await fetch(apiEndPoint+'/carrito/add', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({'name':cartItem.name, 'type':cartItem.type,
    'price':cartItem.price, 'username':localStorage.getItem('username'), 'amount':cartItem.amount, 'order_id': order})
  });
  
    
  if (response.status===200)
    return true;
  else
    return false;
}

export async function getHistory():Promise<SharedHistory[]>{
  let response = await fetch(apiEndPoint+'/historiales', {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({'username':localStorage.getItem("username")})
  });
  return response.json()
}