import { StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Gap, Header, List, Loading, Profile } from '../../components'
import { colors, fonts, getData } from '../../utils'
import { ILNullPhoto } from '../../assets'
import { signOut } from 'firebase/auth'
import { auth } from '../../config/Firebase'
import showError from '../../utils/showMessage'

export default function UserProfile({ navigation }) {
    const [profile, setProfile] = useState({
        photo: ILNullPhoto,
        fullName: '',
        profession: ''
    });
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        getData('user').then(res => {
            setProfile({ ...res, photo: { uri: res.photo } });
        })
    }, [profile])

    const signOutUser = () => {
        setLoading(true)
        signOut(auth).then(() => {
            setLoading(false);
            navigation.replace('GetStarted');
        }).catch((error) => {
            setLoading(false);
            showError(error.message);
        });
    }

    return (
        <>
            <View style={styles.page}>
                <Header title={"Profile"} onPress={() => navigation.goBack()} />
                <Gap height={10} />
                {profile.fullName.length > 0 && <Profile name={profile.fullName} desc={profile.profession} photo={profile.photo} />}
                <Gap height={14} />
                <List onPress={() => navigation.navigate('UpdateProfile')} type={"next"} icon={"edit-profile"} name={"Edit Profile"} desc={"Last updated yesterday"} />
                <List onPress={() => navigation.navigate('Chatting')} type={"next"} icon={"language"} name={"Language"} desc={"Available 12 languages"} />
                <List onPress={() => navigation.navigate('Chatting')} type={"next"} icon={"rate"} name={"Give Us Rate"} desc={"On Google Play Store"} />
                <List onPress={signOutUser} type={"next"} icon={"help"} name={"Sign Out"} desc={"Read our guidelines"} />
            </View>
            {isLoading && <Loading />}
        </>
    )
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1
    },
    avatar: {
        width: 110,
        height: 110
    },
    avatarWrapper: {
        width: 130,
        height: 130,
        borderColor: colors.border,
        borderWidth: 1,
        borderRadius: 130 / 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    addPhoto: {
        position: 'absolute',
        bottom: 8,
        right: 6
    },
    name: {
        fontSize: 24,
        color: colors.text.primary,
        fontFamily: fonts.primary[600],
        textAlign: 'center'
    },
    profession: {
        fontSize: 18,
        color: colors.text.secondary,
        fontFamily: fonts.primary[400],
        textAlign: 'center'
    },
    profile: {
        alignItems: 'center',
        flex: 1,
        // justifyContent: 'center'
    }
})