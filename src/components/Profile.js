import React from 'react';


class Profile extends React.Component{
    render(){
        return(
            <div className="profile">
                <div className="profile__photo">
                    <img className="profile__photo__img" src="https://scontent.fzty2-1.fna.fbcdn.net/v/t1.0-9/22528313_10210028488217957_8043266491767518066_n.jpg?oh=3d75ee14df01c76f133b76954c4920e7&oe=5AF84766" alt="profile-image" />
                    <p className="profile__photo__time">Just Now</p>
                </div>
                <div className="profile__info">
                    <div className="profile__info__name-container">
                        <p className="name">
                            {this.props.data.profile1.name}
                        </p>
                    </div>

                    <p className="profile__info__description">
                    Tag1 tag2 tag3
                    </p>


               </div>

            </div>
        )
    }
}

export default Profile;