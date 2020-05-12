// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

import {Client4} from 'mattermost-redux/client';
import {UserProfile} from 'mattermost-redux/types/users';

import ProfilePicture from 'components/profile_picture';

type Props = {
    user: UserProfile;
    isSaved: boolean;
}

export default class UserGridName extends React.Component<Props> {
    public render = (): JSX.Element => {
        const {user} = this.props;

        return (
            <div className='ug-name-row'>
                <ProfilePicture
                    src={Client4.getProfilePictureUrl(user.id, user.last_picture_update)}
                    status={status}
                    size='md'
                />

                <div className='ug-name'>
                    <span>
                        {`${user.username} - ${user.first_name} ${user.last_name}`}
                    </span>
                    <span className='ug-email'>
                        {user.email}
                    </span>
                </div>
            </div>
        );
    }
}
