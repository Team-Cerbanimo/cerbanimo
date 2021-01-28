import React from 'react';
import HomeCategory from '../../../components/innerComponents/homeCategories'

export default function Home(){
    return(
        <div>       
           <HomeCategory
            items={'Lorem ipsum dolor sit'.split(' ')}/>
        </div>
    )
}