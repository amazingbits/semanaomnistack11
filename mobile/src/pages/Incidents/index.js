import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import api from '../../services/api';

import imgLogo from '../../assets/logo.png';

import styles from './styles';

export default function Indicents() {
    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState(0);

    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    function navigateToDetail(incident) {
        navigation.navigate('Detail', { incident });
    }

    async function loadIncidents(){
        //travo o carregamento para evitar que o sistema carregue mais de uma vez
        if(loading){
            return;
        }

        //se meu sistema já fez o primeiro carregamento e a quantidade de
        //incidents for igual ao total, ou seja, chegar ao fim, o sistema
        //não fará mais carregamentos
        if(total > 0 && incidents.length === total){
            return;
        }

        setLoading(true);

        const response = await api.get('/incidents', {
            params: { page }
        });
        setIncidents([...incidents, ...response.data.incidents]);
        setTotal(response.headers['x-total-count']);

        setPage(page + 1);
        setLoading(false);
    }

    useEffect( () => {
        loadIncidents();
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={imgLogo}/>
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}> {total} casos </Text>.
                </Text>
            </View>

            <Text style={styles.title}>Bem-vindo</Text>
            <Text style={styles.description} >Escolha um dos casos abaixo e salve o dia.</Text>

            <FlatList
                style={styles.incidentList}
                data={incidents}
                keyExtractor={incident => String(incident.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadIncidents}
                //quantos % do fim da página para carregar mais itens, nesse caso,
                // 0.2, ou seja, 20% (vai de 0 a 1, onde 1 é 100%)
                onEndReachedThreshold={0.2}
                renderItem={({ item: incident }) => (
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>ONG:</Text>
                        <Text style={styles.incidentValue}>{incident.name}</Text>

                        <Text style={styles.incidentProperty}>CASO:</Text>
                        <Text style={styles.incidentValue}>{incident.title}</Text>

                        <Text style={styles.incidentProperty}>VALOR:</Text>
                        <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</Text>

                        <TouchableOpacity style={styles.incidentButton} onPress={() => navigateToDetail(incident)}>
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name='arrow-right' size={16} color='#e02041' />
                        </TouchableOpacity>
                    </View>
                )}
            />
            <View style={styles.lastView}></View>

        </View>
    );
}