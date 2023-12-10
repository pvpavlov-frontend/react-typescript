import { Link, useNavigate } from "react-router-dom";
import { ClientsWrpapper } from "./styles";
function Company() {
    const companyName = "FaceBuck";
    return (
        <div>
            <h1>{companyName}</h1>
            <p>Информация о компании {companyName}</p>
            <button onClick={() => window.history.back()}>Go back</button>
        </div>
    );
};


export default Company;