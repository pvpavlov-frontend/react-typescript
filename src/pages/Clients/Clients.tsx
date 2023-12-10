import { Link, useNavigate } from "react-router-dom";

import { ClientsWrpapper } from "./styles";

function Clients() {
    return (
        <ClientsWrpapper>
            <div>
                <h1>Клиенты</h1>
                <ul>
                    <li>
                        <Link to="/clients/facebook">Facebook</Link>
                    </li>
                    <li>
                        <Link to="/clients/google">Google</Link>
                    </li>
                    <li>
                        <Link to="/clients/apple">Apple</Link>
                    </li>
                </ul>
            </div>
        </ClientsWrpapper>
    );
}
export default Clients;