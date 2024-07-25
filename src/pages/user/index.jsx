import { useEffect,useState } from "react";
import Link from 'next/link';
import  useSWR from 'swr';
import styles from "../../styles/User.module.css";
const fetcher = (...args) => fetch(...a).then(res=>res.json());

const UserPage = () =>{
  const {data,error} = useSWR(`https://dummyjson.com/users`,fetcher);
    console.log("data",data);
    if(error) {
      return <h1>Error happened</h1>
    }
    if(!data) return <h1>Loading...</h1>
    // const [users,setUsers] = useState([]);
    // console.log("Users",users);
    // useEffect(()=>{
    // async function fetchUsers(){
    // const data = await fetch('https://dummyjson.com/users');
    // setUsers(await data.json());
    //  } fetchUsers()
    // },[]);
 return(
  <div>
    <h1>Users</h1>
    {data.users  &&
        data.users.users.map((user)=>(
        <Link  className={styles.text} href={`/user/${user.id}/`}>{user.firstName} </Link>
      ))
    }
  </div>
 );
};

export default UserPage;