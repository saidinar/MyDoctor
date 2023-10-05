import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { DoctorCategory, Gap, HomeProfile, NewsItem, RatedDoctor } from '../../components'
import { colors, fonts } from '../../utils'
import { DummyDoctor1, DummyDoctor2, DummyDoctor3 } from '../../assets'
import { database } from '../../config/Firebase'
import { child, get, ref } from 'firebase/database'
import showError from '../../utils/showMessage'

export default function Doctor({ navigation }) {
    const [news, setNews] = useState([]);
    const [categoryDoctor, setCategoryDoctor] = useState([]);

    useEffect(() => {
        const dbRef = ref(database);
        get(child(dbRef, 'news/')).then((snapshot) => {
            if (snapshot.exists()) {
                setNews(snapshot.val());
                console.log('news: ', news, snapshot.val());
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            showError(error.message)
        });
    }, [])

    useEffect(() => {
        const dbRef = ref(database);
        get(child(dbRef, 'category_doctor')).then((snapshot) => {
            if (snapshot.exists()) {
                setCategoryDoctor(snapshot.val());
                console.log('categoryDoctor: ', categoryDoctor, snapshot.val());
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            showError(error.message)
        });
    }, [])

    return (
        <View style={styles.page} >
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.wrapperSection}>
                        <Gap height={30} />
                        <HomeProfile onPress={() => navigation.navigate("UserProfile")} />
                        <Gap height={30} />
                        <Text style={styles.welcome}>Mau konsultasi dengan
                            siapa hari ini?</Text>
                    </View>
                    <View style={styles.wrapperScroll}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={styles.category}>
                                <Gap width={32} />
                                {
                                    categoryDoctor.map(item => {
                                        return <DoctorCategory key={item.id} category={item.category} onPress={() => navigation.navigate("ChooseDoctor")} />
                                    })
                                }
                                <Gap width={22} />
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.wrapperSection}>
                        <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
                        <View>
                            <RatedDoctor name={"Alexa Rachel"} desc={"Pediatrician"} avatar={DummyDoctor1} onPress={() => navigation.navigate("DoctorProfile")} />
                            <RatedDoctor name={"Sunny Frank"} desc={"Dentist"} avatar={DummyDoctor2} onPress={() => navigation.navigate("DoctorProfile")} />
                            <RatedDoctor name={"Poe Minn"} desc={"Podiatrist"} avatar={DummyDoctor3} onPress={() => navigation.navigate("DoctorProfile")} />
                        </View>
                        <Text style={styles.sectionLabel}>Good News</Text>
                    </View>
                    <View>
                        {news.map((newsItem) => {
                            return(
                                <NewsItem key={newsItem.id} item={newsItem} />
                            )
                        })}
                    </View>
                    <Gap height={30} />
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.secondary
    },
    content: {
        flex: 1,
        backgroundColor: colors.white,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    welcome: {
        fontFamily: fonts.primary[600],
        fontSize: 20,
        color: colors.text.primary,
        maxWidth: 209,
        marginBottom: 16
    },
    category: {
        flexDirection: 'row'
    },
    wrapperScroll: {
        marginLeft: -16
    },
    wrapperSection: {
        paddingHorizontal: 16
    },
    sectionLabel: {
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        fontSize: 16,
        marginTop: 30,
        marginBottom: 16
    }
})