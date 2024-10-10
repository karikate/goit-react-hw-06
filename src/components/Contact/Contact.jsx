import { HiPhone, HiUser } from "react-icons/hi";
import s from "./Contact.module.css";

const Contact = ({ handleDeleteContact, contact: { name, number, id } }) => {
  return (
    <div className={s.wrapper}>
      <div>
        <p>
          <HiUser /> {name}
        </p>
        <p>
          <HiPhone /> {number}
        </p>
      </div>

      <button onClick={() => handleDeleteContact(id)}>Delete</button>
    </div>
  );
};

export default Contact;
