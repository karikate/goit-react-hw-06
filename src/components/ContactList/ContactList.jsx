import Contact from "../Contact/Contact";

const ContactList = ({ contactData, handleDeleteContact }) => {
  return (
    <div>
      <ul>
        {contactData.map((contact) => (
          <li key={contact.id}>
            <Contact
              contact={contact}
              handleDeleteContact={handleDeleteContact}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
