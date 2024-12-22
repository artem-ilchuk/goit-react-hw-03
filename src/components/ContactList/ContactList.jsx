import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ info, onDelete }) => {
  return (
    <div className={s.contacts}>
      <ul className={s.list}>
        {info.map(({ id, name, number }) => {
          return (
            <li key={id} className={s.item}>
              <Contact
                id={id}
                name={name}
                number={number}
                onDelete={onDelete}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
