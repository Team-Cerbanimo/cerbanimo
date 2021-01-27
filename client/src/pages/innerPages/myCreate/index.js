import React from 'react';
import { Button } from 'react-bootstrap';
import ProfileNav from '../../../components/innerComponents/profileNav';

export default function MyCreate() {
    return (
        <div>
            <ProfileNav />
            <div>
                <Button>Create Project</Button>
                <Button>Create Community</Button>
            </div>
        </div>
    )
}