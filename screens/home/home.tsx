import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { style } from "./style";
import Buttons from "../../components/buttons";

export default function Home(){

    const [numMan, setNumMan] = useState("");
    const [numWoman, setNumWoman] = useState("");
    const [numChild, setNumChild] = useState("");

    const [sumPeople, setSumPeople] = useState(0);

    const [qtdMeat, setQtdMeat] = useState(0);
    const [qtdMeatExtra, setQtdMeatExtra] = useState(0);

    const [qtdSnacks, setQtdSnacks] = useState(0);
    const [qtdSnacksExtra, setQtdSnacksExtra] = useState(0);

    const [qtdBeer, setQtdBeer] = useState(0);
    const [qtdBeerExtra, setQtdBeerExtra] = useState(0);

    const [qtdWater, setQtdWater] = useState(0);
    const [qtdWaterExtra, setQtdWaterExtra] = useState(0);

    const [qtdSoda, setQtdSoda] = useState(0);
    const [qtdSodaExtra, setQtdSodaExtra] = useState(0);

    const [qtdFood, setQtdFood] = useState(0);
    const [qtdDrink, setQtdDrink] = useState(0);

    const calc = () => {
        const totalPeople = eval(`${numMan}+${numWoman}+${numChild}`)
        setSumPeople(totalPeople)

        const totalMeet = eval(`${numMan}*400 + ${numWoman}*300 + ${numChild}*200`)
        const totalMeetExtra = totalMeet/10
        setQtdMeatExtra(totalMeetExtra)
        setQtdMeat(totalMeet)

        const totalSnack = eval(`${numMan}*150 + ${numWoman}*100 + ${numChild}*50`)
        const totalSnackExtra = totalSnack/10
        setQtdSnacksExtra(totalSnackExtra)
        setQtdSnacks(totalSnack)

        const totalBeer = eval(`${numMan}*4 + ${numWoman}*2`)
        const totalBeerExtra = (totalBeer*1000)/10
        setQtdBeerExtra(totalBeerExtra)
        setQtdBeer(totalBeer)

        const totalWater = eval(`(${numWoman}*1500 + ${numChild}*1500)/1000`)
        const totalWaterExtra = (totalWater*1000)/10
        setQtdWaterExtra(totalWaterExtra)
        setQtdWater(totalWater)

        const totalSoda = eval(`(${numWoman}*1500 + ${numChild}*1500)/1000`)
        const totalSodaExtra = (totalSoda*1000)/10
        setQtdSodaExtra(totalSodaExtra)
        setQtdSoda(totalSoda)

        const totalfood = eval(`${totalMeet}+${totalMeetExtra}+${totalSnack}+${totalSnackExtra}`)
        setQtdFood(totalfood)

        const totaldrink = eval(`((${totalBeer}*1000)+${totalBeerExtra}+(${totalWater}*1000)+${totalWaterExtra}+(${totalSoda}*1000)+${totalSodaExtra})/1000`)
        setQtdDrink(totaldrink)

    };

    const limpar = () => {
        setNumMan("")
        setNumWoman("")
        setNumChild("")
        setSumPeople(0)
        setQtdMeat(0)
        setQtdMeatExtra
        setQtdSnacks(0)
        setQtdSnacksExtra(0)
        setQtdBeer(0)
        setQtdBeerExtra(0)
        setQtdWater(0)
        setQtdWaterExtra(0)
        setQtdSoda(0)
        setQtdSodaExtra(0)
        setQtdFood(0)
        setQtdDrink(0)
        
    }

    return(
        <View style={style.conteiner}>

            <View style={style.conteinerLabel}>
                <Text style={style.title}>ChurraSul</Text>
            </View>

            <View style={style.conteinerText}>
                <Text style={style.text}>Homens</Text>

                <Text style={style.text}>Mulheres</Text>
            </View>

            <View style={style.conteinerTop}>
                <TextInput
                        style={style.answerInput}
                        onChangeText={(text) => setNumMan(text)}
                        value={numMan}
                        keyboardType="numeric"
                />
                
                <TextInput
                        style={style.answerInput}
                        onChangeText={(text) => setNumWoman(text)}
                        value={numWoman}
                        keyboardType="numeric"
                />
                    
            </View>

            <View style={style.conteinerText}>

                <Text style={style.text}>Crianças</Text>

                <Text style={style.text}>               </Text>
            
            </View>

            <View style={style.conteinerTop}>

                <TextInput
                        style={style.answerInput}
                        onChangeText={(text) => setNumChild(text)}
                        value={numChild}
                        keyboardType="numeric"
                    />

                <Buttons
                texts={"Calcular"}
                onChangeNumber={calc}
                style={{ ...style.button, backgroundColor: '#589d52' }}
                />

            </View>

            <View>
                <Text style={style.title}>
                    Resultado
                </Text>
            </View>
            
            <View style={style.conteinerResultado}>
                <Text>Realizamos o calculo para</Text>
                <Text>{sumPeople} participantes</Text>
            </View>
            

            <View>
                <Text style={style.text}>Comida</Text>

                <View style={style.conteinerOrdem}>

                <View style={style.conteinerFood}>
                <Text>{qtdMeat}g</Text>
                <Text>Carne</Text>
                <Text>{qtdMeatExtra}g Extra</Text>
                </View>
                
                <View style={style.conteinerFood}>
                <Text>{qtdSnacks}g</Text>
                <Text>Aperitivos</Text>
                <Text>{qtdSnacksExtra}g Extra</Text>
                </View>
                
                <View style={style.conteinerResultadoFood}>
                    <Text style={style.textFont}>{qtdFood}g</Text>
                    <Text style={style.textFont}>TOTAL</Text>
                </View>

                </View>

            </View>

            <View>
                <Text style={style.text}>Bebida</Text>

                <View style={style.conteinerOrdem}>

                <View style={style.conteinerDrink}>
                <Text>{qtdBeer}L</Text>
                <Text>Cerveja</Text>
                <Text>{qtdBeerExtra}ml Extra</Text>
                </View>

                <View style={style.conteinerDrink}>
                <Text>{qtdWater}L</Text>
                <Text>Água</Text>
                <Text>{qtdWaterExtra}ml Extra</Text>
                </View>

                <View style={style.conteinerDrink}>
                <Text>{qtdSoda}L</Text>
                <Text>Refrigerante</Text>
                <Text>{qtdSodaExtra}ml Extra</Text>
                </View>

                </View>
            </View>

            <View style={style.conteinerResultadoDrink}>
                <Text style={style.textFont}>{qtdDrink} Litros</Text>
                <Text style={style.textFont}>TOTAL</Text>
            </View>

            <Buttons
                texts={"Limpar"}
                onChangeNumber={limpar}
                style={{ ...style.button, backgroundColor: '#ff0000' }}
                />
            
        </View>

        
    )}