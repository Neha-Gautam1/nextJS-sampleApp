 import { useEffect, useState } from "react";
 import {useRouter} from "next/router";
import  useSWR from 'swr';

const userFetcher = (...args) => fetch(...a).then(res=>res.json())

const UserInfoPage = () =>{
    const {data,error} = useSWR(`https://dummyjson.com/users`,fetcher);
    console.log("data",data);
    if(error) {
      return <h1>Error happened</h1>
    }
    if(!data) return <h1>Loading...</h1>
    // const [userInfo,setUserInfo] = useState();
    // const router = useRouter();
    // console.log(userInfo);
    // useEffect(()=>{
    //     const id = router.query.id;
    //     async function getUserById(){
    //         const data = await fetch(`https://dummyjson.com/users/${id}`);
    //        setUserInfo(await data.json());
    //          } 
    //          getUserById(id);
    //         },[]);
    return(
 <div>
    <h1>{userInfo.firstName}</h1>
  
 </div>
    )
};

export default UserInfoPage;