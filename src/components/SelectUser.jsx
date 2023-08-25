import useFetchData from "@/hooks/useFetchData";
import UserList from "@/components/UserList";
import { pb } from "@/api/pocketbase";
import { Link } from "react-router-dom";

// const record = await pb.collection('users').getFullList();
// console.log(record)
// console.log('pb', pb);

function SelectUser() {
  
  const {data} = useFetchData(pb.collection('users'));

  console.log(data);


  // const listId = useId();

  const handleSelectUser = () => {
    console.log('선택');
  }


  const userList = Array(9)
  .fill(1)
  .map((n, i) => 100 * (i + 1));
  // console.log(userList);

  return (
    <ul className="grid grid-cols-3 m-10 gap-y-5 justify-items-center items-center">
      {/* {data.items?.map((item) => (
        <UserList key={item.id} item={item} />
      ))} */}

      {userList.map((key, i) => {
        return (
          <li key={key} className="w-[300px] h-[64px] rounded-[10px] bg-inputYellow flex justify-center items-center font-extrabold hover:bg-lionYellow hover:cursor-pointer" onClick={handleSelectUser}>
          <Link to={`/selectStemp`}>{userList[i]}</Link></li>
        )
      })}
    </ul>
  );
}

export default SelectUser
