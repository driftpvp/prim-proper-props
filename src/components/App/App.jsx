// React Imports
import { useState, useEffect } from 'react';
// Node Imports
import axios from 'axios';
// Styles
import './App.css';
// Components
import Header from '../Header/Header';
import DinnerSupplies from '../DinnerSupplies/DinnerSupplies';
import GuestForm from '../GuestForm/GuestForm';
import GuestList from '../GuestList/GuestList';
import PartyLeader from '../PartyLeader/PartyLeader';
// import SilverWare from '../SilverWare/SilverWare';
import Footer from '../Footer/Footer';

function App() {
  let [guestList, setGuestList] = useState([]);
  // let [newGuestName, setNewGuestName] = useState('');
  // let [newGuestMeal, setNewGuestMeal] = useState('false');

  //On load, get guests
  useEffect(() => {
    getGuests()
  }, [])

  const getGuests = () => {
    axios.get('/guests')
      .then(response => {
        setGuestList(response.data)
      })
      .catch(err => {
        alert('error getting guests');
        console.log(err);
      })
  }


  const addGuest = (newGuestName, newGuestMeal) => {
    axios.post('/guests', { name: newGuestName, kidsMeal: newGuestMeal })
      .then(response => {
        // clear inputs
        // setNewGuestName('');
        // setNewGuestMeal(false);

        getGuests();
      })
      .catch(err => {
        alert('Error Adding Guest');
        console.log(err);
      })
  };


  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (newGuestName) {
  //     addGuest();
  //   }
  //   else {
  //     alert('The new guest needs a name!');
  //   }
  // }

  console.log(newGuestMeal)
  return (
    <div className="App">
      <Header/>
      <PartyLeader guestList={guestList} />
      <h2>Party Leader</h2>
      {guestList[0] && <h3>{guestList[0].name}</h3>}
      <GuestForm getGuests={getGuests}/>
      <h2>Guest List</h2>
      <GuestList guestList={guestList}/>
      <h2>Dinner Supplies</h2>
      <DinnerSupplies guestList={guestList} />
      <Footer/>
    </div>
  );
}

export default App;
