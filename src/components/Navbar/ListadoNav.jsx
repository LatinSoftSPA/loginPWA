import { NavLink } from "react-router-dom";

const data = [
    {
      to: "/dashboard",
      text: "Dashboard",
      svg: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 11.1111H8.88889V0H0V11.1111ZM0 20H8.88889V13.3333H0V20ZM11.1111 20H20V8.88889H11.1111V20ZM11.1111 0V6.66667H20V0H11.1111Z"
            fill="#fff"
          />
        </svg>
      ),
    },
    {
      to: "/modulos",
      text: "Modulos",
      svg: (
        <svg
          width="30"
          height="30"
          viewBox="0 0 25 25"
          fill="#fff"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5.04146 3C5.22009 2.6906 5.55022 2.5 5.90748 2.5L9.75278 2.5C10.11 2.5 10.4402 2.6906 10.6188 3L12.5415 6.33013C12.7201 6.63953 12.7201 7.02073 12.5415 7.33013L10.6188 10.6603C10.4402 10.9697 10.11 11.1603 9.75278 11.1603H5.90748C5.55022 11.1603 5.22009 10.9697 5.04146 10.6603L3.11881 7.33013C2.94017 7.02073 2.94017 6.63953 3.11881 6.33013L5.04146 3Z"></path>{" "}
          <path d="M5.1216 13.2272C5.30023 12.9178 5.63036 12.7272 5.98762 12.7272H9.83292C10.1902 12.7272 10.5203 12.9178 10.6989 13.2272L12.6216 16.5574C12.8002 16.8668 12.8002 17.248 12.6216 17.5574L10.6989 20.8875C10.5203 21.1969 10.1902 21.3875 9.83292 21.3875H5.98762C5.63036 21.3875 5.30023 21.1969 5.1216 20.8875L3.19895 17.5574C3.02031 17.248 3.02031 16.8668 3.19895 16.5574L5.1216 13.2272Z"></path>{" "}
          <path d="M14.1216 8.22723C14.3002 7.91783 14.6304 7.72723 14.9876 7.72723L18.8329 7.72723C19.1902 7.72723 19.5203 7.91783 19.6989 8.22723L21.6216 11.5574C21.8002 11.8668 21.8002 12.248 21.6216 12.5574L19.6989 15.8875C19.5203 16.1969 19.1902 16.3875 18.8329 16.3875H14.9876C14.6304 16.3875 14.3002 16.1969 14.1216 15.8875L12.1989 12.5574C12.0203 12.248 12.0203 11.8668 12.1989 11.5574L14.1216 8.22723Z"></path>
        </svg>
      ),
    },
    {
      to: "/actividades",
      text: "Actividades",
      svg: (
        <svg
          width={30}
          height={30}
          viewBox="0 0 32 32"
          fill="#fff"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 24c0 1.103-.897 2-2 2s-2-.897-2-2 .897-2 2-2 2 .897 2 2zM10 6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2zm2 10c0 1.103-.897 2-2 2s-2-.897-2-2 .897-2 2-2 2 .897 2 2zm-1 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zM28 5v22a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3zM13 24a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm0-8a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm0-8a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm10 16.5a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5zm0-2a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5zm0-6a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5zm0-2a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5zm0-6a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5zm0-2a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5z" />
        </svg>
      ),
    },
    {
      to: "/documentos",
      text: "Documentos",
      svg: (
        <svg
          width="25"
          height="25"
          viewBox="0 0 20 20"
          fill="#fff"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19 2.5A1.5 1.5 0 0017.5 1h-15A1.5 1.5 0 001 2.5v15A1.5 1.5 0 002.5 19H9a1 1 0 000-2H3V3h14v8a1 1 0 102 0V7.956 2.5zM14 11H6V9h8v2zm-8 4v-2h4v2H6zM6 5v2h8V5H6zm12.293 9.293L15 17.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a.997.997 0 001.414 0l4-4a1 1 0 00-1.414-1.414z"></path>
        </svg>
      ),
    },
  
    /*{
      to: "/notificaciones",
      text: "Notificaciones",
      svg: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H16L20 20V2C20 0.9 19.1 0 18 0ZM16 12H4V10H16V12ZM16 9H4V7H16V9ZM16 6H4V4H16V6Z"
            fill="#fff"
          />
        </svg>
      ),
    },
    */
  ];

const ListadoNav = ({ clicked, handleSelect }) => {
    const itemLi = (obj, i) => {
        const { text, to, svg } = obj;
        return (
        <li className="nav-link" key={i}>
            <NavLink to={to} onClick={handleSelect}>
                <i className="fa-react">{svg}</i> {text}
            </NavLink>
        </li>
        );
    };

    return (
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {data.map((obj, i) => itemLi(obj, i))}
        <li className="nav-link-mobile" width="100%" key={99}>
            <NavLink to={"/"}>Logout</NavLink>
        </li>
        </ul>
    );
};

export default ListadoNav;