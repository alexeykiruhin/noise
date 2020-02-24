import React from "react";
import css from "./Users.module.css";

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 0,
                photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Snoop_Dogg_2012.jpg',
                followed: true,
                fullName: 'Келвин  Бродус',
                status: 'Rap man',
                location: {city: 'Лонг-Бич', country: 'США'}
            },
            {
                id: 1,
                photoUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/c/cb/Eminem-Beard.jpg/250px-Eminem-Beard.jpg',
                followed: false,
                fullName: 'Ма́ршалл Мэ́терс',
                status: 'Rap God',
                location: {city: 'Сент-Джозеф', country: 'США'}
            },
            {
                id: 2,
                photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Kanye_West_at_the_2009_Tribeca_Film_Festival-2_%28cropped%29.jpg/270px-Kanye_West_at_the_2009_Tribeca_Film_Festival-2_%28cropped%29.jpg',
                followed: false,
                fullName: 'Ка́нье Уэ́ст',
                status: 'Rap man',
                location: {city: 'Атланта', country: 'США'}
            },
            {
                id: 3,
                photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Jay-Z_%40_Shawn_%27Jay-Z%27_Carter_Foundation_Carnival_%28crop_2%29.jpg',
                followed: true,
                fullName: 'Шон Картер',
                status: 'Rap man',
                location: {city: 'Бруклин', country: 'США'}
            },
        ]);
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} alt="avatar" className={css.avatar}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
};

export default Users;