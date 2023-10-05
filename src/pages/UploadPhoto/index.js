import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { colors, fonts, getData, storeData } from '../../utils'
import { Button, Gap, Header, Link } from '../../components'
import { IconAddPhoto, IconRemovePhoto, ILNullPhoto } from '../../assets'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { showMessage } from 'react-native-flash-message'
import RNFetchBlob from 'rn-fetch-blob';
import RNFS from 'react-native-fs';
import { update, ref } from 'firebase/database';
import { database } from '../../config/Firebase';

export default function UploadPhoto({ navigation, route }) {
    const { fullName, profession, uid } = route.params
    const [hasPhoto, setPhoto] = useState(false)
    const [selectedImage, setSelectedImage] = useState(ILNullPhoto)
    const [photoForDB, setPhotoForDB] = useState('')
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
                showMessage({
                    message: "Oops, sepertinya anda tidak memilih foto nya?",
                    type: "default",
                    backgroundColor: colors.error,
                    color: colors.white
                })
            } else if (response.error) {
                console.log('Image picker error: ', response.error);
            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                const data = response.base64 || response.assets?.[0]?.base64;
                const type = response.type || response.assets?.[0]?.type;
                setPhotoForDB(`data:${type};base64, ${data}`);
                const source = { uri: imageUri };
                setPhoto(true)
                setSelectedImage(source)
            }
        })
    }
    

    const uploadAndContinue = () => {
        // update(ref(database, 'users/' + uid), { photo: photoForDB });
        update(ref(database, 'doctors/' + uid), { photo: photoForDB });
        console.log("berhasil lagi>>>> ", photoForDB)
        const data = route.params;
        data.photo = photoForDB;
        storeData('user', data);
        navigation.replace("MainApp")
    }

    return (
        <View style={styles.page}>
            <Header title={"Upload Photo"} onPress={() => { navigation.goBack() }} />
            <View style={styles.content}>
                <View style={styles.profile}>
                    <TouchableOpacity style={styles.avatarWrapper} onPress={getImage}>
                        <Image style={styles.avatar} source={selectedImage} />
                        {hasPhoto ? <IconRemovePhoto style={styles.addPhoto} /> : <IconAddPhoto style={styles.addPhoto} />}
                    </TouchableOpacity>
                    <Gap height={26} />
                    <Text style={styles.name}>{fullName}</Text>
                    <Text style={styles.profession}>{profession}</Text>
                </View>
                <View>
                    <Button title={"Upload and Continue"} onPress={uploadAndContinue} />
                    <Gap height={30} />
                    <Link title={"Skip for this"} size={16} align='center' onPress={() => navigation.replace("MainApp")} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white
    },
    content: {
        paddingHorizontal: 40,
        paddingBottom: 64,
        flex: 1,
        justifyContent: 'space-between'
    },
    avatar: {
        width: 110,
        height: 110,
        borderRadius: 110 / 2
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
        justifyContent: 'center'
    }
})