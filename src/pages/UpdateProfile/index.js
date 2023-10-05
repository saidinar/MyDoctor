import { ScrollView, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, Gap, Header, Input, Profile } from '../../components'
import { colors, getData, storeData } from '../../utils'
import { ILNullPhoto } from '../../assets';
import { ref, update } from 'firebase/database';
import { database, auth } from '../../config/Firebase';
import { launchImageLibrary } from 'react-native-image-picker';
import { updatePassword } from 'firebase/auth';
import showError from '../../utils/showMessage';

export default function UpdateProfile({ navigation }) {

    const [profile, setProfile] = useState({
        fullName: '',
        profession: '',
        email: ''
    });

    const [password, setPassword] = useState('');
    const [selectedImage, setSelectedImage] = useState(ILNullPhoto);
    const [photoForDB, setPhotoForDB] = useState('');

    useEffect(() => {
        getData('user').then(res => {
            setSelectedImage({ uri: res.photo })
            setPhotoForDB(res.photo)
            setProfile({ ...res, photo: { uri: res.photo } });
        })
    }, [])

    const updateProfile = () => {

        if (password.length > 0) {
            if (password.length < 6) {
                showError("Password kurang dari 6 karakter");
            } else {
                updatePasswordData();
                updateProfileData();
                navigation.replace('MainApp');
            }
        }
        else {
            updateProfileData();
            navigation.replace('MainApp');
        }
    }

    const updatePasswordData = () => {
        const user = auth.currentUser;
        updatePassword(user, password).then(() => {
            console.log("update password success")
        })
            .catch(err => {
                showError(err.message);
            })
    }

    const updateProfileData = () => {
        const data = { ...profile, photo: photoForDB };
        update(ref(database, 'users/' + profile.uid), data)
            .then(res => {
                storeData('user', data)
            })
            .catch(error => {
                showError(error.code);
            });
    }

    const changeText = (key, value) => {
        setProfile({
            ...profile,
            [key]: value
        })
    }
    console.log("profile 2 >>> ", profile);

    const getImage = async () => {
        const options = {
            mediaType: 'photo',
            maxHeight: 200,
            maxWidth: 200,
            includeBase64: true,
            quality: 0.5
        };
        await launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
                showError("Oops, sepertinya anda tidak memilih foto nya?");
            } else if (response.error) {
                console.log('Image picker error: ', response.error);
            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                const data = response.base64 || response.assets?.[0]?.base64;
                const type = response.type || response.assets?.[0]?.type;
                setPhotoForDB(`data:${type};base64, ${data}`);
                const source = { uri: imageUri }
                setSelectedImage(source)
            }
        })
    }

    return (
        <View style={styles.page}>
            <Header title={"Edit Profile"} onPress={() => navigation.goBack()} />
            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                {profile?.fullName?.length > 0 && <Profile photo={selectedImage} isRemove onPress={getImage} />}
                <Gap height={26} />
                <Input label={"Full Name"} value={profile.fullName} onChangeText={(value) => changeText("fullName", value)} />
                <Gap height={24} />
                <Input label={"Pekerjaan"} value={profile.profession} onChangeText={(value) => changeText("profession", value)} />
                <Gap height={24} />
                <Input label={"Email Address"} value={profile.email} disable />
                <Gap height={24} />
                <Input label={"Password"} value={password} onChangeText={(value) => setPassword(value)} secureTextEntry />
                <Gap height={40} />
                <Button title={"Save Profile"} onPress={updateProfile} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white
    },
    content: {
        padding: 40,
        paddingTop: 10
    }
})