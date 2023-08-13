import { Text, TextInput, View, TouchableOpacity,  FlatList} from "react-native";
import { styles } from '../Home/styles';
import { Participant } from "../../components/Paticipant";


export function Home(){

  const participants = [
    { id: 1, name: 'Guilherme Aiex'},
    { id: 2, name: 'Thiaguinho Alves'},
    { id: 3, name: 'Maria de Paula'},
    { id: 4, name: 'Jose Almeida'},
    { id: 5, name: 'João Victor'},
    { id: 6, name: 'Giulia Barra'},
    { id: 7, name: 'Tomas Benicio'},
    { id: 8, name: 'Dani Cavalier'},
    { id: 9, name: 'Alex Afonso'},
    { id: 10, name: 'João Dias'},
    { id: 11, name: 'Patrick King'},
  ]


  function handleAddParticipant(){
    console.log('Você clicou no botão Adicionar')
  }

  function handleRemoveParticipant(name: string,){
    console.log(`Você clicou em remover o participante ${name}`)
  }

    return (
        <View style = {styles.container}>
      
        <Text style = {styles.eventName}>
          Nome do Evento 
        </Text>
  
        <Text style = {styles.eventDate}>
          Sexta, 11 de Agosto de 2023 
        </Text>
        <View style = {styles.form}>
        <TextInput 
        style = { styles.input }
        placeholder="Nome do participante"
        placeholderTextColor='#6B6B6B'
        //keyboardType="numeric"
        //autoCapitalize="characters"
        />

        <TouchableOpacity style = {styles.button} onPress={handleAddParticipant}>
          <Text style = {styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
        </View>
        
        <FlatList 
          data = {participants}
          keyExtractor ={ item => item.id }
          renderItem={({ item }) => (
            <Participant
            name={ item.name }
            onRemove={() => handleRemoveParticipant(item.name)} />
          )}
          showsVerticalScrollIndicator = {false}
        />

      </View>
        
    )
}