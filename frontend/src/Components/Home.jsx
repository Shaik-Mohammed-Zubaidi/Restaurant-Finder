import '../Styles/home.css';

const Home = () => {
    const currentLocation= window.location;
  return (
    <div className="home">
      <h1>Please Choose One</h1>
      <div className="profiles">
        <div onClick={()=>{window.location.assign(currentLocation+'/owner')}}>I am Owner</div>
        <div onClick={()=>{window.location.assign(currentLocation+'/user')}}>I am User</div>
      </div>
    </div>
  );
};

export default Home;