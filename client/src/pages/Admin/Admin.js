import { useParams } from "react-router-dom";

const Admin = () => {
  const { adminURL: admin } = useParams();
  console.log(admin);
  return (
    <>
      <div>{admin}</div>
    </>
  );
};
export default Admin;
