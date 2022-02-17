import { useSelector} from "react-redux";

function Dashboard() {
  const { user} = useSelector(
    (state) => state.auth
  );

  return <div className="py-14">Dashbord</div>;
}

export default Dashboard;
