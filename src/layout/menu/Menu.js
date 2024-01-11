import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import menuda from './Menudt';



export default function Menu() {

    const Menuitem = ({ item, headActive }) => {
        return (
            <li className={` ${process.env.PUBLIC_URL + item.link === window.location.pathname ? "active current-page border-3 border-top border-primary " : ""
                } ${headActive ? "active current-page border-3 border-top border-primary" : ""} `}>
                <Link className="nk-menu-link" to={process.env.PUBLIC_URL + item.link}>
                    <div className="nk-menu-text fs-6 fw-bold">{item.text}</div>
                </Link>
            </li>

        )
    }
    const findActiveHead = () => {
        let found;
        menuda.forEach((item) => {

            if (process.env.PUBLIC_URL + item.link === window.location.pathname) {
                found = item;
            }
        });
        return found;
    };

    const [head, setHead] = useState("Dashboards");
    let findingActiveHead = findActiveHead();

    useEffect(() => {
        if (findingActiveHead) {
            setHead(findingActiveHead.text);
        }
    }, [window.location.pathname]);

    return (
        <ul className="nk-menu nk-menu-main ui-s2">
            {menuda.map((item, index) => {

                if (item.text === head) {
                    return <Menuitem key={index} item={item} headActive={true} />;
                } else return <Menuitem key={index} item={item} />;


            })}
        </ul>
    );

}
