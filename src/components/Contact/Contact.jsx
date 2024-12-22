import s from "./Contact.module.css";
import { FaUser } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

const Contact = ({ name, number, id, onDelete }) => {
  return (
    <div className={s.card}>
      <div className={s.user}>
        <div className={s.data}>
          <FaUser className={s.icon} />
          <p className={s.name}>{name}</p>
        </div>
        <div className={s.data}>
          <FaPhone className={s.icon} />
          <p className={s.number}>{number}</p>
        </div>
      </div>
      <button className={s.del_btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
