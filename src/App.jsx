import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
  // const [contactData, setContactData] = useState(
  //   () => JSON.parse(window.localStorage.getItem("contact")) ?? INITIAL_STATE
  // );
  // const [filter, setFilter] = useState("");

  // useEffect(() => {
  //   window.localStorage.setItem("contact", JSON.stringify(contactData));
  // }, [contactData]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
}

export default App;
