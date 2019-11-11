import React from 'react'; 
import {View} from 'react-native';
import {Card, Image, Subtitle, Caption} from '@shoutem/ui';


const CardItem = ()=>{
    return(
        <Card>
        <Image
            styleName="medium-wide"
            source={{uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-10.png'}}
        />
            <View styleName="content">
            <Subtitle>Choosing The Right Boutique Hotel For You</Subtitle>
            <Caption>21 hours ago</Caption>
        </View>
</Card>
    )
}


export default CardItem;