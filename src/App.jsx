import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

const INITIAL_STATE = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [contactData, setContactData] = useState(
    () => JSON.parse(window.localStorage.getItem("contact")) ?? INITIAL_STATE
  );
  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contact", JSON.stringify(contactData));
  }, [contactData]);

  const handleDeleteContact = (id) => {
    setContactData((prev) => prev.filter((contact) => contact.id !== id));
  };

  const handleAddContact = (newContact) => {
    setContactData((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const visibleContacts = contactData.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm handleAddContact={handleAddContact} />
      <SearchBox value={filter} handleFilterContact={setFilter} />
      <ContactList
        contactData={visibleContacts}
        handleDeleteContact={handleDeleteContact}
      />
    </>
  );
}

export default App;
