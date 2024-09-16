import { auth } from '../../lib/firebase';
import './detail.css';

const Detail = () => {
    return (
        <div className="detail">
            <div className="user">
                <img src="./avatar.png" alt="" />
                <h2>Jane Doe</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>

            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Chat Setting</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Privacy & Help</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared Photos</span>
                        <img src="./arrowDown.png" alt="" />
                    </div>
                    <div className="photos">
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://images.pexels.com/photos/18788673/pexels-photo-18788673/free-photo-of-roof-on-a-yellow-building.jpeg" alt="" />
                                <span>photo_2024_2.png</span>
                            </div>
                            <img className="icon" src="./download.png" alt="" />
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://images.pexels.com/photos/18788673/pexels-photo-18788673/free-photo-of-roof-on-a-yellow-building.jpeg" alt="" />
                                <span>photo_2024_2.png</span>
                            </div>
                            <img className="icon" src="./download.png" alt="" />
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://images.pexels.com/photos/18788673/pexels-photo-18788673/free-photo-of-roof-on-a-yellow-building.jpeg" alt="" />
                                <span>photo_2024_2.png</span>
                            </div>
                            <img className="icon" src="./download.png" alt="" />
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://images.pexels.com/photos/18788673/pexels-photo-18788673/free-photo-of-roof-on-a-yellow-building.jpeg" alt="" />
                                <span>photo_2024_2.png</span>
                            </div>
                            <img className="icon" src="./download.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared Files</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <button>Block User</button>
                <button className='logout' onClick={() => auth.signOut()}>Logout</button>
            </div>
        </div>
    )
}

export default Detail